import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.PUBLIC_SITE_URL || "https://example.com";
const base = process.env.PUBLIC_BASE_PATH || "/";

export default defineConfig({
  site,
  base,
  output: "static",
  outDir: "./dist",
  compressHTML: true,
  integrations: [sitemap()],
  vite: {
    build: {
      cssCodeSplit: true,
      sourcemap: false
    }
  }
});
