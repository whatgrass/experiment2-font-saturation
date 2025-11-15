# jsPsych 7 本地檔案設定說明

## 下載 jsPsych 7

本實驗使用 jsPsych 7 本地版本，需要手動下載相關檔案。

### 方法一：從官方網站下載（推薦）

1. 前往 jsPsych 官方網站：https://www.jspsych.org/

2. 下載 jsPsych 7.x 版本：
   - 前往 https://github.com/jspsych/jsPsych/releases
   - 下載最新的 `jspsych-7.x.x.zip` 檔案

3. 解壓縮後，您需要將以下檔案複製到 `jspsych/` 資料夾：

   **必要檔案結構：**
   ```
   jspsych/
   ├── css/
   │   └── jspsych.css
   ├── jspsych.js
   └── plugins/
       ├── jspsych-html-keyboard-response.js
       └── jspsych-html-button-response.js
   ```

4. **具體步驟：**
   - 從解壓縮的資料夾中複製 `jspsych.js` 到 `jspsych/`
   - 從 `css/` 資料夾中複製 `jspsych.css` 到 `jspsych/css/`
   - 從 `plugins/` 資料夾中複製以下檔案到 `jspsych/plugins/`：
     - `jspsych-html-keyboard-response.js`
     - `jspsych-html-button-response.js`

### 方法二：使用 npm 下載（需要 Node.js）

如果您已安裝 Node.js，可以使用以下命令：

```bash
# 進入專案目錄
cd experiment2-font-saturation

# 使用 npm 下載 jsPsych（如果已安裝）
npm install jspsych@7

# 然後從 node_modules/jspsych 複製檔案到 jspsych/ 資料夾
# Windows PowerShell:
Copy-Item -Path "node_modules/jspsych/dist/jspsych.js" -Destination "jspsych/jspsych.js"
Copy-Item -Path "node_modules/jspsych/css/jspsych.css" -Destination "jspsych/css/jspsych.css"
Copy-Item -Path "node_modules/@jspsych/plugin-html-keyboard-response/dist/index.browser.js" -Destination "jspsych/plugins/jspsych-html-keyboard-response.js"
Copy-Item -Path "node_modules/@jspsych/plugin-html-button-response/dist/index.browser.js" -Destination "jspsych/plugins/jspsych-html-button-response.js"
```

### 方法三：直接下載單一檔案（快速方法）

如果您只需要核心檔案，可以直接從 CDN 下載並保存：

1. **jspsych.js**：
   - 訪問：https://unpkg.com/jspsych@7/dist/jspsych.js
   - 另存為：`jspsych/jspsych.js`

2. **jspsych.css**：
   - 訪問：https://unpkg.com/jspsych@7/css/jspsych.css
   - 另存為：`jspsych/css/jspsych.css`

3. **jspsych-html-keyboard-response.js**：
   - 訪問：https://unpkg.com/@jspsych/plugin-html-keyboard-response@1/dist/index.browser.js
   - 另存為：`jspsych/plugins/jspsych-html-keyboard-response.js`

4. **jspsych-html-button-response.js**：
   - 訪問：https://unpkg.com/@jspsych/plugin-html-button-response@1/dist/index.browser.js
   - 另存為：`jspsych/plugins/jspsych-html-button-response.js`

## 驗證設定

下載完成後，確認檔案結構如下：

```
experiment2-font-saturation/
├── jspsych/
│   ├── css/
│   │   └── jspsych.css          ✓ 必須存在
│   ├── plugins/
│   │   ├── jspsych-html-keyboard-response.js  ✓ 必須存在
│   │   └── jspsych-html-button-response.js    ✓ 必須存在
│   └── jspsych.js               ✓ 必須存在
├── index.html
└── ...
```

## 測試

1. 開啟 `index.html` 在瀏覽器中
2. 如果看到「正在載入實驗...」，表示檔案路徑可能有問題
3. 如果點擊「開始實驗」按鈕後正常載入，表示設定成功

## 常見問題

### Q: 顯示「無法載入 jsPsych 庫」錯誤？

**A:** 檢查以下項目：
1. `jspsych/jspsych.js` 檔案是否存在
2. `jspsych/css/jspsych.css` 檔案是否存在
3. `jspsych/plugins/` 資料夾中的外掛檔案是否存在
4. 使用瀏覽器開發者工具（F12）查看 Console 中的錯誤訊息

### Q: 檔案路徑錯誤？

**A:** 確保所有路徑都是相對路徑：
- `./jspsych/jspsych.js` ✓
- `/jspsych/jspsych.js` ✗（絕對路徑，不適用於 GitHub Pages）

### Q: 外掛無法載入？

**A:** 確認外掛檔案名稱與 `index.html` 中的引用一致：
- `jspsych-html-keyboard-response.js`
- `jspsych-html-button-response.js`

## 版本資訊

- **jsPsych 版本**：7.x
- **必要外掛**：
  - html-keyboard-response
  - html-button-response

## 注意事項

- 請使用 jsPsych 7.x 版本，不要使用 6.x 或更舊版本（API 不同）
- 確保所有檔案都已下載完整，缺少任何檔案都可能導致實驗無法運行
- 下載的檔案大小應該約為：
  - `jspsych.js`: ~200-300 KB
  - `jspsych.css`: ~10-20 KB
  - 外掛檔案：每個 ~20-50 KB

