import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import devtoolbarTailwind from "astro-devtoolbar-tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), devtoolbarTailwind()],
  prefetch: true
});