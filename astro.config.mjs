// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://niranjanskulkarni.com',
  // base: '/niranjan_website/',  // Not needed with custom domain
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-IN',
          hi: 'hi-IN',
          mr: 'mr-IN'
        }
      },
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    })
  ]
});
