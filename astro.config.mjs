import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // site e base vengono passati dal workflow GitHub Actions via --site e --base
  // in locale non servono, le immagini funzionano su http://localhost:4321/
  site: 'https://torac96.github.io',
  output: 'static',
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
