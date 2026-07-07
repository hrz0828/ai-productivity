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

---

## 15. 内容优化专项计划（2026-07-07）

### 15.1 背景与问题判断

当前网站已经具备内容站的基本结构，但内容规模、首页导流和信息架构之间存在不匹配：

1. 首页“热门主题”展示了较多细分分类，但部分分类目前只有 1 篇文章，容易给用户造成“栏目未完成”的感受。
2. 首页宣传“58+ 原创内容”，对于“实战库”定位而言仍处于早期阶段，暂时不适合过度强调大而全的分类体系。
3. Prompt、Skill、Agent、Workflow 等概念在导航和标签中平行展示，新手用户不容易理解它们之间的层级关系和使用路径。
4. 首页“本站适合解决”的场景只做了文本陈列，没有链接到对应内容，导致用户看到需求后无法直接进入解决方案。
5. 首页“最新文章”和“工具教程”内容重复，降低了首页信息密度。
6. 部分英文术语缺少中文解释，对非 AI 圈、非产品技术背景的新手用户不够友好。

本专项计划的目标不是一次性重做全站，而是先通过内容结构、首页导流和术语解释优化，提高用户进入网站后的理解效率和点击深度。

### 15.2 优化目标

#### 用户体验目标

- 让新用户在首页 10 秒内理解本站能解决什么问题。
- 让用户可以从“我要完成的工作”直接跳转到对应 Prompt、Skill、Tool 或 Workflow。
- 减少空置、稀薄分类带来的未完成感。
- 降低 Prompt、Skill、Agent、Workflow 等概念的理解门槛。

#### 内容运营目标

- 将首页从“内容类型展示”升级为“场景化问题解决入口”。
- 优先强化已有内容较多、用户需求明确的主题。
- 建立分类合并、隐藏和扩充规则，避免过早暴露薄弱栏目。
- 为后续内容增长建立选题优先级，而不是平均填充所有分类。

#### SEO 与商业化目标

- 增加核心页面的内部链接数量和主题相关性。
- 提升分类页和专题页的内容厚度。
- 降低重复模块对首页有效信息密度的影响。
- 为后续 Google AdSense 审核减少“薄内容页”和“重复内容块”风险。

### 15.3 优先级原则

内容优化按以下优先级执行：

1. **先优化首页导流，再扩充文章数量**：用户路径不清时，新增内容的价值难以释放。
2. **先做强主题，再扩散分类**：优先保留和强化内容已相对成型的主题，暂时隐藏或降级只有 1 篇文章的分类入口。
3. **先服务具体场景，再解释抽象概念**：首页重点展示“写周报、做 PPT、写 PRD、做竞品分析、代码审查”等任务入口。
4. **先减少重复，再增加模块**：避免首页多个区域展示同一批文章。
5. **先中文解释，再保留英文术语**：英文术语不删除，但需要配中文副标题或一句话解释。

### 15.4 阶段 1：首页内容结构修正

目标：解决首页信息重复、场景不可点击、主题入口过细的问题。

#### 任务 1：首页“本站适合解决”改为可点击场景入口

将当前纯文本场景改为链接卡片，每个场景链接到对应内容：

| 场景 | 推荐链接方向 |
| --- | --- |
| 写周报 / 日报 | `/prompts/ai-weekly-report-prompt/`、`/prompts/ai-daily-report-prompt/` |
| 写 PRD / 需求文档 | `/prompts/ai-prd-prompt/`、`/workflows/write-prd-with-ai/` |
| 快速生成 PPT 大纲 | `/prompts/ai-ppt-outline-prompt/`、`/workflows/create-ppt-with-ai/` |
| 整理会议纪要 | `/prompts/ai-meeting-minutes-prompt/`、`/workflows/meeting-to-action-items/` |
| 做竞品分析 | `/prompts/ai-competitor-analysis-prompt/`、`/workflows/competitive-analysis-with-ai/` |
| 做代码审查 | `/prompts/ai-code-review-prompt/`、`/workflows/code-review-with-ai/` |
| 搭建知识库 | `/tools/obsidian-ai-guide/`、`/workflows/personal-knowledge-base-with-ai/` |
| 优化简历 | `/prompts/ai-resume-optimization-prompt/` |

交付标准：

- 每个场景至少有 1 个明确链接。
- 链接文案使用用户任务语言，而不是栏目语言。
- 卡片中显示“适合谁 / 最终产出 / 推荐入口”。

#### 任务 2：调整“热门主题”展示规则

短期不再把所有低内容量分类都作为首页核心入口。

规则建议：

- 首页热门主题只展示文章数不少于 2 篇的主题。
- 只有 1 篇文章的分类，暂时移到“更多主题”或不在首页展示。
- 对战略重要但内容不足的主题，例如“知识管理”“Gemini”“设计工具”，进入内容补齐队列。

优先展示主题建议：

- AI 写作
- AI 编程
- AI 自动化
- AI Agent
- PPT 制作
- 产品经理
- 会议效率
- 内容创作
- SEO
- 知识管理（补齐后再强化）

交付标准：

- 首页不再突出展示明显只有 1 篇内容的主题。
- 主题卡片增加文章数量提示，避免用户预期过高。
- 分类页如果内容较少，需要显示“推荐延伸阅读”，而不是只有单篇列表。

#### 任务 3：解决“最新文章”和“工具教程”重复

首页模块分工调整：

- “最新文章”：展示全站最新内容，但排除已在“工具教程精选”中展示的文章。
- “工具教程精选”：只展示工具类内容，如 Claude Code、Cursor、Gemini、Figma、Obsidian、n8n。
- 新增或替换一个“实战工作流精选”模块，用于展示 PRD、PPT、会议纪要、竞品分析、代码审查等高价值工作流。

交付标准：

- 首页同一篇文章不在相邻两个模块重复出现。
- 首页至少展示 3 类不同内容：场景入口、工具教程、实战工作流。
- 产品经理、代码审查、会议纪要等非工具类内容获得首页曝光。

### 15.5 阶段 2：核心概念引导优化

目标：降低 Prompt、Skill、Agent、Workflow 的理解门槛。

#### 任务 1：首页增加“从简单到复杂”的概念解释区

建议在首页或 Guides 入口附近增加一个轻量说明模块：

```text
Prompt：一次性指令，适合快速生成一份内容。
Skill：可复用能力模块，适合反复完成同类任务。
Agent：带角色、目标和工具的 AI 助手，适合持续处理一类问题。
Workflow：多个步骤或多个工具组合成的完整流程，适合复杂任务。
```

推荐表达方式：

```text
不知道从哪里开始？
如果你只是想马上完成一件事，先用 Prompt。
如果你经常重复同类任务，沉淀成 Skill。
如果任务需要持续判断和多轮处理，可以设计 Agent。
如果任务跨多个步骤、工具和角色，就使用 Workflow。
```

交付标准：

- 首页有一段新手能读懂的层级说明。
- 链接到 `/guides/prompt-skill-agent-workflow/` 作为延伸阅读。
- 导航栏保留英文栏目名，但在页面内给出中文解释。

#### 任务 2：栏目页增加中文副标题

各栏目页建议增加一句话解释：

| 栏目 | 中文解释 |
| --- | --- |
| Prompts | 可直接复制使用的 AI 指令模板 |
| Skills | 可复用的 AI 能力模块 |
| Agents | 面向特定角色和目标的 AI 助手配置 |
| Tools | AI 工具、开发工具和自动化工具教程 |
| Workflows | 从输入到产出的完整 AI 工作流程 |
| Guides | 方法论、选型和系统搭建指南 |

交付标准：

- 每个栏目页标题下方有中文解释。
- 解释避免抽象术语，尽量说明“适合什么任务”。
- 栏目页顶部增加 2 - 4 个推荐新手入口。

### 15.6 阶段 3：分类体系收敛与内容补齐

目标：解决分类过细、内容不足的问题。

#### 分类处理规则

| 分类状态 | 处理方式 |
| --- | --- |
| 0 篇文章 | 不在首页和主要入口展示 |
| 1 篇文章 | 不作为热门主题展示，只在文章详情或标签页中出现 |
| 2 - 4 篇文章 | 可作为普通主题展示，但需要补充推荐阅读 |
| 5 篇以上 | 可作为核心主题或专题入口 |
| 战略重要但内容少 | 进入内容补齐计划，暂不强推 |

#### 第一批需要补齐的主题

1. 知识管理
   - 目标：从 1 篇扩充到 4 篇。
   - 方向：Obsidian + AI、Notion AI、个人知识库工作流、资料总结 Skill。
2. 设计工具 / AI 设计
   - 目标：从 1 篇扩充到 3 - 4 篇。
   - 方向：Figma AI、设计评审工作流、设计评审 Agent、落地页文案与设计协作。
3. Gemini
   - 目标：从 1 篇扩充到 3 篇。
   - 方向：Gemini 入门、多模态研究、Gemini 与 ChatGPT / Claude 对比。
4. 产品经理
   - 目标：强化为核心主题。
   - 方向：PRD Prompt、PRD Workflow、产品经理 Agent、竞品分析 Prompt、需求分析 Workflow。
5. 代码审查 / AI 编程
   - 目标：强化为核心主题。
   - 方向：代码审查 Prompt、代码审查 Skill、代码审查 Workflow、Claude Code、Cursor。

交付标准：

- 首页核心主题不出现明显薄内容分类。
- 每个重点主题至少有 3 篇可互相链接的内容。
- 每篇新文章至少链接 2 篇相关内容，形成内容簇。

### 15.7 阶段 4：首页视觉层级与案例展示增强

目标：减少“标题 + 摘要 + 标签”的单一堆叠感。

#### 任务 1：增加“典型案例路径”模块

用 3 - 4 个案例展示从问题到内容的路径：

```text
案例：我要做一份竞品分析
1. 先用 Prompt 收集对比维度
2. 再用 Workflow 输出完整分析报告
3. 最后用 PPT Prompt 生成汇报大纲
```

推荐案例：

- 写一份 PRD
- 做一份竞品分析
- 生成一份 PPT
- 搭建个人知识库
- 用 AI 做代码审查

交付标准：

- 每个案例路径包含 2 - 3 个内链。
- 用步骤式 UI 或横向流程卡片呈现。
- 让用户看到“不是单篇文章，而是一套解决路径”。

#### 任务 2：精选内容卡片增加类型差异

不同类型内容卡片增加不同标识：

- Prompt：可复制模板
- Skill：可复用能力
- Agent：角色配置
- Tool：工具教程
- Workflow：完整流程
- Guide：方法论指南

交付标准：

- 用户能在列表中快速判断内容类型。
- 首页重点卡片不再全部长得一样。
- 卡片文案突出最终产出，而不是只写文章摘要。

### 15.8 阶段 5：英文术语本地化

目标：保留行业常用英文，同时降低新手理解成本。

#### 第一批需要解释的术语

| 术语 | 推荐中文解释 |
| --- | --- |
| Prompt | 提示词 / 给 AI 的任务指令 |
| Skill | 技能模块 / 可复用的 AI 能力 |
| Agent | 智能体 / 带目标和工具的 AI 助手 |
| Workflow | 工作流 / 多步骤任务流程 |
| Brief | 创作简报 / 任务说明书 |
| CTA | 行动号召 / 引导用户点击或转化的话术 |
| JD | 岗位说明 / 招聘职位描述 |
| PRD | 产品需求文档 |
| SEO | 搜索引擎优化 |
| SOP | 标准作业流程 |

#### 落地位置

- 首页概念解释区。
- 各栏目页顶部说明。
- 文章首次出现英文术语时，用括号补充中文解释。
- Resources 页面增加“AI 生产力术语表”。

交付标准：

- 首页核心英文术语都有中文解释。
- 新手不需要先理解英文缩写，也能知道内容用途。
- 术语解释不影响专业用户阅读效率。

### 15.9 内容选题补齐计划

#### P0：优先补齐支撑首页场景的内容

1. AI 写岗位 JD Prompt
2. AI 写调研报告 Prompt
3. AI 写 SOP Prompt
4. 用 AI 做需求分析 Workflow
5. 用 AI 生成学习计划 Workflow
6. AI 设计评审 Agent
7. AI 会议纪要 Agent
8. AI 个人助理 Agent

#### P1：补齐薄弱主题内容

1. Gemini 与 ChatGPT / Claude 对比指南
2. Gemini 多模态研究工作流
3. Notion AI 知识管理教程
4. Obsidian + AI 资料总结工作流
5. Figma AI 设计评审实战
6. AI 设计评审 Skill

#### P2：增强内容簇和专题页

1. AI 产品经理专题页
2. AI 编程与代码审查专题页
3. AI 写作与文档自动化专题页
4. AI PPT 制作专题页
5. AI 知识管理专题页

### 15.10 技术实现任务清单

#### 首页

- [x] 将“本站适合解决”改为可点击场景卡片。
- [x] 首页热门主题按文章数量过滤，隐藏 1 篇内容的主题。
- [x] 首页主题卡片显示文章数量。
- [x] 去除“最新文章”和“工具教程”的重复文章。
- [x] 增加“实战工作流精选”或“典型案例路径”模块。
- [x] 增加 Prompt / Skill / Agent / Workflow 的新手解释模块。

#### 列表页与分类页

- [x] 栏目页增加中文副标题和新手入口。
- [x] 分类页内容少于 3 篇时显示推荐延伸阅读。
- [x] 标签页和分类页增加空状态或薄内容提示，避免页面显得未完成。
- [x] 统一内容卡片中的类型标识和最终产出说明。

#### 内容与内链

- [x] 补齐 P0 内容选题中的核心项。
- [x] 为薄弱主题补充 P1 内容。
- [~] 每篇文章增加 2 - 4 个相关内链。（已优先补强 Gemini、知识管理、设计评审、产品经理核心内容，仍需继续覆盖旧文章。）
- [~] 在文章中补充英文术语中文解释。（首页、栏目页、Resources 已完成，旧文章首次出现术语仍需持续补齐。）
- [x] Resources 页面增加 AI 生产力术语表。

#### SEO 与质量检查

- [x] 检查首页重复链接和重复模块。
- [~] 检查分类页是否存在薄内容问题。（首页已隐藏 1 篇分类，分类页已加推荐延伸阅读；仍有较多长尾分类需靠内容增长补齐。）
- [~] 检查 sitemap 中是否包含低质量空页面。（构建正常；长尾标签页仍会随内容增长继续优化。）
- [x] 检查每个核心主题是否至少有 3 篇内容支撑。
- [x] 运行 `npm run build` 验证构建。

### 15.11 建议执行顺序

第一周优先做结构和导流：

1. 首页“本站适合解决”改成可点击场景入口。
2. 首页热门主题按内容数量过滤。
3. 去除首页重复展示文章。
4. 增加 Prompt / Skill / Agent / Workflow 简明解释。
5. 栏目页增加中文副标题。

第二周补齐内容和内链：

1. 补齐 P0 选题中的 4 - 6 篇。
2. 对已有核心文章补充相关内链。
3. 为薄弱分类增加推荐延伸阅读。
4. 开始建设 AI 产品经理、AI 编程、AI 写作三个内容簇。

第三周优化视觉和专题：

1. 首页增加典型案例路径模块。
2. 优化精选内容卡片视觉层级。
3. 建立 2 - 3 个专题页。
4. 建立 AI 生产力术语表。

### 15.12 验收标准

### 15.13 当前执行状态（2026-07-07）

已完成：

- 首页场景入口可点击化。
- 首页 Prompt / Skill / Agent / Workflow 概念解释。
- 首页热门主题按内容数量过滤。
- 首页最新文章去重和专题入口分层。
- 分类页、标签页薄内容提示和推荐延伸阅读。
- Resources 页面术语表和“按专题学习”入口。
- P0 核心内容补齐：JD Prompt、调研报告 Prompt、SOP Prompt、需求分析 Workflow。
- P1 薄弱主题补齐：Gemini 对比指南、Gemini 多模态研究 Workflow、Notion AI 知识管理教程、设计评审 Skill。
- 专题页增强：AI 产品经理、AI 知识管理、AI 设计评审。
- 核心专题页增加推荐阅读顺序。
- 工具教程扩写完成：ChatGPT、Claude Code、Cursor、n8n、Gemini、Figma、Obsidian、Notion AI 均已补充步骤、示例、误区或复核清单。
- 关键入口链接检查完成：首页、Resources 和专题页重点链接均可解析到现有页面。

仍需持续推进：

- 长尾分类仍较多，后续应继续合并曝光入口或补齐内容。
- 旧文章内链需要逐步覆盖到每篇 2 - 4 个相关链接。
- 英文术语中文解释需要继续补进旧文章正文。
- P0 剩余内容已补齐：AI 会议纪要 Agent、AI 个人助理 Agent、学习计划 Workflow。
- 后续重点转为：长尾分类治理、短内容扩写、旧文章内链覆盖、专题页持续精修。

### 15.14 分类审计记录（2026-07-07）

当前已有 3 篇以上内容支撑的分类：

- 内容工作流：4 篇
- Gemini：3 篇
- 产品经理：3 篇
- 文档写作：3 篇
- 研究分析：3 篇
- 办公效率：3 篇

本轮继续补强后，以下薄弱分类已新增内容或专题支撑：

- 知识管理：新增 Obsidian + AI 资料总结工作流。
- PPT 制作：新增 AI PPT 演讲稿 Prompt。
- 代码编写：新增 AI 单元测试 Prompt。
- 会议效率：新增 AI 会议效率专题，并已形成 Prompt / Skill / Workflow / Agent 链路。
- AI 生产力：新增 AI 个人助理 Agent 和学习计划 Workflow。

仍需靠内容增长继续补齐的代表性分类：

- 设计工具 / 设计工作流：可继续补设计评审案例、Figma 实战案例。
- 代码编写：可继续补 Claude Code 调试工作流、重构 Prompt。
- PPT 制作：可继续补 PPT 页面润色 Skill、汇报复盘工作流。

### 15.15 SEO 与内容质量审计记录（2026-07-07）

元信息检查：

- 重复 title：0 个。
- 重复 description：0 个。
- 重复 seoDescription：0 个。

当前仍偏短、后续可优先扩写的内容：

- AI 运营策划 Agent
- 用 AI 制定内容日历的工作流
- Google Search Console 入门
- 用 AI 写公众号文章的完整工作流
- Google AdSense 接入教程
- 用 AI 生成落地页文案的工作流
- 用 AI 写项目复盘报告的工作流
- GitHub Actions 内容站自动化

分类与标签分散度：

- 当前内容总量：72 篇。
- 分类数量：44 个，其中单篇分类 29 个。
- 标签数量：119 个，其中单篇标签 57 个。
- 结论：标签和分类仍偏分散；首页已通过热门主题过滤和专题入口降低暴露风险，后续应继续合并展示入口，避免把所有单篇分类作为核心导航。

链接检查：

- 首页、Resources、专题页重点链接检查通过，未发现缺失目标。


本专项计划第一轮完成后，应满足：

- 首页主要场景入口均可点击。
- 首页不再高频重复展示同一批文章。
- 首页核心主题不突出展示明显只有 1 篇内容的分类。
- Prompt、Skill、Agent、Workflow 在首页或栏目页有清晰中文解释。
- 至少 3 个核心主题形成内容簇，每个主题不少于 3 篇文章。
- 分类页和标签页不会给用户明显“空栏目”感。
- 新增或优化内容均包含合理内链。
- `npm run build` 通过，无类型和构建错误。
