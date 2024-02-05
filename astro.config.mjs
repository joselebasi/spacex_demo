import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://joselebasi.github.io',
  base: '/spacex_demo',
  integrations: [tailwind(), preact()],
  output: 'server'
});