# 實驗二：一鍵推送到 GitHub
# 使用方法：在 PowerShell 中執行 .\push-to-github.ps1

# ===== 請修改這裡 =====
$GITHUB_USERNAME = "whatgrass"  # GitHub 使用者名稱
$REPOSITORY_NAME = "experiment2-font-saturation"  # Repository 名稱（可以修改）
# ======================

$GIT_PATH = "C:\Program Files\Git\cmd\git.exe"
$PROJECT_PATH = "C:\Users\Lucas\Favorites\experiment2-font-saturation"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  實驗二：推送到 GitHub" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 檢查是否有設定使用者名稱
if ($GITHUB_USERNAME -eq "YOUR_USERNAME") {
    Write-Host "⚠️  錯誤：請先設定您的 GitHub 使用者名稱！" -ForegroundColor Red
    Write-Host ""
    Write-Host "請編輯 push-to-github.ps1 檔案，將 YOUR_USERNAME 改成您的 GitHub 使用者名稱" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "按 Enter 結束"
    exit
}

# 進入專案目錄
Set-Location $PROJECT_PATH

Write-Host "📂 進入專案目錄..." -ForegroundColor Green

# 添加所有檔案
Write-Host ""
Write-Host "📝 添加檔案到 Git..." -ForegroundColor Green
& $GIT_PATH add .

# 檢查是否有變更
$status = & $GIT_PATH status --short
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "ℹ️  沒有新的變更需要提交" -ForegroundColor Yellow
} else {
    # 提交檔案
    Write-Host ""
    Write-Host "💾 提交檔案..." -ForegroundColor Green
    $commitMessage = "實驗二字型飽和測驗 - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    & $GIT_PATH commit -m $commitMessage
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ 提交成功！" -ForegroundColor Green
    } else {
        Write-Host "⚠️  提交失敗，可能需要先設定 Git 使用者資訊" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "請執行以下命令設定 Git：" -ForegroundColor Yellow
        Write-Host "git config --global user.name ""您的名稱""" -ForegroundColor Cyan
        Write-Host "git config --global user.email ""您的Email""" -ForegroundColor Cyan
        Read-Host "按 Enter 結束"
        exit
    }
}

# 檢查 remote 是否存在
$remoteUrl = "https://github.com/$GITHUB_USERNAME/$REPOSITORY_NAME.git"
$remoteExists = & $GIT_PATH remote -v 2>&1 | Select-String -Pattern "origin"

if (-not $remoteExists) {
    Write-Host ""
    Write-Host "🔗 設定 GitHub Remote..." -ForegroundColor Green
    & $GIT_PATH remote add origin $remoteUrl
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Remote 設定成功！" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Remote 設定失敗" -ForegroundColor Red
        Read-Host "按 Enter 結束"
        exit
    }
} else {
    Write-Host ""
    Write-Host "ℹ️  Remote 已存在，跳過設定" -ForegroundColor Yellow
}

# 設定分支為 main
Write-Host ""
Write-Host "🌿 設定分支為 main..." -ForegroundColor Green
& $GIT_PATH branch -M main 2>&1 | Out-Null

# 推送到 GitHub
Write-Host ""
Write-Host "🚀 推送到 GitHub..." -ForegroundColor Green
Write-Host "   請輸入您的 GitHub 使用者名稱和 Personal Access Token" -ForegroundColor Yellow
Write-Host "   （如果已經設定過，可能不需要輸入）" -ForegroundColor Yellow
Write-Host ""

& $GIT_PATH push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  ✅ 推送成功！" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "📎 您的 GitHub Pages URL：" -ForegroundColor Cyan
    Write-Host "   https://$GITHUB_USERNAME.github.io/$REPOSITORY_NAME/" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "💡 記得到 GitHub 啟用 Pages：" -ForegroundColor Cyan
    Write-Host "   Settings → Pages → Source: main branch → Save" -ForegroundColor Yellow
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "⚠️  推送失敗，請檢查：" -ForegroundColor Red
    Write-Host "   1. GitHub repository 是否已建立" -ForegroundColor Yellow
    Write-Host "   2. 使用者名稱和 repository 名稱是否正確" -ForegroundColor Yellow
    Write-Host "   3. 是否已設定 Personal Access Token" -ForegroundColor Yellow
    Write-Host ""
}

Read-Host "按 Enter 結束"

