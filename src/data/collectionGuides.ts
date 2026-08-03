import type { CollectionName } from '../utils/content';

export interface CollectionGuide {
  subtitle: string;
  startHere: Array<{ label: string; href: string; note: string }>;
  selection: string[];
  avoid: string[];
}

export const collectionGuides: Record<CollectionName, CollectionGuide> = {
  prompts: {
    subtitle: 'Prompt 是可直接复制使用的 AI 指令模板，适合快速完成一次具体任务；高质量 Prompt 页面应包含适用场景、输入示例、输出示例、失败案例和人工复核清单，而不是只放一段模板。',
    startHere: [
      { label: '职场日常汇报指南', href: '/guides/workplace-daily-weekly-report-ai-guide/', note: '先理解日报、周报和项目同步如何合并使用' },
      { label: '如何写出高质量 Prompt', href: '/guides/high-quality-prompt-guide/', note: '理解结构、约束和迭代方法' },
      { label: 'AI PRD Prompt', href: '/prompts/ai-prd-prompt/', note: '适合产品和项目文档' },
    ],
    selection: ['单次任务优先选择 Prompt，例如写日报、改邮件、生成 PRD 初稿。', '如果任务每天或每周重复，先用 Prompt 验证，再沉淀成 Skill 或 Workflow。', '选择详情页时优先看是否有 Before/After、真实输入输出和边界说明。'],
    avoid: ['不要把 Prompt 当成事实来源；涉及数据、业务结论和对外发送时必须人工复核。', '不要为相似任务创建大量薄页面；日报、周报这类相近需求应通过综合指南互链。'],
  },
  skills: {
    subtitle: 'Skill 是可复用的 AI 能力模块，适合把反复出现的任务沉淀成固定输入、步骤和输出；高质量 Skill 应说明输入规范、输出格式、质量标准、失败处理和复用边界。',
    startHere: [
      { label: 'SEO Brief 生成 Skill', href: '/skills/seo-brief-skill/', note: '学习如何定义内容密度和低价值风险' },
      { label: '会议到行动项工作流', href: '/workflows/meeting-to-action-items/', note: '包含 Prompt、团队复用方法和质量检查' },
      { label: '代码审查 Skill', href: '/skills/code-review-skill/', note: '适合技术团队复用' },
    ],
    selection: ['高频、规则稳定、输出格式固定的任务适合 Skill。', '如果任务需要多步骤、多人协作或工具执行，优先升级为 Workflow。', '选择 Skill 时重点看是否有输入要求、失败案例和质量检查清单。'],
    avoid: ['不要把 Skill 写成只有角色设定的短提示词。', '不要让 Skill 自动处理高风险外部发送、删除、付款或合规判断。'],
  },
  agents: {
    subtitle: 'Agent 是带角色、目标和工作方式的 AI 助手配置，适合持续处理某一类问题；高质量 Agent 页面应说明角色边界、输入材料、工作流、失败输出和人工接管条件。',
    startHere: [
      { label: 'AI SEO 编辑 Agent', href: '/agents/ai-seo-editor-agent/', note: '学习如何审查内容价值和密度' },
      { label: 'AI 产品经理 Agent', href: '/agents/ai-product-manager-agent/', note: '理解角色型助手怎么工作' },
      { label: '如何设计 AI Agent', href: '/guides/design-ai-agent-guide/', note: '系统学习设计方法' },
    ],
    selection: ['需要持续判断、提问、复核和多轮协作的任务适合 Agent。', 'Agent 应有清晰停止条件和人工确认点。', '选择 Agent 时重点看是否说明不能做什么。'],
    avoid: ['不要把 Agent 当成无人值守自动执行器。', '不要让 Agent 编造搜索量、用户反馈、工具能力或专业结论。'],
  },
  tools: {
    subtitle: 'Tool 是 AI 工具、开发工具和自动化工具教程，帮助你把 AI 接入真实工作链路。',
    startHere: [
      { label: 'Claude Code 入门', href: '/tools/claude-code-guide/', note: '适合开发者上手' },
      { label: 'Cursor AI 编程指南', href: '/tools/cursor-ai-coding-guide/', note: '适合日常编码提效' },
      { label: 'Obsidian + AI 知识管理', href: '/tools/obsidian-ai-guide/', note: '适合个人知识库' },
    ],
    selection: ['需要选择或接入具体软件时看 Tool。', '优先阅读有真实业务场景、操作步骤、风险边界和可下载资源的教程。', '工具功能、价格和入口变化快，发布前要回到官方来源核对。'],
    avoid: ['不要只看功能列表就做选型。', '不要把 AI 工具输出直接用于外部发布、客户通知或高风险决策。'],
  },
  workflows: {
    subtitle: 'Workflow 是从输入到产出的完整 AI 工作流程，适合需要多步骤、多工具和人工复核的复杂任务。',
    startHere: [
      { label: '用 AI 做需求分析', href: '/workflows/demand-analysis-with-ai/', note: '先判断需求是否值得做' },
      { label: '用 AI 做竞品分析', href: '/workflows/competitive-analysis-with-ai/', note: '研究分析完整流程' },
      { label: '用 AI 做代码审查', href: '/workflows/code-review-with-ai/', note: '研发协作完整流程' },
    ],
    selection: ['多步骤、多角色、多工具任务优先选择 Workflow。', 'Workflow 应包含输入、步骤、输出、人工检查和复盘指标。', '如果只是一次生成文本，Prompt 通常更轻。'],
    avoid: ['不要把 Workflow 写成标题列表。', '不要跳过人工复核、日志和失败处理。'],
  },
  guides: {
    subtitle: 'Guide 是方法论、工具选型和系统搭建指南，适合先建立认知框架再选择具体模板。',
    startHere: [
      { label: 'Prompt、Skill、Agent、Workflow 区别', href: '/guides/prompt-skill-agent-workflow/', note: '先理解核心概念' },
      { label: 'AI 生产力指南', href: '/guides/ai-productivity-guide/', note: '建立整体使用框架' },
      { label: 'AI 工具选型指南', href: '/guides/ai-tools-selection-guide/', note: '选择合适工具组合' },
    ],
    selection: ['不确定该用哪个内容类型时先看 Guide。', 'Guide 适合建立判断标准和阅读路径。', '优先阅读有案例、表格、边界和延伸资源的指南。'],
    avoid: ['不要把 Guide 当成泛泛观点文章。', '不要忽略具体模板和工具教程的落地步骤。'],
  },
};
