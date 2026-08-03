export interface TopicLink {
  title: string;
  href: string;
  description: string;
}

export interface TopicFocus {
  title: string;
  description?: string;
  items: Array<{ title: string; description: string; href?: string }>;
}

export interface TopicConfig {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  audience: string[];
  tasks: string[];
  readingPath: TopicLink[];
  coreHrefs: string[];
  keywords: string[];
  focus?: TopicFocus;
  relatedTopics: string[];
}

export const topics = [
  {
    slug: 'ai-writing', title: 'AI 写作专题',
    seoTitle: 'AI 写作专题：文档、邮件、周报、PRD 与 SEO 内容',
    description: '围绕 AI 写作的专题页，汇总文档写作、邮件、日报周报、会议纪要、PRD、SEO 文章和简历优化内容。',
    intro: '从日常办公文档到内容站文章，AI 写作的关键不是让模型替你编造，而是把已有信息整理成结构清晰、可检查、可复用的文本。',
    audience: ['需要提高日报、周报、邮件等办公写作效率的人', '负责 PRD、SOP 和协作文档的产品与项目人员', '需要稳定生产 SEO 或社交媒体内容的创作者'],
    tasks: ['整理已有材料并生成可核对的初稿', '区分事实、假设和待确认问题', '建立写作模板、检查清单与复用流程'],
    readingPath: [
      { title: 'AI 写周报 Prompt', href: '/prompts/ai-weekly-report-prompt/', description: '从高频办公写作开始，学习如何提供原始材料、检查夸大表达和修正风险描述。' },
      { title: 'AI 写 PRD Prompt', href: '/prompts/ai-prd-prompt/', description: '把功能想法整理成可评审文档，重点学习事实、假设和待确认问题的区分。' },
      { title: 'AI SEO 文章工作流', href: '/workflows/seo-article-with-ai/', description: '从关键词、搜索意图和结构规划进入内容创作，不只生成一篇泛泛文章。' },
      { title: 'AI 写作自动化指南', href: '/guides/ai-writing-automation-guide/', description: '把单次 Prompt 升级成可复用的写作流程和检查清单。' },
    ],
    coreHrefs: ['/prompts/ai-weekly-report-prompt/', '/workflows/seo-article-with-ai/', '/guides/ai-writing-automation-guide/'],
    keywords: ['写作', '文档', '邮件', '日报', '周报', '会议纪要', 'PRD', 'SEO', '简历'],
    focus: { title: '写作时优先守住的边界', description: '不建议把 AI 输出直接发布，事实、数据、语气和隐私信息都需要人工复核。', items: [
      { title: '办公写作', description: '日报、周报、会议纪要、邮件和项目复盘适合从固定模板开始。' },
      { title: '产品文档', description: 'PRD、需求分析和 SOP 需要明确输入、边界、验收标准与待确认问题。' },
      { title: '内容创作', description: 'SEO 文章和内容日历需要结合搜索意图、真实案例和后续复盘。' },
    ] },
    relatedTopics: ['ai-product-manager', 'ai-content-site', 'ai-automation'],
  },
  {
    slug: 'ai-product-manager', title: 'AI 产品经理专题',
    seoTitle: 'AI 产品经理专题：需求分析、PRD、竞品分析和产品 Agent',
    description: '汇总 AI 产品经理相关内容，包括需求分析工作流、PRD Prompt、产品经理 Agent、竞品分析和用户场景拆解。',
    intro: '产品经理使用 AI 的重点不是直接生成一份“看起来完整”的 PRD，而是先澄清问题、验证需求、拆解场景、识别风险，再进入文档写作和评审。',
    audience: ['需要从模糊想法推进到明确需求的产品经理', '负责 PRD、用户故事和评审材料的团队成员', '需要整理竞品与用户研究资料的产品团队'],
    tasks: ['判断需求真实性、价值和替代方案', '生成并复核 PRD、验收标准和评审材料', '整理竞品、访谈与产品机会点'],
    readingPath: [
      { title: '先读：用 AI 做需求分析', href: '/workflows/demand-analysis-with-ai/', description: '适合需求还模糊、只有一句话想法时使用。' },
      { title: '再读：AI 写 PRD Prompt', href: '/prompts/ai-prd-prompt/', description: '适合把明确后的功能想法快速写成 PRD 初稿。' },
      { title: '深入：用 AI 从零写 PRD', href: '/workflows/write-prd-with-ai/', description: '适合需要完整评审流程和检查清单的场景。' },
      { title: '扩展：AI 竞品分析工作流', href: '/workflows/competitive-analysis-with-ai/', description: '适合在需求评审前补充外部参考和竞品视角。' },
    ],
    coreHrefs: ['/workflows/demand-analysis-with-ai/', '/workflows/write-prd-with-ai/', '/agents/ai-product-manager-agent/'],
    keywords: ['产品经理', 'PRD', '需求分析', '用户场景', '竞品分析', '需求文档', '产品研究'],
    focus: { title: '推荐路径：从需求到 PRD', items: [
      { title: '需求分析', description: '先判断需求是否真实、是否值得做、是否有更低成本方案。', href: '/workflows/demand-analysis-with-ai/' },
      { title: 'PRD 初稿', description: '把明确后的功能想法整理成背景、场景、功能需求和验收标准。', href: '/prompts/ai-prd-prompt/' },
      { title: '完整工作流', description: '从澄清目标到评审清单，系统完成一份 PRD。', href: '/workflows/write-prd-with-ai/' },
      { title: 'Agent 复核', description: '检查目标、边界、风险和待确认问题。', href: '/agents/ai-product-manager-agent/' },
    ] },
    relatedTopics: ['ai-writing', 'ai-agent', 'ai-design-review'],
  },
  {
    slug: 'ai-coding', title: 'AI 编程专题',
    seoTitle: 'AI 编程专题：Claude Code、Cursor、代码审查和部署',
    description: '汇总 AI 编程相关内容，包括 Claude Code、Cursor、代码审查、GitHub Actions、Astro 和 Cloudflare Pages 部署。',
    intro: 'AI 编程更适合做代码理解、任务拆解、样板生成、代码审查和测试补充。关键是让 AI 先理解上下文，再分步骤修改和验证。',
    audience: ['需要快速进入陌生代码库的开发者', '使用 Claude Code 或 Cursor 开发功能的团队', '希望补充测试与代码审查流程的工程人员'],
    tasks: ['解释项目结构、调用链和修改范围', '小步实现功能并运行构建或测试', '检查正确性、安全、性能与测试缺口'],
    readingPath: [
      { title: '先理解：AI 编程助手指南', href: '/guides/ai-coding-assistant-guide/', description: '了解 AI 编程适合做什么、不适合做什么。' },
      { title: '上手工具：Claude Code 入门', href: '/tools/claude-code-guide/', description: '适合在真实代码库中阅读、修改和验证。' },
      { title: '补测试：AI 单元测试 Prompt', href: '/prompts/ai-unit-test-prompt/', description: '为函数、组件和边界条件生成测试用例。' },
      { title: '做审查：AI 代码审查 Workflow', href: '/workflows/code-review-with-ai/', description: '从正确性、安全、性能和测试缺口检查代码。' },
    ],
    coreHrefs: ['/guides/ai-coding-assistant-guide/', '/tools/claude-code-guide/', '/workflows/code-review-with-ai/'],
    keywords: ['代码', '编程', 'Claude Code', 'Cursor', 'GitHub', 'Astro', 'Code Review'],
    focus: { title: 'AI 编程的三个环节', items: [
      { title: '代码理解', description: '让 AI 找文件、解释调用链、梳理项目结构，降低进入陌生代码库的成本。' },
      { title: '功能开发', description: '先制定计划，再小步修改，最后运行构建或测试验证。' },
      { title: '质量检查', description: '提交前关注正确性、安全、性能和测试缺口。' },
    ] },
    relatedTopics: ['ai-agent', 'ai-automation', 'ai-content-site'],
  },
  {
    slug: 'ai-knowledge-management', title: 'AI 知识管理专题',
    seoTitle: 'AI 知识管理专题：Notion、Obsidian、资料整理和个人知识库',
    description: '汇总 AI 知识管理相关内容，包括 Notion AI、Obsidian、资料总结、个人知识库和研究资料复用工作流。',
    intro: 'AI 知识管理不是把所有资料都丢给模型总结，而是建立稳定的收集、摘要、分类、复用和复盘流程。重点是让资料能回溯、能连接、能转化为行动。',
    audience: ['资料分散在聊天、收藏夹与文档中的知识工作者', '使用 Notion 或 Obsidian 建立个人知识库的人', '需要把研究资料转成报告与行动的团队'],
    tasks: ['选择资料入口并建立稳定字段结构', '完成摘要、标签、双链和可追溯归档', '把资料复用为观点、报告、选题和行动项'],
    readingPath: [
      { title: 'Notion AI 知识管理教程', href: '/tools/notion-ai-knowledge-management-guide/', description: '理解资料库、笔记库、选题库和行动库怎么拆分。' },
      { title: 'Obsidian AI 知识管理教程', href: '/tools/obsidian-ai-guide/', description: '适合偏本地笔记、双链和长期个人知识沉淀。' },
      { title: '用 AI 搭建个人知识库', href: '/workflows/personal-knowledge-base-with-ai/', description: '把工具、字段、摘要和复盘串成完整工作流。' },
      { title: '研究总结 Skill', href: '/skills/research-summary-skill/', description: '把资料转成观点、报告、选题和行动项。' },
    ],
    coreHrefs: ['/tools/notion-ai-knowledge-management-guide/', '/tools/obsidian-ai-guide/', '/workflows/personal-knowledge-base-with-ai/'],
    keywords: ['知识管理', '知识库', '资料整理', '资料总结', 'Notion', 'Obsidian', '研究总结', '个人知识库'],
    focus: { title: '从收集到复用', items: [
      { title: '先选工具', description: '用 Obsidian 或 Notion AI 建立资料入口，避免资料散落。', href: '/tools/obsidian-ai-guide/' },
      { title: '再定结构', description: '把资料库、笔记库、选题库和行动库分开。', href: '/tools/notion-ai-workflow-guide/' },
      { title: '最后复用', description: '把资料转成研究结论、内容选题、报告和行动项。', href: '/skills/research-summary-skill/' },
    ] },
    relatedTopics: ['ai-writing', 'ai-agent', 'ai-automation'],
  },
  {
    slug: 'ai-design-review', title: 'AI 设计评审专题',
    seoTitle: 'AI 设计评审专题：Figma、设计 Brief、页面评审和用户体验',
    description: '汇总 AI 设计评审相关内容，包括 Figma AI、设计 Brief、设计评审 Skill、设计工作流和用户体验检查。',
    intro: 'AI 设计评审的价值不是替代设计师判断美感，而是把页面目标、信息层级、CTA、文案、状态和可用性问题结构化，让评审更具体、更可执行。',
    audience: ['需要准备设计 Brief 的产品经理与运营人员', '希望结构化页面评审反馈的设计团队', '需要检查落地页转化与可访问性的团队'],
    tasks: ['明确页面目标、用户路径和核心 CTA', '检查信息层级、文案、状态与可访问性', '把评审结论转成可执行修改清单'],
    readingPath: [
      { title: 'Figma AI 设计辅助教程', href: '/tools/figma-ai-guide/', description: '理解设计 Brief、页面结构和 Figma 场景。' },
      { title: '设计评审 Skill', href: '/skills/design-review-skill/', description: '把主观反馈变成可执行的检查项和修改建议。' },
      { title: '用 AI 做设计评审工作流', href: '/workflows/design-review-with-ai/', description: '把评审流程沉淀为团队可复用方法。' },
      { title: '落地页文案工作流', href: '/workflows/landing-page-copy-workflow/', description: '补充页面文案、CTA 和转化表达。' },
    ],
    coreHrefs: ['/tools/figma-ai-guide/', '/skills/design-review-skill/', '/workflows/design-review-with-ai/'],
    keywords: ['设计', '设计评审', 'Figma', 'AI 设计', '用户体验', '落地页', 'CTA'],
    focus: { title: '评审时优先看什么', items: [
      { title: '页面目标是否清晰', description: '确认页面只承担清晰、可验证的核心目标。' },
      { title: '主 CTA 是否突出', description: '检查行动指引、文案和视觉优先级。' },
      { title: '信息层级是否合理', description: '让用户能快速扫读并理解下一步。' },
      { title: '状态是否覆盖', description: '不要遗漏空状态、加载状态和错误状态。' },
    ] },
    relatedTopics: ['ai-product-manager', 'ai-multimodal', 'ai-ppt'],
  },
  {
    slug: 'ai-ppt', title: 'AI PPT 专题',
    seoTitle: 'AI PPT 专题：大纲、演示结构和页面文案',
    description: '汇总 AI PPT 相关内容，包括 PPT 大纲、演示结构、页面文案、汇报材料和视觉建议。',
    intro: 'AI 做 PPT 的重点不是直接生成漂亮页面，而是先明确受众、目标、叙事结构和每页核心观点，再进入设计和排版。',
    audience: ['需要准备工作汇报、培训或提案的人', '希望快速搭出演示叙事结构的内容负责人', '需要补充讲稿与页面表达的演讲者'],
    tasks: ['从受众与目标生成页面级大纲', '展开每页标题、要点与图示建议', '检查视觉焦点并补充讲稿和过渡语'],
    readingPath: [
      { title: '先定结构：PPT 大纲 Prompt', href: '/prompts/ai-ppt-outline-prompt/', description: '先明确受众、目标、页数和叙事结构。' },
      { title: '再走完整流程：AI PPT 工作流', href: '/workflows/create-ppt-with-ai/', description: '从主题到页面结构、内容展开和复核。' },
      { title: '补充表达：PPT 演讲稿 Prompt', href: '/prompts/ai-ppt-speaker-notes-prompt/', description: '为每页生成讲稿、过渡语和时间控制。' },
      { title: '角色化协作：PPT 策划 Agent', href: '/agents/ai-ppt-planner-agent/', description: '适合长期辅助汇报、培训和演示策划。' },
    ],
    coreHrefs: ['/prompts/ai-ppt-outline-prompt/', '/workflows/create-ppt-with-ai/', '/agents/ai-ppt-planner-agent/'],
    keywords: ['PPT', '演示', '大纲', '落地页', '文案'],
    focus: { title: '从结构到表达', items: [
      { title: '大纲生成', description: '从主题、受众和演示目标生成页面级结构。' },
      { title: '内容展开', description: '为每页生成标题、要点、图示建议和演讲备注。' },
      { title: '设计评审', description: '检查信息层级、视觉焦点、文案和移动端阅读体验。' },
    ] },
    relatedTopics: ['ai-writing', 'ai-design-review', 'ai-multimodal'],
  },
  {
    slug: 'ai-meeting-efficiency', title: 'AI 会议效率专题',
    seoTitle: 'AI 会议效率专题：会议纪要、行动项和会后跟进',
    description: '汇总 AI 会议效率相关内容，包括会议纪要 Prompt、团队复用方法、行动项工作流和会议纪要 Agent。',
    intro: 'AI 会议效率的重点不是生成一份漂亮纪要，而是把讨论转成结论、行动项、负责人、截止时间和待确认问题，让会议结束后真的能推进。',
    audience: ['需要减少会后整理时间的会议组织者', '希望统一会议纪要与行动项格式的团队', '需要长期跟踪负责人和截止时间的管理者'],
    tasks: ['会前明确目标、议题和待决策问题', '从转写中提取结论、分歧和待确认项', '生成行动项并由参会人确认负责人和期限'],
    readingPath: [
      { title: '使用会议到行动项 Workflow', href: '/workflows/meeting-to-action-items/', description: '内含单次会议 Prompt、团队复用方法，以及从转写到会后同步的完整流程。' },
      { title: '配置会议纪要 Agent', href: '/agents/ai-meeting-minutes-agent/', description: '适合长期承担会议整理和跟进的助手角色。' },
    ],
    coreHrefs: ['/workflows/meeting-to-action-items/', '/agents/ai-meeting-minutes-agent/'],
    keywords: ['会议', '会议纪要', '行动项', '团队协作'],
    focus: { title: '会议效率闭环', items: [
      { title: '会前', description: '明确会议目标、议题和需要决策的问题。' },
      { title: '会中', description: '保留关键上下文、讨论分歧和明确结论。' },
      { title: '会后', description: '转成行动项表格，并确认负责人和截止时间。' },
    ] },
    relatedTopics: ['ai-agent', 'ai-automation', 'ai-writing'],
  },
  {
    slug: 'ai-automation', title: 'AI 自动化专题',
    seoTitle: 'AI 自动化专题：n8n、SOP、会议纪要和内容流程',
    description: '汇总 AI 自动化相关内容，包括 n8n、SOP、会议行动项、内容日历和跨工具工作流。',
    intro: 'AI 自动化适合处理高频、规则清晰、风险可控的重复任务。先标准化输入和输出，再考虑接入 n8n、表单、邮件或数据库。',
    audience: ['希望减少重复办公操作的个人与团队', '需要连接表单、邮件、文档和 AI 的运营人员', '准备从 SOP 逐步搭建自动化流程的人'],
    tasks: ['判断任务频率、规则稳定性与错误成本', '先写 SOP，再自动化低风险文本环节', '为发布、删除、付款和权限变更保留人工确认'],
    readingPath: [
      { title: 'SOP 生成 Skill', href: '/skills/sop-generation-skill/', description: '先把重复任务拆成稳定流程，再考虑自动化。' },
      { title: 'n8n AI 自动化教程', href: '/tools/n8n-ai-automation-guide/', description: '理解表单、Webhook、AI 节点和人工确认如何连接。' },
      { title: '会议到行动项工作流', href: '/workflows/meeting-to-action-items/', description: '从低风险办公场景开始练习自动化闭环。' },
      { title: '内容日历工作流', href: '/workflows/ai-content-calendar-workflow/', description: '把选题、排期、内链和复盘指标放入可执行计划。' },
    ],
    coreHrefs: ['/skills/sop-generation-skill/', '/tools/n8n-ai-automation-guide/', '/workflows/meeting-to-action-items/'],
    keywords: ['自动化', 'n8n', 'Workflow', 'SOP', '内容日历', '会议'],
    focus: { title: '先判断任务是否值得自动化', description: '输入不稳定、判断高度依赖人或错误成本很高时，自动化会放大风险。', items: [
      { title: '流程标准化', description: '先把重复任务变成 SOP、输入字段和检查清单。' },
      { title: '工具连接', description: '用 n8n 等工具连接表单、邮件、文档和 AI 模型。' },
      { title: '人工确认', description: '涉及公开发布、删除、付款等动作必须保留人工确认。' },
    ] },
    relatedTopics: ['ai-agent', 'ai-meeting-efficiency', 'ai-content-site'],
  },
  {
    slug: 'ai-agent', title: 'AI Agent 专题',
    seoTitle: 'AI Agent 专题：角色设计、系统提示词和工作流程',
    description: '汇总 AI Agent 相关内容，包括产品经理 Agent、研究助理 Agent、代码审查 Agent、学习教练和运营策划 Agent。',
    intro: 'Agent 比 Prompt 更强调角色、目标、流程、工具边界和持续协作。设计 Agent 的关键是明确它能做什么、不能做什么、何时需要人工确认。',
    audience: ['希望把一次性 Prompt 升级为持续协作角色的人', '需要为团队任务设置稳定流程与输出格式的人员', '关注工具权限、风险边界和人工确认的实践者'],
    tasks: ['定义专业角色、目标和判断标准', '设计澄清、拆解、输出与自检流程', '限制高风险工具动作并设置人工确认点'],
    readingPath: [
      { title: '产品经理 Agent', href: '/agents/ai-product-manager-agent/', description: '适合需求分析、PRD 和评审准备。' },
      { title: '会议纪要 Agent', href: '/agents/ai-meeting-minutes-agent/', description: '适合整理会议结论、行动项和跟进清单。' },
      { title: '个人助理 Agent', href: '/agents/ai-personal-assistant-agent/', description: '适合整理任务、日程、资料和复盘。' },
      { title: '学习教练 Agent', href: '/agents/ai-learning-coach-agent/', description: '适合制定学习计划并持续复盘。' },
    ],
    coreHrefs: ['/agents/ai-product-manager-agent/', '/agents/ai-meeting-minutes-agent/', '/agents/ai-personal-assistant-agent/'],
    keywords: ['Agent', '智能体', '产品经理', '研究助理', 'SEO 编辑', '学习教练', '运营策划', '会议纪要', '个人助理'],
    focus: { title: 'Agent 设计的关键', items: [
      { title: '角色定义', description: '说明 Agent 的专业角色、目标和判断标准。' },
      { title: '流程设计', description: '让 Agent 先澄清、再拆解、再输出、最后检查。' },
      { title: '边界控制', description: '高风险动作必须等待用户确认，不让 Agent 直接越权执行。' },
    ] },
    relatedTopics: ['ai-automation', 'ai-product-manager', 'ai-coding'],
  },
  {
    slug: 'ai-multimodal', title: '多模态 AI 专题',
    seoTitle: '多模态 AI 专题：视频生成、图像设计、语音智能体与数字人',
    description: '多模态 AI 专题，汇总 AI 视频生成、AI 图像设计、Voice Agent、数字人和文章转短视频工作流。',
    intro: 'AI 生产力不只停留在文字。这里汇总视频生成、图像设计、语音智能体、数字人和多模态内容工作流，帮助你把文本、图片、语音和视频串成完整生产链路。',
    audience: ['需要制作短视频、产品演示与营销素材的创作者', '希望生成封面、海报和视觉参考的设计协作者', '探索语音智能体、数字人和内容分发的团队'],
    tasks: ['从脚本生成分镜、画面提示词和配音文本', '为视频、图像和语音场景选择合适工具', '把文章、图像、语音和视频串成生产流程'],
    readingPath: [
      { title: 'AI 视频生成', href: '/tools/ai-video-generation-tools-guide/', description: '了解 Runway、Pika、可灵等工具，适合短视频与产品演示。' },
      { title: 'AI 图像与设计', href: '/guides/midjourney-prompt-beginner-guide/', description: '生成封面、海报、运营图和视觉参考。' },
      { title: 'AI 语音与 Voice Agent', href: '/tools/voice-agent-beginner-guide/', description: '理解语音智能体、TTS、语音客服和播客生成。' },
      { title: '数字人与口播视频', href: '/workflows/article-to-short-video-workflow/', description: '建立可复用的多模态内容生产流程。' },
    ],
    coreHrefs: ['/tools/ai-video-generation-tools-guide/', '/guides/midjourney-prompt-beginner-guide/', '/workflows/article-to-short-video-workflow/'],
    keywords: ['多模态', '视频', '图像', '设计', '语音', '数字人', 'Midjourney', 'Runway', 'Pika', '可灵', 'Voice Agent', 'ElevenLabs', '短视频'],
    focus: { title: '推荐从“文章转短视频”开始', description: '先提炼文章结构，再生成短视频脚本、分镜、配音和画面提示词，最后进入视频生成工具。', items: [
      { title: '查看文章转短视频工作流', description: '用一个边界清晰的任务练习完整多模态生产链路。', href: '/workflows/article-to-short-video-workflow/' },
    ] },
    relatedTopics: ['ai-design-review', 'ai-writing', 'ai-content-site'],
  },
  {
    slug: 'ai-content-site', title: 'AI 内容站专题',
    seoTitle: 'AI 内容站专题：AI 热点、选题、SEO、部署和 AdSense 实战',
    description: '围绕 AI 内容站建设整理 AI 热点选题、内容日历、SEO、Astro 部署、Cloudflare Pages、Search Console 和 AdSense 审核准备，帮助从 0 到 1 搭建可收录的网站。',
    intro: '内容站不是只写文章，还需要定位、AI 热点选题、内容日历、SEO 基础、部署、收录和商业化准备。这个专题汇总从 0 到 1 的关键内容。',
    audience: ['准备从 0 到 1 搭建 AI 内容站的人', '负责选题、内容日历和站内 SEO 的运营者', '正在处理收录、Search Console 与 AdSense 审核的站长'],
    tasks: ['确定用户、栏目、关键词和原创补充点', '用 Astro、GitHub 与 Cloudflare Pages 上线并检查质量', '复盘收录与流量，控制薄内容和聚合页索引'],
    readingPath: [
      { title: 'AI 热点内容策略', href: '/guides/ai-hot-topics-content-strategy-2026-07-22/', description: '把 AI 新闻、模型发布和工具更新转化为可长期收录的 SEO 攻略。' },
      { title: '用 AI 搭建内容站工作流', href: '/workflows/launch-content-site-with-ai/', description: '从定位、栏目、技术栈和上线流程建立最小可用内容站。' },
      { title: '内容日历工作流', href: '/workflows/ai-content-calendar-workflow/', description: '规划选题、排期、内链和旧文翻新，避免只堆文章数量。' },
      { title: 'Google Search Console 指南', href: '/tools/google-search-console-guide/', description: '检查收录、查询和抓取问题，为 AdSense 审核积累自然流量。' },
    ],
    coreHrefs: ['/guides/ai-hot-topics-content-strategy-2026-07-22/', '/workflows/launch-content-site-with-ai/', '/tools/google-search-console-guide/'],
    keywords: ['内容站', 'SEO', 'AdSense', 'Search Console', '内容日历', 'Cloudflare', 'Astro', 'AI 热点', '内容策略', 'AI 新闻'],
    focus: { title: '内容站不要只做资源导航', description: '围绕真实任务写深：解释为什么这样做、如何配置、哪里会失败、上线后如何复盘。AI 热点应转化为教程、对比、工作流和检查清单。', items: [
      { title: '内容规划', description: '确定目标用户、栏目结构、关键词、原创补充点和更新节奏。' },
      { title: '技术上线', description: '使用 Astro、GitHub 和 Cloudflare Pages 部署，并用 CI 阻止低级错误。' },
      { title: 'SEO 与商业化', description: '配置 sitemap、Search Console、AdSense 和基础监控，先积累自然流量再提交审核。' },
    ] },
    relatedTopics: ['ai-writing', 'ai-automation', 'ai-coding'],
  },
] as const satisfies readonly TopicConfig[];

export type TopicSlug = (typeof topics)[number]['slug'];

export const topicsBySlug = Object.fromEntries(topics.map((topic) => [topic.slug, topic])) as Record<TopicSlug, (typeof topics)[number]>;

export function getTopic(slug: TopicSlug) {
  return topicsBySlug[slug];
}
