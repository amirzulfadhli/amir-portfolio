import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://amirzulfadhli.github.io',
  base: '/amir-portfolio',
  integrations: [tailwind()],
});
