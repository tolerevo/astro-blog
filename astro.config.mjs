import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://capable-dusk-c61e87.netlify.app",
  integrations: [preact(), sentry(), spotlightjs()]
});