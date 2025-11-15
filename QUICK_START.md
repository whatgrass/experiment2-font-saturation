# 🚀 快速開始指南

## 📋 三步驟啟動實驗

### 步驟 1️⃣：下載 jsPsych 7

請按照 `SETUP.md` 中的說明下載 jsPsych 7 本地檔案。

**快速方法**：從以下網址直接下載並保存到對應資料夾：

1. **jspsych.js**：
   - 下載：https://unpkg.com/jspsych@7/dist/jspsych.js
   - 保存到：`jspsych/jspsych.js`

2. **jspsych.css**：
   - 下載：https://unpkg.com/jspsych@7/css/jspsych.css
   - 保存到：`jspsych/css/jspsych.css`

3. **jspsych-html-keyboard-response.js**：
   - 下載：https://unpkg.com/@jspsych/plugin-html-keyboard-response@1/dist/index.browser.js
   - 保存到：`jspsych/plugins/jspsych-html-keyboard-response.js`

4. **jspsych-html-button-response.js**：
   - 下載：https://unpkg.com/@jspsych/plugin-html-button-response@1/dist/index.browser.js
   - 保存到：`jspsych/plugins/jspsych-html-button-response.js`

### 步驟 2️⃣：本地測試

#### 方法 A：直接開啟（最簡單）

1. 在檔案總管中找到 `index.html`
2. 雙擊開啟
3. 點擊「開始實驗」按鈕

#### 方法 B：使用 Live Server（推薦，VSCode/Cursor）

1. 在 VSCode/Cursor 中安裝 **Live Server** 擴充套件
2. 在 `index.html` 上按右鍵
3. 選擇 **"Open with Live Server"**
4. 瀏覽器會自動開啟實驗頁面

#### 方法 C：使用 Python 本地伺服器

```bash
# 進入專案目錄
cd experiment2-font-saturation

# Python 3
python -m http.server 8000

# 然後訪問 http://localhost:8000
```

### 步驟 3️⃣：確認實驗運行

1. 看到「開始實驗」按鈕 → ✅ 載入成功
2. 點擊按鈕後看到歡迎頁 → ✅ jsPsych 載入成功
3. 可以完成整個實驗流程 → ✅ 實驗正常運行

## 🐛 快速除錯（VSCode/Cursor）

### 開啟開發者工具

- **Windows/Linux**：按 `F12` 或 `Ctrl+Shift+I`
- **Mac**：按 `Cmd+Option+I`

### 檢查錯誤

1. 開啟 **Console** 標籤
2. 查看是否有紅色錯誤訊息
3. 常見錯誤：
   - `jsPsych is not defined` → jsPsych 檔案未下載或路徑錯誤
   - `404 Not Found` → 檔案路徑錯誤
   - `CORS error` → 需要使用本地伺服器（方法 B 或 C）

### 設定中斷點

1. 在 `experiment2.js` 中點擊行號左側設定中斷點
2. 重新載入頁面
3. 程式執行到中斷點時會暫停
4. 可以查看變數值、單步執行等

## 📤 部署到 GitHub Pages

詳細步驟請參考 `DEPLOYMENT.md`，以下是快速版本：

```bash
# 1. 初始化 Git
git init
git add .
git commit -m "Initial commit"

# 2. 添加 Remote（替換 YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/experiment2-font-saturation.git

# 3. 推送到 GitHub
git branch -M main
git push -u origin main

# 4. 在 GitHub 上啟用 Pages
# Settings → Pages → Source: main branch → Save

# 5. 訪問實驗
# https://YOUR_USERNAME.github.io/experiment2-font-saturation/
```

## 📚 檔案說明

| 檔案 | 用途 |
|------|------|
| `index.html` | 實驗入口頁面 |
| `script/experiment2.js` | 實驗主程式 |
| `css/experiment2.css` | 實驗樣式 |
| `README.md` | 完整專案說明 |
| `SETUP.md` | jsPsych 設定說明 |
| `DEPLOYMENT.md` | GitHub Pages 部署教學 |
| `PROJECT_STRUCTURE.md` | 專案結構說明 |

## ❓ 常見問題

### Q: 點擊「開始實驗」沒有反應？

**A:** 
1. 開啟開發者工具（F12）查看 Console 錯誤
2. 確認 jsPsych 檔案已下載
3. 確認檔案路徑正確

### Q: 顯示「無法載入 jsPsych 庫」？

**A:**
1. 確認 `jspsych/` 資料夾存在
2. 確認所有 jsPsych 檔案已下載
3. 檢查檔案名稱是否正確（大小寫敏感）

### Q: 實驗頁面樣式亂掉？

**A:**
1. 確認 `css/experiment2.css` 存在
2. 確認 `index.html` 中的 CSS 路徑正確
3. 清除瀏覽器快取後重新載入

### Q: GitHub Pages 無法顯示？

**A:**
1. 確認 `.nojekyll` 檔案存在
2. 確認所有路徑使用相對路徑（`./` 開頭）
3. 等待幾分鐘讓 GitHub Pages 完成部署

## 🎯 下一步

- 閱讀 `README.md` 了解完整功能
- 閱讀 `PROJECT_STRUCTURE.md` 了解專案結構
- 修改 `experiment2.js` 自訂實驗參數
- 閱讀 `DEPLOYMENT.md` 部署到 GitHub Pages

## 💡 提示

- 建議使用 **Chrome** 或 **Firefox** 瀏覽器
- 建議使用 **全螢幕模式** 進行實驗
- 建議在正式使用前先進行測試
- 記得定期備份您的程式碼

---

**需要協助？** 請查看其他文件：
- `README.md` - 完整說明
- `SETUP.md` - jsPsych 設定
- `DEPLOYMENT.md` - 部署教學

