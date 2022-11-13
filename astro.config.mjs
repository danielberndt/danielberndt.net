import {defineConfig} from "astro/config";
import {vanillaExtractPlugin} from "@vanilla-extract/vite-plugin";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

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
  output: "server",
  adapter: cloudflare(),
});
