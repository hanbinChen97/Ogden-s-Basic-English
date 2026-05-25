# Ogden's Basic English

一个可直接部署到 GitHub Pages 的静态学习页面，用于学习 C.K. Ogden 的 Basic English 850 核心词。

## 功能

- 完整展示 850 个 Basic English 核心词
- 按 Ogden 分类整理：Operations 100、General Things 400、Picturable Things 200、Qualities 100、Opposites 50
- 支持分类筛选、搜索、列表/卡片模式、只看未学
- 勾选已学词汇，学习记录自动保存在浏览器 `localStorage`
- 保存上次筛选、搜索、显示模式和学习进度
- 支持下载未学词汇清单
- 在 HTTP/HTTPS 环境下注册 service worker，缓存页面资源，提升下次打开速度

## 本地预览

直接打开 `index.html` 可以使用学习记录功能。若要测试 service worker 缓存，请用本地静态服务器打开，例如：

```bash
python -m http.server 4173
```

然后访问 `http://127.0.0.1:4173/`。

## 部署

仓库已包含 `.github/workflows/deploy-pages.yml`：

1. 在仓库 Settings -> Pages 中将 Source 设置为 **GitHub Actions**
2. push 到 `main`/`master` 后会自动部署
3. 也可在 Actions 页面手动触发 `Deploy static site to GitHub Pages`
