# 🔧 修復 CDN 載入問題

## 問題描述

如果發布到 GitHub Pages 後出現 `Uncaught ReferenceError: jsPsychModule is not defined` 錯誤，這是因為 jsPsych 7 的外掛 CDN 載入方式有問題。

## ✅ 已嘗試的修復

1. ✅ 已改用 jsdelivr CDN（更穩定）
2. ✅ 已確保載入順序正確

## 🔄 如果問題仍然存在 - 改用本地版本（推薦）

如果 CDN 版本仍然有問題，建議改用本地版本的 jsPsych。這是**最可靠的解決方案**。

### 步驟 1：下載 jsPsych 檔案

快速下載方法（直接右鍵另存為）：

1. **jspsych.js**：
   - 訪問：https://unpkg.com/jspsych@7.3.3/dist/jspsych.js
   - 右鍵 → 另存為 → 保存到：`jspsych/jspsych.js`

2. **jspsych.css**：
   - 訪問：https://unpkg.com/jspsych@7.3.3/css/jspsych.css
   - 右鍵 → 另存為 → 保存到：`jspsych/css/jspsych.css`

3. **jspsych-html-keyboard-response.js**：
   - 訪問：https://unpkg.com/@jspsych/plugin-html-keyboard-response@1.1.1/dist/index.browser.js
   - 右鍵 → 另存為 → 保存到：`jspsych/plugins/jspsych-html-keyboard-response.js`

4. **jspsych-html-button-response.js**：
   - 訪問：https://unpkg.com/@jspsych/plugin-html-button-response@1.1.1/dist/index.browser.js
   - 右鍵 → 另存為 → 保存到：`jspsych/plugins/jspsych-html-button-response.js`

### 步驟 2：修改 index.html

將 `index.html` 中的 CDN 連結改為本地路徑：

```html
<!-- 改為本地版本 -->
<link href="./jspsych/css/jspsych.css" rel="stylesheet" type="text/css"/>
<script src="./jspsych/jspsych.js"></script>
<script src="./jspsych/plugins/jspsych-html-keyboard-response.js"></script>
<script src="./jspsych/plugins/jspsych-html-button-response.js"></script>
```

### 步驟 3：重新推送到 GitHub

```bash
git add .
git commit -m "改用本地版本的 jsPsych"
git push
```

## 🔍 驗證修復

1. 檢查檔案結構：
   ```
   jspsych/
   ├── css/
   │   └── jspsych.css
   ├── plugins/
   │   ├── jspsych-html-keyboard-response.js
   │   └── jspsych-html-button-response.js
   └── jspsych.js
   ```

2. 測試本地：
   - 雙擊 `index.html` 檔案
   - 確認可以正常運行

3. 推送並測試 GitHub Pages：
   - 推送後等待 1-5 分鐘
   - 訪問 GitHub Pages URL
   - 確認可以正常運行

## 💡 為什麼本地版本更可靠？

- ✅ 不依賴外部 CDN
- ✅ 不受網路問題影響
- ✅ 載入速度更快
- ✅ 不會有模組載入問題
- ✅ GitHub Pages 完全支援

## 📝 當前狀態

目前 `index.html` 使用：
- jsPsych 核心：unpkg CDN
- 外掛：jsdelivr CDN

如果 CDN 版本有問題，請按照上述步驟改用本地版本。

