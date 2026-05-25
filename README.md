# Ogden's Basic English

一个基于 GitHub Pages 的静态网站第一版，用于学习 Ogden Basic English 的核心词汇。

## 功能

- 展示 100 个基础英文词汇
- 勾选已学习词汇（使用浏览器 `localStorage` 保存）
- 一键下载“剩余未学习词汇”（`remaining-words.txt`）
- 可直接通过 GitHub Actions 自动部署到 GitHub Pages

## 本地预览

直接打开 `index.html` 即可，或使用任意静态服务器。

## 部署说明

仓库已包含 `.github/workflows/deploy-pages.yml`：

1. 在仓库 Settings -> Pages 中将 Source 设置为 **GitHub Actions**
2. push 到 `main`/`master` 后会自动部署
3. 也可在 Actions 页面手动触发 `Deploy static site to GitHub Pages`

## 常见问题

### 静态页面可以有 JS 代码吗？

可以。GitHub Pages 支持 HTML/CSS/JavaScript 静态资源。

### 可以做按钮下载数据吗？

可以。当前页面已提供“下载剩余词汇”按钮，基于浏览器 Blob 下载文本文件。
