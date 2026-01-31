// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://yokozawa0701.github.io',
  base: '/iter-ly',
  vite: {
    plugins: [tailwindcss()],
  },
});
