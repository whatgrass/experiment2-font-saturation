# 專案結構說明

## 📁 完整資料夾樹狀圖

```
experiment2-font-saturation/
│
├── index.html                          # 主頁面（實驗入口）
├── .nojekyll                           # GitHub Pages 設定檔（避免忽略底線資料夾）
├── README.md                           # 專案說明文件
├── SETUP.md                            # jsPsych 下載設定說明
├── DEPLOYMENT.md                       # GitHub Pages 部署教學
├── PROJECT_STRUCTURE.md                # 本檔案（專案結構說明）
│
├── jspsych/                            # jsPsych 7 本地檔案（需下載）
│   ├── css/
│   │   └── jspsych.css                 # jsPsych 核心樣式表
│   ├── plugins/                        # jsPsych 外掛
│   │   ├── jspsych-html-keyboard-response.js  # 鍵盤反應外掛
│   │   └── jspsych-html-button-response.js    # 按鈕反應外掛
│   └── jspsych.js                      # jsPsych 核心庫
│
├── css/                                # 實驗專屬樣式
│   └── experiment2.css                 # 實驗二樣式表
│       ├── 整體頁面樣式
│       ├── 開始按鈕樣式
│       ├── 6×6 文字矩陣樣式
│       ├── 教學示例樣式
│       └── 結果摘要樣式
│
├── script/                             # JavaScript 程式碼
│   └── experiment2.js                  # 實驗主程式
│       ├── 實驗初始化
│       ├── 時間軸建立
│       ├── 文字矩陣生成
│       ├── 錯字生成
│       ├── 點擊事件處理
│       └── 結果統計與顯示
│
└── assets/                             # 資源檔案（選用）
    └── （可選）示例圖片等
```

## 📄 檔案說明

### 核心檔案

#### `index.html`
- **用途**：實驗的入口頁面
- **功能**：
  - 載入 jsPsych 庫和外掛
  - 顯示開始按鈕
  - 初始化實驗容器
- **關鍵特性**：
  - 使用本地路徑載入 jsPsych（不使用 CDN）
  - 按鈕啟動載入機制
  - 包含載入狀態顯示

#### `script/experiment2.js`
- **用途**：實驗的主要邏輯
- **主要函數**：
  - `initializeExperiment()` - 初始化 jsPsych
  - `createTimeline()` - 建立實驗時間軸
  - `generateTrialMatrix()` - 產生隨機 6×6 矩陣
  - `getWrongWord()` - 產生錯字
  - `setupGridClickHandlers()` - 處理點擊事件
  - `showResults()` - 顯示結果摘要
- **數據記錄**：
  - 反應時間（RT）
  - 點擊位置
  - 正確性

#### `css/experiment2.css`
- **用途**：實驗的視覺樣式
- **主要樣式**：
  - `.word-grid` - 6×6 文字矩陣
  - `.word-cell` - 單個字元格子
  - `.wrong-word` - 錯字樣式
  - `.example-grid` - 教學示例矩陣
  - `.results-summary` - 結果摘要表格

### 設定檔案

#### `.nojekyll`
- **用途**：告訴 GitHub Pages 不要使用 Jekyll 處理
- **重要性**：確保以底線開頭的資料夾（如 `_jspsych`）不會被忽略
- **內容**：空白檔案即可

### 說明文件

#### `README.md`
- 專案總覽
- 快速開始指南
- 功能說明
- 問題排除

#### `SETUP.md`
- jsPsych 7 下載步驟
- 檔案結構說明
- 驗證方法
- 常見問題

#### `DEPLOYMENT.md`
- GitHub Pages 部署完整教學
- Git 操作說明
- 問題排除指南

### jsPsych 檔案（需下載）

#### `jspsych/jspsych.js`
- jsPsych 核心庫
- 版本：7.x
- 大小：約 200-300 KB

#### `jspsych/css/jspsych.css`
- jsPsych 核心樣式
- 版本：7.x
- 大小：約 10-20 KB

#### `jspsych/plugins/jspsych-html-keyboard-response.js`
- 鍵盤反應外掛
- 用於：歡迎頁（按任意鍵繼續）

#### `jspsych/plugins/jspsych-html-button-response.js`
- 按鈕反應外掛
- 用於：教學示例頁（「我知道了」按鈕）

## 🔍 檔案關聯

```
index.html
  ├─ 載入 → jspsych/css/jspsych.css
  ├─ 載入 → css/experiment2.css
  ├─ 載入 → jspsych/jspsych.js
  ├─ 載入 → jspsych/plugins/jspsych-html-keyboard-response.js
  ├─ 載入 → jspsych/plugins/jspsych-html-button-response.js
  └─ 載入 → script/experiment2.js
             └─ 使用 → jsPsych 核心庫和外掛
             └─ 使用 → CSS 樣式（透過 class 名稱）
```

## 📊 資料流向

```
使用者
  ↓
點擊「開始實驗」按鈕
  ↓
initializeExperiment()
  ↓
createTimeline()
  ├─ 歡迎頁（鍵盤反應）
  ├─ 教學示例頁（按鈕反應）
  └─ 正式實驗（10 trials）
       ├─ generateTrialMatrix() → 產生隨機矩陣
       ├─ generateGridHTML() → 產生 HTML
       ├─ setupGridClickHandlers() → 綁定點擊事件
       └─ 記錄數據 → jsPsych.data
  ↓
實驗結束
  ↓
showResults() → 顯示統計摘要
```

## 🎯 關鍵目錄用途

| 目錄 | 用途 | 是否必須 |
|------|------|----------|
| `jspsych/` | jsPsych 庫檔案 | ✅ 是 |
| `css/` | 樣式表 | ✅ 是 |
| `script/` | JavaScript 程式碼 | ✅ 是 |
| `assets/` | 資源檔案 | ❌ 否（選用）|

## ⚠️ 重要注意事項

1. **jsPsych 檔案必須下載**：
   - `jspsych/` 資料夾中的檔案不會自動包含
   - 需要按照 `SETUP.md` 說明下載

2. **路徑必須是相對路徑**：
   - ✅ 正確：`./jspsych/jspsych.js`
   - ❌ 錯誤：`/jspsych/jspsych.js`（絕對路徑）

3. **檔案名稱大小寫敏感**：
   - 在某些系統（如 Linux、GitHub Pages）上，檔案名稱大小寫敏感
   - 確保引用路徑與實際檔案名稱一致

4. **.nojekyll 檔案**：
   - 必須存在於根目錄
   - 確保 GitHub Pages 正確處理所有檔案

## 🔧 擴展專案

如果需要添加新功能，建議：

1. **新增外掛**：
   - 下載到 `jspsych/plugins/`
   - 在 `index.html` 中載入
   - 在 `experiment2.js` 中使用

2. **新增樣式**：
   - 在 `css/experiment2.css` 中添加
   - 或建立新的 CSS 檔案並在 `index.html` 中載入

3. **新增資源**：
   - 放在 `assets/` 資料夾
   - 使用相對路徑引用：`./assets/filename.png`

