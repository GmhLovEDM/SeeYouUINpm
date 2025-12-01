import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: "./",
      outDir: "dist/types",
      include: ["components", "index.ts"],
    }),
  ],
  build: {
    lib: {
      entry: "./index.ts",
      name: "see-u-ui",
      fileName: (format) => `index.${format}.js`, // 重点（避免 index.js 直接覆盖）
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./theme.scss";`,
      },
    },
  },
});
