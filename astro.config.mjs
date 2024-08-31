import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://6gh.dev",
  integrations: [tailwind(), icon({
    include: {
      mdi: ["*"]
    }
  }), partytown(), sitemap(), mdx()]
});