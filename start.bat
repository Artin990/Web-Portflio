@echo off
cd /d "%~dp0"
echo Starting Joseph Santamaria v9 Clone on http://localhost:3000/ ...
start http://localhost:3000/
node server.mjs
pause
