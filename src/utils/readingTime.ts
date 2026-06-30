export function getReadingTime(text: string) {
  const chineseChars = text.match(/[一-龥]/g)?.length ?? 0;
  const words = text.replace(/[一-龥]/g, '').trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil((chineseChars / 450) + (words / 220)));
  return `${minutes} 分钟阅读`;
}
