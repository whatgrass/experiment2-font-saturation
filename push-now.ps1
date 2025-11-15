# 直接推送檔案到 GitHub
# 在 PowerShell 中執行這個腳本

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  正在推送到 GitHub..." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$gitPath = "C:\Program Files\Git\cmd\git.exe"
$projectPath = "C:\Users\Lucas\Favorites\experiment2-font-saturation"

Set-Location $projectPath

Write-Host "🚀 開始推送..." -ForegroundColor Green
Write-Host ""

# 執行推送（會要求輸入使用者名稱和密碼/Token）
& $gitPath push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  ✅ 推送成功！" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "📎 您的 GitHub Pages URL：" -ForegroundColor Cyan
    Write-Host "   https://wahtgrass.github.io/experiment2-font-saturation/" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "💡 記得到 GitHub 啟用 Pages：" -ForegroundColor Cyan
    Write-Host "   Settings → Pages → Source: main branch → Save" -ForegroundColor Yellow
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "⚠️  推送失敗，可能的原因：" -ForegroundColor Red
    Write-Host "   1. Repository 尚未建立（前往 https://github.com/new 建立）" -ForegroundColor Yellow
    Write-Host "   2. 需要輸入 Personal Access Token（不是 GitHub 密碼）" -ForegroundColor Yellow
    Write-Host "   3. 使用者名稱或 Token 錯誤" -ForegroundColor Yellow
    Write-Host ""
}

Read-Host "按 Enter 結束"

