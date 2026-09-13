@echo off
cd /d "%~dp0"
echo Checking port 3000...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000 ^| findstr LISTENING') do (
    taskkill /f /pid %%a >nul 2>&1
)
echo Starting Joseph Santamaria Portfolio on http://localhost:3000/ ...
start http://localhost:3000/
node server.mjs
pause
