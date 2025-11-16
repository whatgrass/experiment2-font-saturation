# 下載 jsPsych 檔案
$ProgressPreference = 'SilentlyContinue'

Write-Host "正在下載 jsPsych 檔案..." -ForegroundColor Cyan

# 下載 jspsych.js
$url1 = "https://cdn.jsdelivr.net/npm/jspsych@7.3.3/dist/jspsych.js"
$path1 = "C:\Users\Lucas\Favorites\experiment2-font-saturation\jspsych\jspsych.js"

try {
    $webClient = New-Object System.Net.WebClient
    $webClient.DownloadFile($url1, $path1)
    $file1 = Get-Item $path1
    if ($file1.Length -gt 100000) {
        Write-Host "✓ jspsych.js 下載成功，大小: $([math]::Round($file1.Length/1KB,2)) KB" -ForegroundColor Green
    } else {
        Write-Host "✗ jspsych.js 下載失敗（檔案太小）" -ForegroundColor Red
    }
} catch {
    Write-Host "✗ jspsych.js 下載失敗: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "完成！" -ForegroundColor Green

