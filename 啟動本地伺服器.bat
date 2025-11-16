@echo off
echo ========================================
echo   啟動本地伺服器
echo ========================================
echo.
echo 正在啟動 Python HTTP 伺服器...
echo.
echo 伺服器啟動後，請在瀏覽器訪問：
echo http://localhost:8000
echo.
echo 按 Ctrl+C 可以停止伺服器
echo.
cd /d "%~dp0"
python -m http.server 8000
pause

