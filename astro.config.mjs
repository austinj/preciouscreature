import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.preciouscreaturetaxidermy.com",
  integrations: [
    partytown({ config: { forward: ["dataLayer.push"] } }),
    sitemap(),
  ],

  output: "static",
  adapter: netlify(),
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
