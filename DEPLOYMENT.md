# GitHub Pages 部署完整教學

## 📋 前置準備

1. **GitHub 帳號**：確保您已註冊 GitHub 帳號
2. **Git**：確保已安裝 Git（https://git-scm.com/）
3. **專案檔案**：確保 `experiment2-font-saturation` 資料夾中的所有檔案都已準備好

## 🚀 步驟一：建立 GitHub Repository

1. 登入 GitHub
2. 點擊右上角的 **+** 按鈕，選擇 **New repository**
3. 填寫 Repository 資訊：
   - **Repository name**：`experiment2-font-saturation`（或您喜歡的名稱）
   - **Description**：`字型飽和測驗實驗`
   - **Visibility**：選擇 **Public**（GitHub Pages 免費版需要 Public）或 **Private**（Pro 帳號）
   - **不要**勾選 "Add a README file"（因為我們已經有 README.md）
   - **不要**選擇 License 或 .gitignore（可選）
4. 點擊 **Create repository**

## 📤 步驟二：推送到 GitHub

### 方法一：使用 Git 命令列（推薦）

1. **開啟終端機**（Terminal、PowerShell 或 Command Prompt）

2. **進入專案目錄**：
   ```bash
   cd path/to/experiment2-font-saturation
   ```
   例如：
   ```bash
   cd C:\Users\Lucas\Favorites\experiment2-font-saturation
   ```

3. **初始化 Git**（如果還沒有）：
   ```bash
   git init
   ```

4. **添加所有檔案**：
   ```bash
   git add .
   ```

5. **提交檔案**：
   ```bash
   git commit -m "Initial commit: 實驗二字型飽和測驗"
   ```

6. **添加 Remote**（替換 `YOUR_USERNAME` 為您的 GitHub 使用者名稱）：
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/experiment2-font-saturation.git
   ```
   
   例如：
   ```bash
   git remote add origin https://github.com/lucas123/experiment2-font-saturation.git
   ```

7. **推送到 GitHub**：
   ```bash
   git branch -M main
   git push -u origin main
   ```

8. **輸入 GitHub 認證資訊**：
   - 使用者名稱：您的 GitHub 使用者名稱
   - 密碼：使用 Personal Access Token（不是 GitHub 密碼）
     - 如何建立 Token：GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token
     - 權限需要：`repo`（完整 repository 權限）

### 方法二：使用 GitHub Desktop（圖形化介面）

1. 下載並安裝 **GitHub Desktop**：https://desktop.github.com/

2. 開啟 GitHub Desktop

3. **File** → **Add Local Repository** → 選擇 `experiment2-font-saturation` 資料夾

4. 填寫 **Summary**：`Initial commit: 實驗二字型飽和測驗`

5. 點擊 **Commit to main**

6. **Publish repository** → 選擇您的 GitHub 帳號 → 點擊 **Publish repository**

## ⚙️ 步驟三：啟用 GitHub Pages

1. 前往您的 GitHub repository 頁面：
   ```
   https://github.com/YOUR_USERNAME/experiment2-font-saturation
   ```

2. 點擊右上角的 **Settings**（設定）標籤

3. 在左側選單中，找到並點擊 **Pages**（頁面）

4. 在 **Source**（來源）區塊：
   - 選擇 **Deploy from a branch**（從分支部署）
   - **Branch** 選擇：`main`（或 `master`）
   - **Folder** 選擇：`/ (root)`（根目錄）
   - 點擊 **Save**（儲存）

5. 等待幾分鐘讓 GitHub Pages 部署完成

## 🌐 步驟四：訪問您的實驗

部署完成後（通常需要 1-5 分鐘），訪問以下網址：

```
https://YOUR_USERNAME.github.io/experiment2-font-saturation/
```

**範例**：
- 如果您的使用者名稱是 `lucas123`
- Repository 名稱是 `experiment2-font-saturation`
- 網址就是：`https://lucas123.github.io/experiment2-font-saturation/`

## ✅ 驗證部署

1. **檢查 .nojekyll 檔案**：
   - 確認根目錄有 `.nojekyll` 檔案（已包含在本專案中）
   - 這確保 GitHub Pages 不會忽略以底線開頭的資料夾（如 `_jspsych`）

2. **檢查檔案路徑**：
   - 確保所有路徑都是**相對路徑**（以 `./` 或直接檔名開頭）
   - **不要**使用絕對路徑（以 `/` 開頭的路徑）

3. **測試實驗**：
   - 在瀏覽器中打開您的 GitHub Pages URL
   - 點擊「開始實驗」按鈕
   - 確認實驗正常運行

## 🔄 更新實驗

如果您修改了實驗程式碼並想更新到 GitHub Pages：

```bash
# 進入專案目錄
cd path/to/experiment2-font-saturation

# 添加修改的檔案
git add .

# 提交修改
git commit -m "更新實驗：描述您的修改"

# 推送到 GitHub
git push
```

GitHub Pages 會自動重新部署（通常需要 1-5 分鐘）。

## 📊 查看部署狀態

1. 前往 repository 的 **Actions** 標籤
2. 您會看到部署的工作流程狀態
3. 綠色勾號 ✓ 表示部署成功
4. 紅色 X ✗ 表示部署失敗（點擊查看錯誤訊息）

## 🐛 問題排除

### 問題 1：404 錯誤或頁面無法顯示

**解決方案**：
- 確認 GitHub Pages 已啟用（Settings → Pages）
- 確認選擇了正確的 branch（main 或 master）
- 等待幾分鐘讓部署完成
- 確認 `index.html` 存在於根目錄

### 問題 2：jsPsych 檔案無法載入

**解決方案**：
- 確認 `.nojekyll` 檔案存在
- 確認 `jspsych/` 資料夾中的所有檔案都已上傳
- 檢查瀏覽器 Console（F12）的錯誤訊息
- 確認檔案路徑使用相對路徑（`./jspsych/...`）

### 問題 3：實驗無法啟動

**解決方案**：
- 開啟瀏覽器開發者工具（F12）查看 Console 錯誤
- 確認所有 JavaScript 檔案都已上傳
- 確認 jsPsych 外掛檔案名稱正確

### 問題 4：樣式無法載入

**解決方案**：
- 確認 `css/experiment2.css` 檔案存在
- 確認 `index.html` 中的 CSS 路徑正確：`./css/experiment2.css`

## 📝 重要提示

1. **網址格式**：
   ```
   https://USERNAME.github.io/REPOSITORY_NAME/
   ```
   - `USERNAME`：您的 GitHub 使用者名稱（全部小寫）
   - `REPOSITORY_NAME`：您的 repository 名稱（全部小寫）

2. **自訂網域名稱**（選用）：
   - 如果您有自己的網域名稱，可以在 Settings → Pages → Custom domain 中設定
   - 需要在您的網域 DNS 設定中添加 CNAME 記錄

3. **HTTPS**：
   - GitHub Pages 預設使用 HTTPS
   - 如果需要 HTTP，需要使用自訂網域

## 🎉 完成！

您的實驗現在已經部署到 GitHub Pages，可以透過網址訪問了！

如果需要協助，請查看：
- [README.md](README.md) - 專案說明
- [SETUP.md](SETUP.md) - jsPsych 設定說明

