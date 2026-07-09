export const taskGroups = [
  {
    id: 'workplace-writing',
    title: '职场写作与汇报',
    description: '周报、日报、会议纪要、邮件、项目复盘等高频办公文本。',
    tasks: [
      {
        title: '写一份结构化周报',
        intent: '把零散工作记录整理成可发给领导或团队的周报。',
        audience: '职场人 / 项目成员',
        difficulty: '入门',
        links: [
          { label: 'AI 写周报 Prompt', href: '/prompts/ai-weekly-report-prompt/', type: 'Prompt' },
          { label: 'AI 写日报 Prompt', href: '/prompts/ai-daily-report-prompt/', type: 'Prompt' },
          { label: '项目复盘工作流', href: '/workflows/project-retrospective-with-ai/', type: 'Workflow' },
        ],
      },
      {
        title: '整理会议纪要和行动项',
        intent: '从会议记录中提炼结论、责任人、截止时间和待确认问题。',
        audience: '项目经理 / 协作团队',
        difficulty: '入门',
        links: [
          { label: '会议纪要 Prompt', href: '/prompts/ai-meeting-minutes-prompt/', type: 'Prompt' },
          { label: '会议到行动项工作流', href: '/workflows/meeting-to-action-items/', type: 'Workflow' },
          { label: '会议纪要整理 Skill', href: '/skills/meeting-minutes-skill/', type: 'Skill' },
        ],
      },
      {
        title: '写一封更清晰的职场邮件',
        intent: '把口语化想法整理成目标明确、语气合适的邮件。',
        audience: '职场沟通 / 客户协作',
        difficulty: '入门',
        links: [
          { label: 'AI 邮件写作 Prompt', href: '/prompts/ai-email-writing-prompt/', type: 'Prompt' },
          { label: '邮件写作 Skill', href: '/skills/email-writing-skill/', type: 'Skill' },
          { label: 'AI 写作自动化指南', href: '/guides/ai-writing-automation-guide/', type: 'Guide' },
        ],
      },
    ],
  },
  {
    id: 'product-manager',
    title: '产品经理与项目推进',
    description: '需求分析、PRD、竞品分析、OKR 和产品汇报。',
    tasks: [
      {
        title: '从需求想法生成 PRD 初稿',
        intent: '把用户反馈或业务目标整理成可评审的需求文档。',
        audience: '产品经理 / 创业者',
        difficulty: '进阶',
        links: [
          { label: 'AI PRD Prompt', href: '/prompts/ai-prd-prompt/', type: 'Prompt' },
          { label: '写 PRD 工作流', href: '/workflows/write-prd-with-ai/', type: 'Workflow' },
          { label: 'PRD 写作 Skill', href: '/skills/prd-writing-skill/', type: 'Skill' },
        ],
      },
      {
        title: '做一次竞品分析',
        intent: '明确分析维度，输出竞品对比、机会点和汇报结构。',
        audience: '产品 / 运营 / 市场',
        difficulty: '进阶',
        links: [
          { label: '竞品分析 Prompt', href: '/prompts/ai-competitor-analysis-prompt/', type: 'Prompt' },
          { label: '竞品分析工作流', href: '/workflows/competitive-analysis-with-ai/', type: 'Workflow' },
          { label: 'AI 研究报告 Prompt', href: '/prompts/ai-research-report-prompt/', type: 'Prompt' },
        ],
      },
      {
        title: '拆解目标和 OKR',
        intent: '把模糊目标拆成可衡量结果、关键行动和风险。',
        audience: '团队负责人 / 项目负责人',
        difficulty: '入门',
        links: [
          { label: 'AI OKR Prompt', href: '/prompts/ai-okr-prompt/', type: 'Prompt' },
          { label: 'AI 产品经理 Agent', href: '/agents/ai-product-manager-agent/', type: 'Agent' },
          { label: '需求分析工作流', href: '/workflows/demand-analysis-with-ai/', type: 'Workflow' },
        ],
      },
    ],
  },
  {
    id: 'content-growth',
    title: '内容创作与增长',
    description: 'SEO 文章、公众号、小红书、内容日历和落地页文案。',
    tasks: [
      {
        title: '写一篇 SEO 文章',
        intent: '从关键词、搜索意图到文章结构，形成可发布的内容草稿。',
        audience: '内容运营 / 站长',
        difficulty: '进阶',
        links: [
          { label: 'AI SEO 文章工作流', href: '/workflows/seo-article-with-ai/', type: 'Workflow' },
          { label: 'SEO Brief Skill', href: '/skills/seo-brief-skill/', type: 'Skill' },
          { label: 'AI SEO 编辑 Agent', href: '/agents/ai-seo-editor-agent/', type: 'Agent' },
        ],
      },
      {
        title: '规划小红书选题',
        intent: '根据人群、痛点和账号定位生成选题池和内容角度。',
        audience: '内容运营 / 自媒体',
        difficulty: '入门',
        links: [
          { label: '小红书选题工作流', href: '/workflows/xiaohongshu-topic-workflow/', type: 'Workflow' },
          { label: '内容日历工作流', href: '/workflows/ai-content-calendar-workflow/', type: 'Workflow' },
          { label: '微信公众号文章工作流', href: '/workflows/wechat-article-workflow/', type: 'Workflow' },
        ],
      },
      {
        title: '优化落地页转化文案',
        intent: '围绕受众、痛点、价值主张和 CTA 改写页面文案。',
        audience: '增长 / 运营 / 创业者',
        difficulty: '进阶',
        links: [
          { label: '落地页文案工作流', href: '/workflows/landing-page-copy-workflow/', type: 'Workflow' },
          { label: 'AI 写作指南', href: '/guides/high-quality-prompt-guide/', type: 'Guide' },
          { label: 'AI 工具选型指南', href: '/guides/ai-tools-selection-guide/', type: 'Guide' },
        ],
      },
    ],
  },
  {
    id: 'coding',
    title: '编程与代码审查',
    description: 'Claude Code、Cursor、代码审查、单元测试和自动化发布。',
    tasks: [
      {
        title: '用 AI 做代码审查',
        intent: '从正确性、安全性、可维护性和测试覆盖找出风险。',
        audience: '开发者 / 技术负责人',
        difficulty: '进阶',
        links: [
          { label: '代码审查 Prompt', href: '/prompts/ai-code-review-prompt/', type: 'Prompt' },
          { label: 'AI 代码审查工作流', href: '/workflows/code-review-with-ai/', type: 'Workflow' },
          { label: '代码审查 Skill', href: '/skills/code-review-skill/', type: 'Skill' },
        ],
      },
      {
        title: '为代码补充单元测试',
        intent: '根据函数行为和边界条件生成测试用例。',
        audience: '开发者',
        difficulty: '入门',
        links: [
          { label: '单元测试 Prompt', href: '/prompts/ai-unit-test-prompt/', type: 'Prompt' },
          { label: 'AI 编程助手指南', href: '/guides/ai-coding-assistant-guide/', type: 'Guide' },
          { label: 'Cursor AI 编程指南', href: '/tools/cursor-ai-coding-guide/', type: 'Tool' },
        ],
      },
      {
        title: '上手 Claude Code / Cursor',
        intent: '选择适合自己的 AI 编程工具，并接入真实开发流程。',
        audience: '开发者 / 独立站长',
        difficulty: '入门',
        links: [
          { label: 'Claude Code 入门', href: '/tools/claude-code-guide/', type: 'Tool' },
          { label: 'Cursor AI 编程指南', href: '/tools/cursor-ai-coding-guide/', type: 'Tool' },
          { label: 'GitHub Actions 内容工作流', href: '/tools/github-actions-content-workflow/', type: 'Tool' },
        ],
      },
    ],
  },
  {
    id: 'multimodal-ai',
    title: '多模态内容生产',
    description: 'AI 视频、图像设计、语音智能体、数字人和短视频工作流。',
    tasks: [
      {
        title: '把文章改成短视频',
        intent: '从长文中提炼脚本、分镜、配音和画面提示词。',
        audience: '内容运营 / 知识博主',
        difficulty: '进阶',
        links: [
          { label: '文章转短视频工作流', href: '/workflows/article-to-short-video-workflow/', type: 'Workflow' },
          { label: 'AI 视频生成工具对比', href: '/tools/ai-video-generation-tools-guide/', type: 'Tool' },
          { label: '多模态 AI 专题', href: '/topics/ai-multimodal/', type: 'Topic' },
        ],
      },
      {
        title: '生成海报、封面和运营图',
        intent: '用图像 Prompt 描述主体、构图、风格、光线和用途。',
        audience: '设计 / 运营 / 自媒体',
        difficulty: '入门',
        links: [
          { label: 'AI 绘画 Prompt 模板', href: '/prompts/ai-image-prompt-template/', type: 'Prompt' },
          { label: 'Midjourney 提示词入门', href: '/guides/midjourney-prompt-beginner-guide/', type: 'Guide' },
          { label: 'Figma AI 工具指南', href: '/tools/figma-ai-guide/', type: 'Tool' },
        ],
      },
      {
        title: '判断是否适合做语音智能体',
        intent: '评估客服、销售、教育或内部助手是否适合 Voice Agent。',
        audience: '产品 / 运营 / 自动化团队',
        difficulty: '进阶',
        links: [
          { label: 'Voice Agent 入门', href: '/tools/voice-agent-beginner-guide/', type: 'Tool' },
          { label: 'AI Agent 专题', href: '/topics/ai-agent/', type: 'Topic' },
          { label: '多模态 AI 专题', href: '/topics/ai-multimodal/', type: 'Topic' },
        ],
      },
    ],
  },
  {
    id: 'knowledge-automation',
    title: '知识管理与自动化',
    description: '资料总结、个人知识库、Notion、Obsidian、n8n 自动化。',
    tasks: [
      {
        title: '把资料整理成研究总结',
        intent: '从长文、网页或资料片段中提炼结论、引用和待验证问题。',
        audience: '研究 / 学习 / 内容创作',
        difficulty: '入门',
        links: [
          { label: '研究总结 Skill', href: '/skills/research-summary-skill/', type: 'Skill' },
          { label: 'AI 研究报告 Prompt', href: '/prompts/ai-research-report-prompt/', type: 'Prompt' },
          { label: 'Gemini 多模态研究工作流', href: '/workflows/gemini-multimodal-research-workflow/', type: 'Workflow' },
        ],
      },
      {
        title: '搭建个人知识库',
        intent: '选择 Notion 或 Obsidian，把输入、总结、标签和复盘串起来。',
        audience: '知识工作者 / 学生',
        difficulty: '进阶',
        links: [
          { label: '个人知识库工作流', href: '/workflows/personal-knowledge-base-with-ai/', type: 'Workflow' },
          { label: 'Notion AI 知识管理', href: '/tools/notion-ai-knowledge-management-guide/', type: 'Tool' },
          { label: 'Obsidian AI 指南', href: '/tools/obsidian-ai-guide/', type: 'Tool' },
        ],
      },
      {
        title: '自动化重复任务',
        intent: '把内容收集、整理、提醒、发布等重复动作交给工作流工具。',
        audience: '运营 / 个人效率 / 创业者',
        difficulty: '进阶',
        links: [
          { label: 'n8n AI 自动化指南', href: '/tools/n8n-ai-automation-guide/', type: 'Tool' },
          { label: 'Notion AI 工作流指南', href: '/tools/notion-ai-workflow-guide/', type: 'Tool' },
          { label: 'AI 自动化专题', href: '/topics/ai-automation/', type: 'Topic' },
        ],
      },
    ],
  },
];

export const taskShortcuts = taskGroups.flatMap((group) =>
  group.tasks.map((task) => ({
    groupId: group.id,
    groupTitle: group.title,
    ...task,
  })),
);

export const hotSearchKeywords = ['周报', '简历', 'PRD', '会议纪要', '竞品分析', '代码审查', 'Cursor', 'Claude Code', '小红书', 'SEO', 'AI 视频', 'Midjourney', 'Voice Agent'];
