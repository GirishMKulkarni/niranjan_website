// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://niranjanskulkarni.com',
  // base: '/niranjan_website/',  // Not needed with custom domain
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()]
});
