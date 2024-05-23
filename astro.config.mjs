import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://capable-dusk-c61e87.netlify.app",
  integrations: [preact()]
});