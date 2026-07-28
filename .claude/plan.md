# 计划：搜索今日 AI 热点，补充网站攻略并做 SEO 优化

## 背景与约束
- 当前站点是 Astro 内容站，内容主要在 `src/content/{guides,tools,workflows,...}`，专题页在 `src/pages/topics/*`。
- 现有 Git 状态已有多处未提交修改，我会避免覆盖用户已有改动；只在必要文件中增量修改。
- 我尝试使用内置 WebSearch/WebFetch 获取 2026-07-22 AI 热点，但搜索/抓取工具未返回可用结果或受网络限制。因此实施时会优先使用可访问的公开页面；如果仍不可用，会把内容写成“今日可跟进的 AI 热点方向与选题方法”，避免编造具体新闻事实。

## 实施方案
1. **热点调研与选题归纳**
   - 再尝试从 OpenAI、Anthropic、Google/DeepMind、Meta AI 等官方新闻/博客或可访问搜索结果中提取今日/近期热点。
   - 只使用能确认来源的事实；无法确认时不写具体发布时间、型号或未验证新闻。
   - 将热点整理为更适合本站的内容角度：AI 编程 Agent、多模态研究、搜索/SEO 内容、工作流自动化、内容站运营。

2. **新增一篇可收录攻略内容**
   - 在 `src/content/guides/` 新增一篇中文攻略，暂定为 `ai-hot-topics-content-strategy-2026-07-22.md`。
   - 文章结构包含：今日热点观察、适合内容站跟进的选题、如何用 AI 写热点攻略、SEO Brief 模板、更新/复盘清单、内链推荐。
   - frontmatter 补充 `seoTitle`、`seoDescription`、`tags`、`pubDate: 2026-07-22`、`updatedDate: 2026-07-22`，控制标题和描述长度，避免关键词堆砌。

3. **补充专题页入口与内链**
   - 更新 `src/pages/topics/ai-content-site.astro`：
     - 扩展筛选关键词，保证新攻略进入“推荐内容”。
     - 在阅读路径中加入“AI 热点内容策略/今日热点攻略”入口。
     - 适度优化专题页 title/description 文案，让其覆盖“AI 热点、内容策略、SEO、内容站”等搜索意图。
   - 如适合，再在首页学习路径或热门搜索关键词中补充少量入口；保持克制，不大改首页结构。

4. **SEO 验证**
   - 运行 `npm run check:seo` 检查标题、描述等规则。
   - 运行 `npm run build` 或至少 `npm run build:site` 验证 Astro 内容 schema、路由和静态构建。
   - 如果检查失败，按错误修复；如果失败源自既有问题，会明确说明。

## 预期改动文件
- 新增：`src/content/guides/ai-hot-topics-content-strategy-2026-07-22.md`
- 修改：`src/pages/topics/ai-content-site.astro`
- 可能修改：`src/data/taskFinder.ts` 或 `src/pages/index.astro`（仅当需要补充热门搜索/首页入口时）

## 验收标准
- 新攻略能通过 Astro 内容集合 schema。
- 专题页能链接到新攻略，并通过推荐内容展示相关内容。
- SEO 标题/描述明确、自然，不编造未验证热点事实。
- `npm run check:seo` 与构建命令完成或给出真实失败原因。