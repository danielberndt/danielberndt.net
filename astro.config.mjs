import {defineConfig} from "astro/config";
import {vanillaExtractPlugin} from "@vanilla-extract/vite-plugin";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.danielberndt.net",
  experimental: {
    assets: true,
  },
  image: {
    service: "astro/assets/services/sharp",
  },
  trailingSlash: "always",
  integrations: [preact(), mdx(), sitemap()],
  vite: {
    plugins: [vanillaExtractPlugin()],
    build: {
      cssCodeSplit: false,
    },
  },
});
