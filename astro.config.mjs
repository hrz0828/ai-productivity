import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sts2hub.com',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
