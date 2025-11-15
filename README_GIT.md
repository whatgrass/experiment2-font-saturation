# 🚀 一鍵推送到 GitHub 說明

## 📋 快速使用

### 步驟 1：修改設定

1. 開啟 `push-to-github.ps1` 檔案
2. 找到這一行：
   ```powershell
   $GITHUB_USERNAME = "YOUR_USERNAME"  # 請改成您的 GitHub 使用者名稱
   ```
3. 將 `YOUR_USERNAME` 改成您的 GitHub 使用者名稱
   ```powershell
   $GITHUB_USERNAME = "lucas123"  # 例如這樣
   ```

### 步驟 2：執行腳本

在 PowerShell 中執行：

```powershell
cd C:\Users\Lucas\Favorites\experiment2-font-saturation
.\push-to-github.ps1
```

**或者**直接在檔案總管中：
1. 找到 `push-to-github.ps1` 檔案
2. 按右鍵 → 選擇「使用 PowerShell 執行」

### 步驟 3：完成！

腳本會自動：
- ✅ 添加所有檔案到 Git
- ✅ 提交檔案
- ✅ 連接到 GitHub
- ✅ 推送到 GitHub

## ⚙️ 第一次使用需要設定

### 1. 設定 Git 使用者資訊（如果還沒設定）

在 PowerShell 中執行：

```powershell
git config --global user.name "您的名稱"
git config --global user.email "您的Email"
```

### 2. 在 GitHub 建立 Repository

1. 前往 GitHub：https://github.com/new
2. Repository name：`experiment2-font-saturation`（或您想要的名稱）
3. 選擇 **Public**（免費 GitHub Pages 需要 Public）
4. **不要**勾選 "Initialize this repository with a README"
5. 點擊 **Create repository**

### 3. 建立 Personal Access Token（推送時需要）

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. 勾選 `repo` 權限
4. 生成 Token（**記下來，只會顯示一次**）
5. 推送時，密碼處輸入這個 Token（不是 GitHub 密碼）

## 🔄 之後的使用

設定好之後，每次只需要：

```powershell
.\push-to-github.ps1
```

就完成了！

## 📝 腳本會做什麼？

1. **添加檔案** → `git add .`
2. **提交檔案** → `git commit -m "訊息"`
3. **設定 Remote** → `git remote add origin`（第一次）
4. **推送到 GitHub** → `git push -u origin main`

## ⚠️ 常見問題

### Q: 執行腳本時顯示「找不到 git 命令」？

**A:** 重新開啟 PowerShell 視窗，或使用完整路徑：
```powershell
& "C:\Program Files\Git\cmd\git.exe" --version
```

### Q: 推送時要求輸入密碼？

**A:** 需要使用 Personal Access Token，不是 GitHub 密碼。見上方「建立 Personal Access Token」。

### Q: 想要修改 repository 名稱？

**A:** 編輯 `push-to-github.ps1` 中的 `$REPOSITORY_NAME` 變數。

### Q: 腳本執行後顯示「推送失敗」？

**A:** 確認：
1. GitHub repository 是否已建立
2. 使用者名稱是否正確
3. Personal Access Token 是否正確

## 💡 提示

- 第一次使用後，腳本會記住 remote 設定
- 之後推送只需要執行腳本即可
- 腳本會自動檢查是否需要提交

## 📎 GitHub Pages URL

推送成功後，訪問：
```
https://YOUR_USERNAME.github.io/experiment2-font-saturation/
```

記得在 GitHub 上啟用 Pages：
- Settings → Pages → Source: main branch → Save

