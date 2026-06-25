// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.digitalhype.online',
  output: 'static',
  trailingSlash: 'never',

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
    },
  },

  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [],
      serialize(item) {
        if (item.url === 'https://www.digitalhype.online/') item.priority = 1.0;
        if (item.url.includes('/lead-generation-for-')) item.changefreq = 'weekly';
        return item;
      },
    }),
  ],
});