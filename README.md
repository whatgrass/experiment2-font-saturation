# 實驗二：字型飽和測驗

## 實驗目的

測量受試者在相同字型刺激下，注意力下降與字型飽和的速度。

## 實驗流程

1. **歡迎頁**：顯示實驗說明，按任意鍵繼續
2. **教學示例頁**：顯示 6×6 字格示意圖，說明如何找出錯字
3. **正式實驗**：10 個 trials，每個 trial 顯示 6×6 中文文字矩陣，包含 3 個錯字
   - 受試者點擊任意一個錯字即可完成該 trial
   - 記錄反應時間（RT）和正確率
4. **結束頁**：顯示結果摘要（平均 RT、正確率等）

## 專案結構

```
experiment2-font-saturation/
├── index.html              # 主頁面
├── .nojekyll              # GitHub Pages 設定檔
├── README.md              # 本說明檔案
├── SETUP.md               # jsPsych 設定說明
├── jspsych/               # （已改用 CDN 版本，不需要此資料夾）
├── css/
│   └── experiment2.css    # 實驗專屬樣式
├── script/
│   └── experiment2.js     # 實驗主程式
└── assets/
    └── （可選）示例圖片
```

## 快速開始

> **✨ 更新：實驗現在使用 CDN 版本的 jsPsych，不需要下載檔案！**
> 
> 詳細說明請見 `CDN_VERSION.md`

### 步驟 1：本地測試（需要網路連線）

⚠️ **注意**：現在使用 CDN 版本，需要網路連線才能載入 jsPsych

1. 直接在瀏覽器開啟 `index.html`
2. 或使用本地伺服器：
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js（需要安裝 http-server）
   npx http-server
   
   # 然後訪問 http://localhost:8000
   ```

### 步驟 3：在 VSCode/Cursor 中執行和 Debug

1. 安裝 **Live Server** 擴充套件（推薦）：
   - 在擴充套件市場搜尋 "Live Server"
   - 安裝後，在 `index.html` 上按右鍵選擇 "Open with Live Server"

2. 開啟開發者工具：
   - 按 `F12` 或 `Ctrl+Shift+I`（Windows/Linux）
   - 或 `Cmd+Option+I`（Mac）
   - 在 Console 標籤中查看錯誤訊息和除錯資訊

3. 使用 Debugger：
   - 在 `experiment2.js` 中設定中斷點
   - 重新載入頁面即可開始除錯

## 部署到 GitHub Pages

### 前置準備

1. 在 GitHub 建立新的 repository（例如：`experiment2-font-saturation`）

2. 確保專案中有 `.nojekyll` 檔案（已包含在本專案中）

### 推送到 GitHub

```bash
# 初始化 Git（如果還沒有）
git init

# 添加所有檔案
git add .

# 提交
git commit -m "Initial commit: 實驗二字型飽和測驗"

# 添加 remote（替換 YOUR_USERNAME 和 REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/experiment2-font-saturation.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 啟用 GitHub Pages

1. 前往 GitHub repository 頁面
2. 點擊右上角 **Settings**（設定）
3. 在左側選單找到 **Pages**（頁面）
4. 在 **Source**（來源）下拉選單中選擇：
   - **Deploy from a branch**（從分支部署）
   - 選擇 **main** 分支
   - 選擇 **/ (root)** 資料夾
5. 點擊 **Save**（儲存）

### 訪問您的實驗

等待幾分鐘讓 GitHub Pages 部署完成，然後訪問：

```
https://YOUR_USERNAME.github.io/experiment2-font-saturation/
```

**注意**：請將 `YOUR_USERNAME` 替換為您的 GitHub 使用者名稱，`experiment2-font-saturation` 替換為您的 repository 名稱。

## 技術架構

- **框架**：jsPsych 7.x（本地版）
- **語言**：HTML + JavaScript（Vanilla JS，無框架）
- **樣式**：CSS
- **數據記錄**：內建於 jsPsych

## 實驗功能說明

### 文字矩陣生成

- 使用常用繁體中文字庫（100+ 字）
- 隨機產生 6×6 矩陣
- 每個 trial 隨機選擇 3 個位置替換為錯字

### 錯字生成

- 使用預設的錯字對應表
- 如果沒有對應的錯字，則從常用錯字中隨機選擇

### 數據記錄

每個 trial 記錄：
- `trial`: 試驗編號（1-10）
- `rt`: 反應時間（毫秒）
- `clicked_position`: 點擊的位置 [row, col]
- `clicked_word`: 點擊的字元
- `is_correct`: 是否點擊到錯字（true/false）
- `wrong_positions`: 該 trial 的三個錯字位置
- `matrix`: 完整的 6×6 矩陣

## 自訂實驗參數

可以在 `script/experiment2.js` 中修改：

1. **試驗數量**：修改 `for (let trialNum = 1; trialNum <= 10; trialNum++)` 中的 10
2. **矩陣大小**：修改 `generateTrialMatrix()` 中的 6×6
3. **錯字數量**：修改 `generateTrialMatrix()` 中的 `while (wrongPositions.length < 3)` 的 3
4. **字庫**：修改 `commonChars` 陣列

## 注意事項

- ✅ **現在使用 CDN 版本**，不需要下載 jsPsych 檔案
- ⚠️ **需要網路連線**才能載入 jsPsych（從 CDN）
- 建議使用現代瀏覽器（Chrome、Firefox、Edge、Safari）
- 實驗不支援手機瀏覽器（需要滑鼠點擊）
- 建議使用全螢幕模式進行實驗
- 如果需要離線運行，請參考 `CDN_VERSION.md` 或 `SETUP.md`

## 授權

本專案僅供研究使用。

## 問題排除

### 無法載入 jsPsych

- 檢查網路連線（CDN 需要網路）
- 檢查瀏覽器 Console 的錯誤訊息
- 如果網路問題，可以改用本地版本（見 `SETUP.md` 和 `CDN_VERSION.md`）

### GitHub Pages 無法正常顯示

- 確認 `.nojekyll` 檔案存在於根目錄
- 確認所有路徑使用相對路徑（不使用絕對路徑）
- 等待幾分鐘讓 GitHub Pages 完成部署

### 點擊沒有反應

- 開啟開發者工具檢查是否有 JavaScript 錯誤
- 確認 jsPsych 已正確初始化
- 檢查是否有其他 JavaScript 錯誤阻止執行

