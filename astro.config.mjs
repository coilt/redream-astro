import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import lenis from "astro-lenis";

export default defineConfig({
  integrations: [tailwind(), lenis()],
  vite: {
    build: {
      rollupOptions: {
        external: ["plyr"],
        output: {
          globals: {
            plyr: "Plyr",
          },
        },
      },
    },
    resolve: {
      alias: {
        "@styles": "/src/styles",
      },
    },
  },
});