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
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
      },
    },
  },
  server: {
    port: 5004,
  },
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    federation({
      name: "host",
      filename: "host.js",
      exposes: {},
      remotes: {
        remoteComponent1: {
          external: `Promise.resolve('http://localhost:5005/assets/remote-component.js')`,
          externalType: "promise",
        },
      },
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
