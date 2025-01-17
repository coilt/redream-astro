import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
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
