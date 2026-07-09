export const analyticsEvents = [
  {
    name: 'prompt_preview_open',
    category: 'Prompt 使用',
    purpose: '衡量首页热门 Prompt 的预览兴趣。',
    keyParams: ['prompt_id', 'prompt_title', 'source'],
  },
  {
    name: 'prompt_copy',
    category: 'Prompt 使用',
    purpose: '衡量 Prompt 是否真正被复制使用，是工具型转化核心指标。',
    keyParams: ['prompt_id', 'prompt_title', 'source'],
  },
  {
    name: 'code_copy',
    category: '文章实操',
    purpose: '衡量文章内代码块、Prompt 块和模板块的复制行为。',
    keyParams: ['code_block_index', 'page_path'],
  },
  {
    name: 'article_feedback_click',
    category: '反馈闭环',
    purpose: '记录文章有用、没帮助、过时催更和更好 Prompt 等反馈。',
    keyParams: ['feedback_value', 'article_key', 'article_title', 'collection'],
  },
  {
    name: 'feedback_mailto_submit',
    category: '反馈闭环',
    purpose: '记录用户是否从反馈页生成反馈邮件。',
    keyParams: ['feedback_type', 'page_url'],
  },
  {
    name: 'submit_prompt_mailto',
    category: '社区投稿',
    purpose: '记录用户是否从投稿页生成 Prompt 投稿邮件。',
    keyParams: ['prompt_title', 'scenario', 'tool', 'allow_public'],
  },
  {
    name: 'task_finder_click',
    category: '内容发现',
    purpose: '衡量 /tasks/ 页面中任务推荐链接的点击。',
    keyParams: ['href', 'text', 'page_path'],
  },
  {
    name: 'task_shortcut_click',
    category: '内容发现',
    purpose: '衡量搜索页任务快捷入口点击。',
    keyParams: ['task_title', 'href', 'source'],
  },
  {
    name: 'search_suggestion_click',
    category: '搜索发现',
    purpose: '衡量搜索页热门关键词是否帮助用户开始搜索。',
    keyParams: ['keyword', 'page_path'],
  },
  {
    name: 'listing_filter_change',
    category: '内容发现',
    purpose: '衡量栏目页筛选功能使用情况。',
    keyParams: ['query', 'category', 'tag', 'visible_count', 'page_path'],
  },
];

export const heatScoreWeights = [
  { metric: 'prompt_copy', label: 'Prompt 复制', weight: 3, reason: '表示用户真正拿去使用。' },
  { metric: 'code_copy', label: '代码 / 模板复制', weight: 2, reason: '表示文章具备实操价值。' },
  { metric: 'article_feedback_click:useful', label: '有用反馈', weight: 2, reason: '表示内容质量得到确认。' },
  { metric: 'task_finder_click', label: '任务页点击', weight: 2, reason: '表示内容在任务路径中被选择。' },
  { metric: 'article_feedback_click:outdated', label: '催更 / 过时', weight: -2, reason: '表示需要优先维护。' },
  { metric: 'article_feedback_click:not-useful', label: '没帮助', weight: -2, reason: '表示内容质量或匹配度不足。' },
];

export const recommendedFunnels = [
  {
    name: '首页 Prompt 快速使用',
    steps: ['进入首页', '点击快速预览 prompt_preview_open', '复制 Prompt prompt_copy', '进入完整教程'],
  },
  {
    name: '任务发现路径',
    steps: ['进入 /tasks/', '点击任务推荐 task_finder_click', '阅读文章', '复制代码或 Prompt code_copy'],
  },
  {
    name: '反馈与催更路径',
    steps: ['阅读文章', '点击反馈 article_feedback_click', '进入 /feedback/', '生成反馈邮件 feedback_mailto_submit'],
  },
  {
    name: '社区投稿路径',
    steps: ['点击 Submit', '填写投稿页', '生成投稿邮件 submit_prompt_mailto'],
  },
];
