import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
      },
    },
  },
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    federation({
      name: "remote-component-1",
      filename: "remote-component.js",
      exposes: {
        "./ExtComponent": "./src/components/ExampleComponent.vue",
      },
      remotes: {},
      shared: {
        vue: {
          eager: true,
          singleton: true,
        },
        vuetify: {
          eager: true,
          singleton: true,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
