import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  let decodedUrl = decodeURI(req.url.split('?')[0]);
  if (decodedUrl === '/') decodedUrl = '/index.html';

  // Smart rewrite for nested subpages inside sites/khordo (Next.js export)
  if (decodedUrl.startsWith('/sites/khordo/')) {
    if (decodedUrl.includes('/_next/')) {
      const sub = decodedUrl.substring(decodedUrl.indexOf('/_next/'));
      decodedUrl = '/sites/khordo' + sub;
    } else if (decodedUrl.includes('/img/')) {
      const sub = decodedUrl.substring(decodedUrl.indexOf('/img/'));
      decodedUrl = '/sites/khordo' + sub;
    } else if (decodedUrl.includes('/fonts/')) {
      const sub = decodedUrl.substring(decodedUrl.indexOf('/fonts/'));
      decodedUrl = '/sites/khordo' + sub;
    } else if (decodedUrl.includes('/uploads/')) {
      const sub = decodedUrl.substring(decodedUrl.indexOf('/uploads/'));
      decodedUrl = '/sites/khordo' + sub;
    }
  }

  let filePath = path.join(__dirname, decodedUrl);

  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  function serveFile(targetFile) {
    const ext = path.extname(targetFile).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(targetFile, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Not Found');
      } else {
        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
          'Pragma': 'no-cache',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(data);
      }
    });
  }

  fs.stat(filePath, (err, stats) => {
    if (err) {
      // If it looks like a directory without trailing slash, check sub-index
      const possibleIndex = path.join(filePath, 'index.html');
      if (fs.existsSync(possibleIndex)) {
        return serveFile(possibleIndex);
      }

      // Check if appending .html works
      if (fs.existsSync(filePath + '.html')) {
        return serveFile(filePath + '.html');
      }

      // Fallback to root index.html for SPA client-side routes
      const rootIndex = path.join(__dirname, 'index.html');
      return serveFile(rootIndex);
    }

    if (stats.isDirectory()) {
      const subIndex = path.join(filePath, 'index.html');
      if (fs.existsSync(subIndex)) {
        return serveFile(subIndex);
      }
      const rootIndex = path.join(__dirname, 'index.html');
      return serveFile(rootIndex);
    }

    serveFile(filePath);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Portfolio Server running at http://localhost:${PORT}/`);
});
