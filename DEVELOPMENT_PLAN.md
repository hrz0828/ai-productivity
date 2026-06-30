# ai-productivity 开发计划

## 1. 项目概述

### 1.1 项目名称

- 网站名称：`ai-productivity`
- 域名：`sts2hub.com`
- 技术栈：`Astro + MDX + Tailwind CSS + Cloudflare Pages + GitHub`

### 1.2 项目定位

`ai-productivity` 是一个面向知识工作者、内容创作者、产品经理、设计师、开发者和运营人员的 AI 深度内容站，专注分享 AI Prompt、Skill、Agent、Tool、Workflow 等实战内容，帮助用户用 AI 解决日常文档编写、PPT 制作、设计协作、代码编写、研究分析和办公自动化中的重复性工作。

核心定位：

> 用 Prompt、Agent 和 Workflow 重构日常工作。

备选 Slogan：

> 让 AI 接管重复工作，把时间留给创造。

### 1.3 核心目标

1. 建设一个结构清晰、可长期维护的 AI 深度内容站。
2. 支持 Prompt、Skill、Agent、Tool、Workflow 等多种内容类型。
3. 通过 GitHub 管理代码和内容。
4. 通过 Cloudflare Pages 自动部署。
5. 做好 SEO 基础，获取自然搜索流量。
6. 网站完成并积累一定原创内容后接入 Google AdSense。
7. 后续可扩展为 AI 模板库、会员专区、在线工具和企业服务入口。

### 1.4 MVP 范围

第一版目标是完成一个可上线、可持续更新、可申请 Google AdSense 的内容站。

MVP 必须包含：

- 首页
- Prompt 列表页
- Skill 列表页
- Agent 列表页
- Tool 列表页
- Workflow 列表页
- Guide 深度指南列表页
- 文章详情页
- 分类和标签
- About 页面
- Contact 页面
- Privacy Policy 页面
- Terms of Use 页面
- 404 页面
- Sitemap
- Robots.txt
- RSS Feed
- SEO Meta
- Open Graph
- Cloudflare Pages 部署
- Google Search Console 接入
- Google Analytics 或 Cloudflare Web Analytics 接入
- AdSense 验证脚本预留
- ads.txt 预留

MVP 暂不包含：

- 用户登录
- 评论系统
- 会员系统
- 支付系统
- 在线 AI 生成器
- 后台 CMS
- 复杂权限系统

---

## 2. 技术方案

### 2.1 推荐技术栈

| 模块 | 方案 |
|---|---|
| 前端框架 | Astro |
| 页面类型 | 静态内容站 |
| 内容格式 | Markdown / MDX |
| 样式 | Tailwind CSS |
| 类型检查 | TypeScript |
| 部署 | Cloudflare Pages |
| 代码托管 | GitHub |
| 搜索 | Pagefind |
| SEO | 自定义 SEO 组件 + Astro Sitemap |
| RSS | @astrojs/rss |
| 数据统计 | Google Analytics / Cloudflare Web Analytics |
| 广告 | Google AdSense |
| 包管理器 | npm 或 pnpm，项目初始化时确定 |

### 2.2 为什么使用 Astro

选择 Astro 的原因：

1. 非常适合内容站和静态站点。
2. 默认输出静态 HTML，SEO 友好。
3. 页面加载速度快，有利于 Core Web Vitals 和 AdSense。
4. Markdown / MDX 内容管理简单。
5. 可以局部使用交互组件，避免全站重 JS。
6. 部署到 Cloudflare Pages 成本低、速度快。

### 2.3 Cloudflare Pages 构建配置

Cloudflare Pages 推荐配置：

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Root directory: /
Node.js version: 20 或 22
Production branch: main
```

环境变量建议预留：

```text
PUBLIC_SITE_NAME=ai-productivity
PUBLIC_SITE_URL=https://sts2hub.com
PUBLIC_GA_ID=
PUBLIC_ADSENSE_CLIENT_ID=
```

---

## 3. 信息架构

### 3.1 一级导航

第一版建议使用以下导航：

```text
首页
Prompts
Skills
Agents
Tools
Workflows
Guides
Resources
About
```

页脚包含：

```text
About
Contact
Privacy Policy
Terms of Use
RSS
Sitemap
```

### 3.2 URL 结构

```text
/
/prompts/
/prompts/[slug]/
/skills/
/skills/[slug]/
/agents/
/agents/[slug]/
/tools/
/tools/[slug]/
/workflows/
/workflows/[slug]/
/guides/
/guides/[slug]/
/resources/
/about/
/contact/
/privacy-policy/
/terms/
/rss.xml
/sitemap-index.xml
/robots.txt
/ads.txt
```

### 3.3 内容栏目说明

#### Prompts

沉淀可直接复制使用的提示词模板，重点服务日常工作场景。

典型分类：

- 文档写作
- PPT 制作
- 设计辅助
- 代码编写
- 办公效率
- 内容创作
- 研究分析
- 产品经理

#### Skills

沉淀可复用的 AI 能力模块，比单个 Prompt 更结构化，通常包含输入、步骤、输出格式和组合方式。

典型分类：

- 写作 Skill
- PPT Skill
- 设计 Skill
- 代码 Skill
- 研究 Skill
- 运营 Skill
- 自动化 Skill

#### Agents

沉淀 AI 智能体配置，包括角色、目标、工具、系统提示词、工作流程和适用场景。

典型分类：

- 产品经理 Agent
- 研究助理 Agent
- 代码审查 Agent
- 设计评审 Agent
- PPT 策划 Agent
- SEO 编辑 Agent
- 办公助理 Agent

#### Tools

工具教程和使用指南，包括 AI 工具、开发工具、自动化工具和部署工具。

典型工具：

- Claude
- Claude Code
- ChatGPT
- Cursor
- Gemini
- Cloudflare
- GitHub
- Figma
- Notion
- Obsidian
- n8n
- Make
- Zapier

#### Workflows

重点栏目，沉淀从输入到输出的完整 AI 工作流。

典型分类：

- 文档工作流
- PPT 工作流
- 设计工作流
- 代码工作流
- 研究工作流
- 运营工作流
- 自动化工作流

#### Guides

深度指南类内容，解释概念、方法论、工具选型、生产力系统搭建等。

#### Resources

后续用于放置模板、清单、下载资源、精选合集等。MVP 阶段可以先作为静态资源聚合页。

---

## 4. 项目目录结构

推荐目录结构：

```text
ai-productivity/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── ads.txt
│   └── images/
│
├── src/
│   ├── assets/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── SEO.astro
│   │   ├── ArticleCard.astro
│   │   ├── CategoryCard.astro
│   │   ├── CategoryNav.astro
│   │   ├── TagList.astro
│   │   ├── Breadcrumb.astro
│   │   ├── TableOfContents.astro
│   │   ├── RelatedArticles.astro
│   │   ├── SearchBox.astro
│   │   ├── CopyButton.astro
│   │   ├── CodeBlock.astro
│   │   ├── AdsenseScript.astro
│   │   └── AdsenseBlock.astro
│   │
│   ├── content/
│   │   ├── config.ts
│   │   ├── prompts/
│   │   ├── skills/
│   │   ├── agents/
│   │   ├── tools/
│   │   ├── workflows/
│   │   ├── guides/
│   │   └── resources/
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── ArticleLayout.astro
│   │   ├── ListingLayout.astro
│   │   └── ResourceLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── prompts/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── skills/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── agents/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── tools/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── workflows/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── guides/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── resources/
│   │   │   └── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── privacy-policy.astro
│   │   ├── terms.astro
│   │   └── 404.astro
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── utils/
│   │   ├── seo.ts
│   │   ├── content.ts
│   │   ├── schema.ts
│   │   ├── dates.ts
│   │   └── readingTime.ts
│   │
│   └── config.ts
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── tailwind.config.mjs
├── README.md
└── DEVELOPMENT_PLAN.md
```

---

## 5. 内容模型设计

### 5.1 通用 Frontmatter

所有内容类型尽量使用统一字段，便于列表、SEO、相关文章和后续扩展。

```yaml
---
title: "AI 写周报 Prompt：快速生成结构化工作周报"
description: "一个适合职场人士使用的 AI 周报 Prompt，帮助你快速总结本周工作、问题、成果和下周计划。"
category: "文档写作"
tags: ["AI Prompt", "周报", "办公效率", "文档写作"]
pubDate: 2026-07-01
updatedDate: 2026-07-01
author: "ai-productivity"
draft: false
featured: false
seoTitle: "AI 写周报 Prompt：快速生成结构化工作周报 - ai-productivity"
seoDescription: "本文提供一个适合职场人士使用的 AI 周报 Prompt，帮助你快速总结本周工作成果、问题、数据结果和下周计划。"
ogImage: "/images/og/default.png"
---
```

### 5.2 Prompt 页面模板

```markdown
# 标题

## 适用场景

说明这个 Prompt 适合解决什么问题。

## 适合人群

- 产品经理
- 运营人员
- 项目经理
- 普通知识工作者

## Prompt 正文

```text
你是一名专业的职场写作助理，请根据以下信息帮我生成一份结构清晰的周报……
```

## 输入示例

```text
本周完成：
遇到问题：
数据结果：
下周计划：
```

## 输出示例

## 使用技巧

## 可调整参数

## 常见问题

## 相关 Prompt

## 相关 Workflow
```

### 5.3 Skill 页面模板

```markdown
# 标题

## 这个 Skill 解决什么问题

## 输入要求

## 执行步骤

1. 步骤一
2. 步骤二
3. 步骤三

## 输出格式

## 示例输入

## 示例输出

## 可组合的其他 Skill

## 适合搭配的工具

## 注意事项
```

### 5.4 Agent 页面模板

```markdown
# 标题

## Agent 角色

## 目标

## 能解决的问题

## 输入要求

## 输出格式

## 系统提示词

```text
你是一名资深 AI 产品经理 Agent……
```

## 示例任务

## 使用方式

## 局限性

## 可组合的工具

## 相关 Workflow
```

### 5.5 Tool 教程模板

```markdown
# 标题

## 工具简介

## 适合谁使用

## 能解决什么问题

## 核心功能

## 快速开始

## 常见使用场景

## 实战案例

## 常见问题

## 替代工具

## 延伸阅读
```

### 5.6 Workflow 页面模板

```markdown
# 标题

## 这个工作流解决什么问题

## 适合人群

## 最终产出

## 使用工具

## 工作流总览

1. 明确目标
2. 准备输入
3. 生成初稿
4. 优化结构
5. 输出最终结果

## Step 1：准备输入

## Step 2：执行 Prompt

## Step 3：检查输出

## Step 4：二次优化

## 完整 Prompt

## 示例结果

## 常见问题

## 延伸阅读
```

---

## 6. 页面与组件开发计划

### 6.1 首页

首页模块：

1. Header 导航
2. Hero 区域
   - 标题：用 Prompt、Agent 和 Workflow 重构日常工作
   - 副标题：探索 AI Prompt、Skill、Agent、Tool 与 Workflow，提升文档、PPT、设计、代码和办公自动化效率。
3. 搜索框入口
4. 五大内容入口
   - Prompts
   - Skills
   - Agents
   - Tools
   - Workflows
5. 精选 Workflow
6. 热门 Prompt
7. 最新文章
8. 工具教程精选
9. 关于本站简介
10. Footer

### 6.2 列表页

每个列表页包含：

- 页面标题
- 页面描述
- 分类导航
- 标签展示
- 文章卡片列表
- 特色内容置顶
- 分页或静态全部展示
- SEO Meta

### 6.3 文章详情页

文章详情页包含：

- Breadcrumb
- 标题
- 描述
- 发布时间
- 更新时间
- 作者
- 分类
- 标签
- 阅读时间
- 目录
- 正文
- 复制 Prompt / 复制代码按钮
- 相关文章
- 上一篇 / 下一篇
- AdSense 广告位预留

### 6.4 法务和信任页面

必须开发：

- About：说明网站定位、内容范围、维护者和价值。
- Contact：提供联系邮箱和合作说明。
- Privacy Policy：说明 Cookie、Google Analytics、Google AdSense、第三方服务和用户隐私。
- Terms：说明内容使用、版权、免责声明和外部链接。

---

## 7. SEO 开发计划

### 7.1 基础 SEO

必须实现：

- 每页唯一 title
- 每页唯一 description
- canonical URL
- Open Graph 标签
- Twitter Card 标签
- Sitemap
- Robots.txt
- RSS Feed
- 结构清晰的 slug
- 移动端适配
- 404 页面

### 7.2 结构化数据

建议实现：

- WebSite Schema
- Organization Schema
- Article Schema
- BreadcrumbList Schema
- FAQPage Schema，适用于 FAQ 类文章

### 7.3 Title 规范

首页：

```text
ai-productivity：AI Prompt、Agent 与 Workflow 实战库
```

文章页：

```text
文章标题 - ai-productivity
```

栏目页：

```text
栏目名称 - ai-productivity
```

### 7.4 Description 规范

每篇文章建议提供 80 - 160 字左右的中文描述，说明文章解决什么问题、适合谁、有什么产出。

### 7.5 robots.txt

```txt
User-agent: *
Allow: /

Sitemap: https://sts2hub.com/sitemap-index.xml
```

### 7.6 性能目标

Lighthouse 目标：

```text
Performance: 90+
SEO: 90+
Accessibility: 90+
Best Practices: 90+
```

重点优化：

- 控制 JavaScript 体积
- 图片压缩和懒加载
- 字体合理加载
- 静态页面生成
- 广告脚本延迟和按需加载
- 避免布局偏移
- 优化移动端阅读体验

---

## 8. Google AdSense 接入计划

### 8.1 AdSense 审核前要求

申请前建议满足：

- 至少 30 篇原创文章，理想状态 50 篇以上。
- 每篇文章建议 1000 - 2500 字。
- 内容具有实际使用价值，不是简单 AI 水文。
- 没有空分类页。
- 没有大量重复模板化页面。
- 没有采集、洗稿、侵权图片或违规内容。
- 首页、分类页、文章页、About、Contact、Privacy Policy、Terms 都完整可访问。
- 移动端布局正常。
- 导航链接可用。
- 无大量 404。

### 8.2 AdSense 审核前页面

必须准备：

- `/about/`
- `/contact/`
- `/privacy-policy/`
- `/terms/`

Privacy Policy 必须说明：

- 使用 Google AdSense
- 使用 Cookie
- 使用 Google Analytics 或其他统计工具
- 第三方广告服务可能收集信息
- 用户如何管理 Cookie
- 联系方式

### 8.3 AdSense 技术步骤

1. 注册 Google AdSense。
2. 提交 `https://sts2hub.com`。
3. 获取站点验证脚本。
4. 将验证脚本放入全站 `<head>`。
5. 添加 `public/ads.txt`。
6. 部署后确认 `https://sts2hub.com/ads.txt` 可访问。
7. 等待审核。
8. 审核通过后逐步开启广告位。

### 8.4 AdSense Script 组件

预留组件：

```text
src/components/AdsenseScript.astro
```

用途：在 `BaseLayout.astro` 的 `<head>` 中注入 Google AdSense 脚本。

示例结构：

```astro
---
const clientId = import.meta.env.PUBLIC_ADSENSE_CLIENT_ID;
---

{clientId && (
  <script
    async
    src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
    crossorigin="anonymous"
  ></script>
)}
```

### 8.5 AdsenseBlock 组件

预留组件：

```text
src/components/AdsenseBlock.astro
```

用途：审核通过后在首页、列表页、文章页插入广告。

广告位策略：

- 首页中部信息流广告
- 首页底部广告
- 列表页第 6 个卡片后插入广告
- 文章页第 2 个 H2 后插入广告
- 文章正文中部广告
- 文章末尾广告

MVP 阶段可以先保留组件，但审核前不大量展示广告位。

### 8.6 AdSense 避坑清单

不要做：

- 自己点击广告
- 引导用户点击广告
- 写“请点击广告支持我们”
- 将广告伪装成按钮
- 广告靠近下载按钮或导航按钮
- 移动端广告遮挡内容
- 首屏堆满广告
- 大量低质量内容套广告

---

## 9. 首批内容计划

### 9.1 上线最低内容目标

MVP 上线可以先有 20 篇，但申请 AdSense 前建议至少 30 篇，最好 50 篇。

### 9.2 Prompt 类选题

1. AI 写周报 Prompt
2. AI 写日报 Prompt
3. AI 写 PRD Prompt
4. AI 写会议纪要 Prompt
5. AI 写项目复盘 Prompt
6. AI 写公众号文章 Prompt
7. AI 写小红书文案 Prompt
8. AI 生成 PPT 大纲 Prompt
9. AI 代码审查 Prompt
10. AI 竞品分析 Prompt
11. AI 写邮件 Prompt
12. AI 写 OKR Prompt
13. AI 写岗位 JD Prompt
14. AI 写调研报告 Prompt
15. AI 写 SOP Prompt

### 9.3 Workflow 类选题

1. 用 AI 从零写一份 PRD
2. 用 AI 从零生成一份 PPT
3. 用 AI 整理会议纪要并生成行动项
4. 用 AI 做竞品分析
5. 用 AI 做代码审查
6. 用 AI 写 SEO 文章
7. 用 AI 生成产品发布方案
8. 用 AI 制作项目复盘报告
9. 用 AI 搭建个人知识库
10. 用 AI 批量生成自媒体选题
11. 用 AI 生成运营活动方案
12. 用 AI 搭建内容选题库
13. 用 AI 优化简历
14. 用 AI 生成学习计划
15. 用 AI 做需求分析

### 9.4 Tool 类选题

1. Claude 使用入门
2. Claude Code 使用入门
3. ChatGPT Prompt 入门
4. Cursor AI 编程入门
5. Cloudflare Pages 部署教程
6. GitHub Actions 自动发布教程
7. Notion AI 工作流教程
8. Figma AI 设计辅助教程
9. Obsidian + AI 知识管理教程
10. n8n AI 自动化入门

### 9.5 Agent 类选题

1. AI 产品经理 Agent
2. AI 研究助理 Agent
3. AI 代码审查 Agent
4. AI PPT 策划 Agent
5. AI 设计评审 Agent
6. AI SEO 编辑 Agent
7. AI 会议纪要 Agent
8. AI 运营策划 Agent
9. AI 学习教练 Agent
10. AI 个人助理 Agent

### 9.6 Skill 类选题

1. PRD 写作 Skill
2. 周报生成 Skill
3. 会议纪要整理 Skill
4. PPT 大纲生成 Skill
5. 文章改写 Skill
6. 代码审查 Skill
7. 竞品分析 Skill
8. SEO Brief 生成 Skill
9. 设计评审 Skill
10. SOP 生成 Skill

### 9.7 Guide 类选题

1. AI 工作流入门指南
2. Prompt、Skill、Agent、Workflow 有什么区别
3. 如何用 AI 提升办公效率
4. 如何用 AI 做文档自动化
5. 如何用 AI 辅助代码开发
6. 如何搭建自己的 AI 生产力系统
7. 如何写出高质量 Prompt
8. 如何设计一个可复用 AI Agent
9. AI 工具选型指南
10. AI 内容站如何做 SEO

---

## 10. 开发里程碑

### 阶段 1：项目规划与初始化

目标：完成基础项目搭建。

任务：

- 确认网站名称：`ai-productivity`
- 确认域名：`sts2hub.com`
- 确认技术栈：Astro
- 创建或整理 GitHub 仓库
- 初始化 Astro 项目
- 配置 TypeScript
- 配置 Tailwind CSS
- 配置 MDX
- 配置 Astro Sitemap
- 配置 RSS
- 建立目录结构

交付物：

- 可本地运行的 Astro 项目
- 基础目录结构
- `DEVELOPMENT_PLAN.md`

### 阶段 2：基础布局和页面开发

目标：完成基础页面框架。

任务：

- 开发 `BaseLayout.astro`
- 开发 `ArticleLayout.astro`
- 开发 `ListingLayout.astro`
- 开发 `Header.astro`
- 开发 `Footer.astro`
- 开发首页
- 开发 About 页面
- 开发 Contact 页面
- 开发 Privacy Policy 页面
- 开发 Terms 页面
- 开发 404 页面

交付物：

- 网站基础页面可访问
- 导航和页脚完整
- 移动端基础适配

### 阶段 3：内容系统开发

目标：完成内容集合和动态页面。

任务：

- 配置 `src/content/config.ts`
- 定义 prompts collection
- 定义 skills collection
- 定义 agents collection
- 定义 tools collection
- 定义 workflows collection
- 定义 guides collection
- 开发各栏目列表页
- 开发各栏目详情页
- 实现标签展示
- 实现分类展示
- 实现阅读时间
- 实现相关文章

交付物：

- 多内容类型系统可用
- 各栏目可浏览
- 文章详情页可渲染 MDX

### 阶段 4：SEO 和搜索

目标：完成 SEO 基础设施。

任务：

- 开发 `SEO.astro`
- 添加 canonical
- 添加 Open Graph
- 添加 Twitter Card
- 添加 JSON-LD
- 配置 sitemap
- 配置 robots.txt
- 配置 RSS
- 配置 Pagefind 搜索
- 优化 slug 和内部链接

交付物：

- SEO 基础完成
- sitemap 可访问
- RSS 可访问
- 搜索功能可用

### 阶段 5：首批内容填充

目标：完成上线前内容准备。

任务：

- 写入 10 篇 Prompt 内容
- 写入 5 篇 Workflow 内容
- 写入 3 篇 Tool 内容
- 写入 2 篇 Agent 内容
- 写入 2 篇 Guide 内容
- 检查内容格式
- 检查内链
- 检查 SEO 描述

交付物：

- 至少 20 篇种子内容
- 首页、列表页、详情页都有真实内容

### 阶段 6：Cloudflare Pages 部署

目标：完成正式部署。

任务：

- 推送代码到 GitHub
- Cloudflare Pages 连接 GitHub 仓库
- 配置构建命令
- 配置输出目录
- 绑定域名 `sts2hub.com`
- 配置 HTTPS
- 配置 www 跳转策略
- 验证生产环境页面

交付物：

- `https://sts2hub.com` 可访问
- Cloudflare Pages 自动部署可用

### 阶段 7：AdSense 审核准备

目标：让网站具备申请 AdSense 的条件。

任务：

- 内容扩充到 30 - 50 篇
- 检查 About 页面
- 检查 Contact 页面
- 检查 Privacy Policy 页面
- 检查 Terms 页面
- 检查移动端体验
- 检查 404 和死链
- 接入 Google Search Console
- 提交 sitemap
- 接入 Google Analytics 或 Cloudflare Web Analytics

交付物：

- AdSense 审核准备完成
- Google Search Console 可查看站点
- Analytics 可记录流量

### 阶段 8：AdSense 接入

目标：提交 AdSense 审核并预留广告位。

任务：

- 注册 Google AdSense
- 提交 `https://sts2hub.com`
- 添加 AdSense 验证脚本
- 添加 `public/ads.txt`
- 确认 `https://sts2hub.com/ads.txt` 可访问
- 开发 `AdsenseScript.astro`
- 开发 `AdsenseBlock.astro`
- 审核通过后配置广告位
- 观察广告展示、RPM、CTR 和页面体验

交付物：

- AdSense 申请提交
- ads.txt 可访问
- 广告组件完成
- 审核通过后可逐步开启广告

---

## 11. 上线前检查清单

### 11.1 技术检查

- [ ] `npm run build` 成功
- [ ] 首页可访问
- [ ] 所有栏目页可访问
- [ ] 所有文章页可访问
- [ ] About 可访问
- [ ] Contact 可访问
- [ ] Privacy Policy 可访问
- [ ] Terms 可访问
- [ ] 404 页面正常
- [ ] 移动端布局正常
- [ ] 导航链接正常
- [ ] Footer 链接正常
- [ ] 控制台无明显错误
- [ ] sitemap 可访问
- [ ] robots.txt 可访问
- [ ] RSS 可访问

### 11.2 SEO 检查

- [ ] 每页 title 唯一
- [ ] 每页 description 唯一
- [ ] canonical 正确
- [ ] Open Graph 正确
- [ ] Twitter Card 正确
- [ ] Article JSON-LD 正确
- [ ] Breadcrumb JSON-LD 正确
- [ ] URL slug 清晰
- [ ] 无误设 noindex
- [ ] 无大量重复页面
- [ ] sitemap 已提交 Search Console

### 11.3 内容检查

- [ ] 至少 20 篇种子内容
- [ ] AdSense 申请前至少 30 篇内容
- [ ] 内容不是空模板
- [ ] 分类页不是空页
- [ ] 文章有实际价值
- [ ] 图片无版权风险
- [ ] 内链合理
- [ ] 标签和分类统一

### 11.4 AdSense 检查

- [ ] About 页面完整
- [ ] Contact 页面完整
- [ ] Privacy Policy 包含广告和 Cookie 说明
- [ ] Terms 页面完整
- [ ] ads.txt 可访问
- [ ] AdSense Script 已正确加入 head
- [ ] 没有诱导点击广告的内容
- [ ] 没有影响阅读的广告布局

---

## 12. 后续迭代路线

### 12.1 P1：上线后增强

- 站内搜索优化
- 相关文章算法优化
- 文章目录体验优化
- Prompt 一键复制
- 代码块一键复制
- 分类页筛选
- 标签页
- 热门文章
- 阅读量统计，若后续有后端或第三方服务

### 12.2 P2：内容增长

- 每周发布 5 - 10 篇内容
- 建立 AI 文档工作流专题
- 建立 AI PPT 工作流专题
- 建立 AI 编程工作流专题
- 建立 Claude Code 教程专题
- 建立 Cursor 教程专题
- 建立 AI Agent 案例库

### 12.3 P3：商业化扩展

- Google AdSense 广告优化
- 高级 Prompt 模板包
- AI 工作流模板下载
- 会员内容
- 邮件订阅
- 在线 Prompt 生成器
- PRD 生成器
- PPT 大纲生成器
- SEO Brief 生成器
- 企业 AI 工作流咨询入口

---

## 13. 当前决策记录

- 2026-06-30：确定网站名称为 `ai-productivity`。
- 2026-06-30：确定域名为 `sts2hub.com`。
- 2026-06-30：确定技术栈为 `Astro`。
- 2026-06-30：确定代码托管在 GitHub，发布在 Cloudflare Pages。
- 2026-06-30：确定网站完成后接入 Google AdSense。

---

## 14. 下一步执行建议

下一步建议按顺序执行：

1. 初始化 Astro 项目。
2. 安装 Tailwind、MDX、Sitemap、RSS。
3. 建立目录结构。
4. 实现基础 Layout、Header、Footer。
5. 实现首页。
6. 配置内容集合。
7. 实现 Prompts 列表页和详情页，作为第一个内容类型样板。
8. 复制模式到 Skills、Agents、Tools、Workflows、Guides。
9. 写入首批 20 篇内容。
10. 部署到 Cloudflare Pages。
