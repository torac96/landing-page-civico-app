import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://torac96.github.io',
  base: '/landing-page-civico-app/',
  output: 'static',
  compressHTML: true,
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Use sharp for static image optimization
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
