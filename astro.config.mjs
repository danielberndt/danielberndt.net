import {defineConfig} from "astro/config";
import {vanillaExtractPlugin} from "@vanilla-extract/vite-plugin";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
