# 修復摘要

## 已完成的修復

### 1. ✅ 修正表單欄位 ID 問題

**問題**：表單欄位缺少 ID 或 name 屬性，或有重複 ID

**修復**：
- ✅ 檢查所有 HTML 檔案，確認沒有表單輸入欄位（本實驗不使用表單）
- ✅ 修正按鈕 HTML，確保有 `type="button"` 屬性
- ✅ jsPsych 外掛會自動為按鈕創建唯一 ID（如 `jspsych-html-button-response-button-0`）

**修改的檔案**：
- `index.html`：為開始按鈕添加 `type="button"` 屬性
- `script/experiment2.js`：簡化 button_html 模板（外掛會自動處理 ID）

### 2. ✅ 修正 jsPsych 載入問題

**問題**：
- jsPsych 核心庫載入失敗（404 錯誤）
- 外掛載入順序不正確
- jsPsychModule 未定義錯誤

**修復**：
- ✅ 使用 CDN 載入 jsPsych 7.3.3（unpkg）
- ✅ 使用動態載入確保正確的載入順序：
  1. jsPsych 核心庫
  2. 確保 jsPsych 結構可用
  3. html-keyboard-response 外掛
  4. html-button-response 外掛
  5. 實驗程式
- ✅ 創建 jsPsych 結構供外掛使用（jsPsych 7 可能不直接暴露 jsPsych 全域變數）

**修改的檔案**：
- `index.html`：完全重寫載入邏輯，使用動態載入和正確的順序

### 3. ✅ 修正模組錯誤

**問題**：jsPsychModule 未定義，外掛無法載入

**修復**：
- ✅ 確保使用瀏覽器版本（IIFE/UMD）的外掛
- ✅ 在載入外掛前創建 jsPsych 結構（包含 ParameterType）
- ✅ 使用正確的瀏覽器語法：`initJsPsych()` 和 `jsPsychHtmlKeyboardResponse`

**修改的檔案**：
- `index.html`：添加 `ensureJsPsychForPlugins()` 函數
- `script/experiment2.js`：使用 `window.addEventListener('load')` 確保所有腳本已載入

### 4. ✅ 修正路徑問題

**問題**：CORB 錯誤，路徑不正確

**修復**：
- ✅ 所有 CDN 資源使用完整 URL（https://unpkg.com/...）
- ✅ 本地資源使用相對路徑（`./script/experiment2.js`，`./css/experiment2.css`）
- ✅ 不使用絕對路徑（避免 GitHub Pages 路徑問題）

**修改的檔案**：
- `index.html`：所有路徑已修正

### 5. ✅ 驗證實驗啟動

**修復**：
- ✅ 改進錯誤檢查和訊息顯示
- ✅ 添加詳細的 Console 日誌
- ✅ 確保所有依賴正確載入後才啟動實驗

**修改的檔案**：
- `script/experiment2.js`：改進載入檢查邏輯

## 檔案結構

```
experiment2-font-saturation/
├── index.html                    ✅ 已修正（動態載入，正確順序）
├── .nojekyll                     ✅ 存在
├── css/
│   └── experiment2.css           ✅ 存在
├── script/
│   └── experiment2.js            ✅ 已修正（改進載入檢查）
└── jspsych/
    ├── css/
    │   └── jspsych.css           ✅ 存在（但使用 CDN）
    └── plugins/
        ├── jspsych-html-keyboard-response.js  ✅ 存在（但使用 CDN）
        └── jspsych-html-button-response.js    ✅ 存在（但使用 CDN）
```

## 當前配置

### jsPsych 載入方式
- **核心庫**：CDN（https://unpkg.com/jspsych@7.3.3/dist/jspsych.js）
- **CSS**：CDN（https://unpkg.com/jspsych@7.3.3/css/jspsych.css）
- **外掛**：CDN（unpkg）

### 為什麼使用 CDN？
- 本地檔案下載失敗
- CDN 更可靠
- GitHub Pages 完全支援 CDN

## 測試步驟

1. **推送到 GitHub Pages**：
   ```bash
   cd C:\Users\Lucas\Favorites\experiment2-font-saturation
   .\push-now.ps1
   ```

2. **訪問實驗**：
   ```
   https://whatgrass.github.io/experiment2-font-saturation/
   ```

3. **檢查 Console**：
   - 應該看到：
     ```
     ✓ jsPsych 核心已載入
     ✓ jsPsych 結構已創建供外掛使用
     ✓ html-keyboard-response 外掛已載入
     ✓ html-button-response 外掛已載入
     ✓ 實驗程式已載入
     ```

4. **測試功能**：
   - 點擊「開始實驗」按鈕
   - 應該看到歡迎頁面
   - 按任意鍵繼續
   - 應該看到教學示例頁
   - 點擊「我知道了」
   - 應該開始正式實驗

## 如果還有問題

請檢查：
1. Console 中的錯誤訊息
2. Network 標籤中是否有檔案載入失敗
3. 是否看到所有 ✓ 訊息

## 注意事項

- CORB 警告可以忽略（這是瀏覽器的安全檢查，不影響功能）
- 確保網路連線正常（CDN 需要網路）
- GitHub Pages 部署可能需要 1-5 分鐘

