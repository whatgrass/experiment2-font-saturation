# ✨ 已更新為 CDN 版本

## 🎉 好消息！

實驗現在已經改用 **CDN 版本的 jsPsych**，這意味著：

### ✅ 您不需要：
- ❌ 下載 jsPsych 檔案
- ❌ 設定 `jspsych/` 資料夾
- ❌ 按照 `SETUP.md` 的步驟下載檔案

### ✅ 您可以直接：
- ✅ 開啟 `index.html` 直接測試（需要網路連線）
- ✅ 直接部署到 GitHub Pages
- ✅ 立即使用，無需額外設定

## 📋 現在的做法

### 方式 1：直接部署到 GitHub Pages（推薦）

1. **直接推送現有檔案到 GitHub**：
   ```bash
   cd experiment2-font-saturation
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/experiment2-font-saturation.git
   git branch -M main
   git push -u origin main
   ```

2. **啟用 GitHub Pages**：
   - GitHub → Settings → Pages → Source: main branch → Save

3. **完成！**訪問 `https://YOUR_USERNAME.github.io/experiment2-font-saturation/`

### 方式 2：本地測試（需要網路）

1. 雙擊 `index.html` 檔案
2. 或使用 Live Server
3. **需要網路連線**（因為 jsPsych 從 CDN 載入）

## 🔄 CDN vs 本地版本

### CDN 版本（目前使用）✅
- ✅ 不需要下載檔案
- ✅ 可以直接部署到 GitHub Pages
- ✅ 自動獲得最新版本
- ⚠️ 需要網路連線才能運行

### 本地版本（舊方式）
- ✅ 可以在離線環境運行
- ✅ 不依賴外部服務
- ❌ 需要手動下載檔案
- ❌ 需要設定檔案結構

## 📝 檔案變更

`index.html` 現在使用：
```html
<!-- CDN 版本 -->
<link href="https://unpkg.com/jspsych@7.3.3/css/jspsych.css" rel="stylesheet"/>
<script src="https://unpkg.com/jspsych@7.3.3/dist/jspsych.js"></script>
<script src="https://unpkg.com/@jspsych/plugin-html-keyboard-response@1.1.1/dist/index.browser.js"></script>
<script src="https://unpkg.com/@jspsych/plugin-html-button-response@1.1.1/dist/index.browser.js"></script>
```

## 🚀 快速開始（更新版）

### 步驟 1：測試實驗

直接雙擊 `index.html` 檔案（需要網路連線）

### 步驟 2：部署到 GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/experiment2-font-saturation.git
git branch -M main
git push -u origin main
```

然後在 GitHub 上啟用 Pages → 完成！

## ❓ 常見問題

### Q: 如果我想離線運行怎麼辦？

**A:** 如果您需要離線運行，可以：
1. 參考 `SETUP.md` 下載本地版本的 jsPsych
2. 修改 `index.html` 改回本地路徑：
   ```html
   <!-- 改回本地版本 -->
   <link href="./jspsych/css/jspsych.css" rel="stylesheet"/>
   <script src="./jspsych/jspsych.js"></script>
   <script src="./jspsych/plugins/jspsych-html-keyboard-response.js"></script>
   <script src="./jspsych/plugins/jspsych-html-button-response.js"></script>
   ```

### Q: CDN 會不會有網路問題？

**A:** 
- unpkg.com 是可靠的 CDN 服務，通常很穩定
- 如果擔心，可以下載本地版本（見上方）

### Q: `jspsych/` 資料夾還需要嗎？

**A:** 不需要了！您可以刪除 `jspsych/` 資料夾（如果存在），因為現在使用 CDN 版本。

## 📌 總結

- ✅ **現在可以直接部署到 GitHub Pages**
- ✅ **不需要下載任何檔案**
- ✅ **直接推送即可使用**

享受使用吧！🎉

