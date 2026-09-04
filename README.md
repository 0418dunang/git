# Topview Homepage Clone

一个基于原生 HTML、CSS 和 JavaScript 的 Topview 首页复刻，包含响应式布局、Composer 模式切换、案例筛选、视频播放、Canvas 模式、FAQ 和素材展示。

## Local

```powershell
python -m http.server 4173
```

打开 `http://127.0.0.1:4173`。

## Deploy

项目使用 `wrangler.toml` 配置 Cloudflare Workers Static Assets：

```powershell
npx wrangler deploy
```
