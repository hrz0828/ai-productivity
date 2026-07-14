---
title: "Cloudflare Pages 部署 Astro 内容站教程"
description: "介绍如何把 Astro 内容站通过 GitHub 自动部署到 Cloudflare Pages，并绑定自定义域名。"
category: "Cloudflare"
tags: ["Cloudflare Pages", "Astro", "部署", "GitHub"]
pubDate: 2026-05-21
updatedDate: 2026-07-13
author: "ai-productivity"
draft: false
featured: false
seoTitle: "Cloudflare Pages 部署 Astro 内容站教程"
seoDescription: "学习如何配置 Cloudflare Pages 部署 Astro 项目，包括构建命令、输出目录、域名绑定和环境变量。"
ogImage: "/images/og/default.png"
---

Cloudflare Pages 很适合部署 Astro 内容站：它可以连接 GitHub 仓库，代码提交后自动构建，并通过 Cloudflare 网络发布静态页面。对于以 Markdown、专题页和 SEO 内容为主的网站，这种方案维护成本低，也方便后续接入自定义域名、sitemap、robots 和 Search Console。

这篇教程以 Astro 内容站为例，说明从 GitHub 仓库到 Cloudflare Pages 上线的完整流程，并补充常见构建失败、域名绑定、环境变量和上线后检查事项。

## 工具简介

Cloudflare Pages 是适合静态站点和前端项目的部署平台。对于 Astro 内容站，它可以直接连接 GitHub 仓库并自动构建发布。

适合：

- Astro、Vite、React、Vue 等静态站点
- 内容站、文档站、工具导航、博客
- 通过 GitHub 管理内容和代码
- 希望自动部署 main 分支
- 需要绑定自定义域名和 CDN

不适合：

- 需要长期运行后台服务的项目
- 依赖传统服务器文件写入的应用
- 没有构建脚本或构建流程不稳定的项目
- 需要复杂后端权限和数据库事务的系统

## 基础配置

推荐配置如下：

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Node version: 20 或 22
Production branch: main
```

对于 Astro 项目，`dist` 通常是构建后的静态输出目录。不要把输出目录写成 `public`，`public` 是源码中的静态资源目录，不是最终构建产物。

## 部署前准备

在连接 Cloudflare Pages 前，先确认本地构建通过：

```bash
npm install
npm run build
```

还要检查：

- 项目已推送到 GitHub
- `package.json` 中有 `build` 脚本
- Astro 配置中的站点 URL 正确
- 内容日期没有未来日期
- `draft: true` 页面不会出现在生产列表中
- 不需要上传 `.env`、密钥或本地缓存文件

如果本地构建都失败，不要先去 Cloudflare 调试。先在本地修好错误，再部署。

## 部署流程

1. 将项目推送到 GitHub。
2. 在 Cloudflare Pages 新建项目。
3. 选择 GitHub 仓库。
4. 填写构建命令和输出目录。
5. 设置 Node.js 版本和环境变量。
6. 首次构建成功后绑定域名。
7. 检查 sitemap、robots、RSS、核心页面和 404。
8. 提交 sitemap 到 Google Search Console。

## Step 1：连接 GitHub 仓库

在 Cloudflare Dashboard 中进入 Pages，新建项目，选择 Connect to Git。授权 GitHub 后选择你的仓库。

建议：

- 生产分支选择 `main` 或实际发布分支
- 不要把实验分支设置为生产分支
- 如果仓库是私有仓库，确认 Cloudflare 有读取权限

## Step 2：填写构建配置

配置示例：

```text
Project name: ai-productivity
Production branch: main
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Root directory: / （如果项目在仓库根目录）
```

如果你的 Astro 项目在子目录，例如 `apps/web`，Root directory 需要填写对应路径，否则 Cloudflare 找不到 `package.json`。

## Step 3：设置 Node.js 版本

如果本地使用 Node 22，Cloudflare Pages 也建议设置同样版本。可以在环境变量中添加：

```text
NODE_VERSION=22
```

或者在 Cloudflare Pages 的构建设置里选择 Node 版本。版本不一致可能导致依赖安装、Astro 构建或 Pagefind 生成索引时出错。

## Step 4：配置环境变量

纯静态内容站通常不需要很多环境变量。如果项目使用 Analytics、API Key 或站点配置，应该在 Cloudflare Pages 的 Environment variables 中设置，而不是写进代码仓库。

注意：

- 不要提交 `.env` 文件
- 不要把 API Key 写在 Markdown 或 Astro 页面里
- 客户端可见变量不要放敏感密钥
- 生产和预览环境可以分开设置

## Step 5：绑定自定义域名

首次构建成功后，在 Custom domains 中添加域名，例如：

```text
sts2hub.com
www.sts2hub.com
```

建议选择一个主域名，例如 `https://sts2hub.com`，再把 `www` 跳转到主域名。这样可以避免同一内容有多个 URL，影响 canonical 和 Search Console 数据。

绑定后检查：

- HTTPS 是否正常
- `www` 和非 `www` 是否统一
- 页面 canonical 是否指向主域名
- sitemap 中的 URL 是否是正式域名

## 使用案例：部署 ai-productivity 到 Cloudflare Pages

### 场景

你已经完成 Astro 内容站，希望通过 GitHub 自动部署到 `sts2hub.com`。

### 配置示例

```text
Build command: npm run build
Build output directory: dist
Node.js version: 22
Production branch: main
```

### 验证清单

部署后访问以下路径：

- `/`
- `/sitemap-index.xml`
- `/robots.txt`
- `/ads.txt`
- `/rss.xml`
- `/privacy-policy/`
- `/about/`
- `/404.html`

如果准备 AdSense，还要检查 About、Privacy Policy、Terms、Contact、核心内容页是否可以从导航或专题页访问。

## 常见问题

### 构建失败怎么办？

先在本地运行 `npm run build`，确认不是项目本身错误。再检查 Node 版本、环境变量和输出目录。

排查顺序：

1. 本地是否能构建通过？
2. Cloudflare 的 Node 版本是否一致？
3. Build command 是否正确？
4. Output directory 是否是 `dist`？
5. Root directory 是否指向项目目录？
6. 是否缺少环境变量？
7. 是否有 Linux 大小写路径问题？

可以把构建日志交给 AI 分析：

```text
下面是 Cloudflare Pages 构建失败日志。请帮我定位原因。

要求：
- 先指出最关键的报错行
- 区分依赖、Node 版本、路径、环境变量和代码错误
- 给出最小修复建议

日志：
[粘贴]
```

### 域名需要 www 吗？

建议选择一个主域名，例如 `https://sts2hub.com`，再把 `www` 跳转到主域名。关键是保持统一，不要让两个版本都独立被索引。

### 部署成功但页面 404 怎么办？

检查：

- Astro 是否生成了对应路径
- 路由是否是 `/page/` 还是 `/page.html`
- 内容文件是否 `draft: true`
- 页面链接是否大小写一致
- Cloudflare 是否部署了最新 commit

### sitemap 访问不到怎么办？

确认项目是否安装并配置了 sitemap 插件，构建输出中是否生成 `sitemap-index.xml`。部署后访问正式域名的 `/sitemap-index.xml`，不要只看本地路径。

## 上线后检查清单

- 首页是否正常打开？
- 核心文章、专题页、分类页是否可访问？
- `sitemap-index.xml` 是否存在？
- `robots.txt` 是否允许抓取公开页面？
- `ads.txt` 是否需要配置？
- 404 页面是否正常？
- 移动端导航是否可用？
- About、Privacy Policy、Terms 是否可访问？
- Search Console 是否提交 sitemap？
- Cloudflare Pages 后续提交是否会自动部署？

## 安全和维护注意事项

- 不要在仓库中提交密钥、token、服务账号文件。
- 不要把测试页面、草稿内容或内部路径发布到生产站。
- 对广告、统计、第三方脚本保持克制，避免影响页面体验。
- 每次大规模内容更新后运行本地构建。
- 部署后抽查核心页面，而不是只看构建成功。

## 结论

Cloudflare Pages 部署 Astro 内容站的核心配置很简单：GitHub 仓库、`npm run build`、`dist` 输出目录和正确 Node 版本。真正容易出问题的是上线后的细节：域名统一、sitemap、robots、内容页可访问性和 Search Console 提交。建议把部署流程做成固定检查清单，每次内容或结构大改后都按清单复查。