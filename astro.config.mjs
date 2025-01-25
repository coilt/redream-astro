import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import tunnel from "astro-tunnel";
import lenis from "astro-lenis";

export default defineConfig({
  integrations: [tailwind(), lenis(), tunnel()],
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

    server: {
      headers: {
        "Content-Security-Policy":
          "frame-src 'self' https://player.vimeo.com https://*.vimeo.com https://www.youtube.com https://*.youtube.com;",
      },
    },
  },
});
