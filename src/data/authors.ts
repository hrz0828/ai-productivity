export interface AuthorProfile {
  id: string;
  name: string;
  type: 'Person' | 'Organization';
  role: string;
  bio: string;
  url: string;
}

export const AUTHOR_PROFILES: Record<string, AuthorProfile> = {
  'ai-productivity': {
    id: 'ai-productivity',
    name: 'STS2Hub 编辑组',
    type: 'Organization',
    role: 'AI 工作流与内容站实践编辑',
    bio: '维护 STS2Hub 的 Prompt、Agent、自动化、SEO 和内容质量主题，使用 AI 辅助整理，并人工复核事实、边界、示例和可执行性。',
    url: '/about/',
  },
};

export function getAuthorProfile(id: string) {
  return AUTHOR_PROFILES[id] ?? {
    id,
    name: id,
    type: 'Organization' as const,
    role: '内容作者',
    bio: '负责本文内容整理、更新和人工复核。',
    url: '/about/',
  };
}
