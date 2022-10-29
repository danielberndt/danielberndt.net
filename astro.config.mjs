import {defineConfig} from "astro/config";
import {vanillaExtractPlugin} from "@vanilla-extract/vite-plugin";
import preact from "@astrojs/preact";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.danielberndt.net",
  trailingSlash: "always",
  integrations: [preact(), mdx(), sitemap()],
  vite: {
    plugins: [vanillaExtractPlugin()],
    build: {
      cssCodeSplit: false,
    },
  },
});
