import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      rollupTypes: false,
      outDir: "dist",
      include: ["src/**/*.ts", "src/**/*.vue"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), 
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 自动给每个 scss 文件头部注入这一行
        // 注意：这里我们直接用绝对路径，防止别名解析问题
        additionalData: `@import "${path.resolve(__dirname, 'src/theme.scss').replace(/\\/g, '/')}";`
      },
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "SeeYouUI",
      fileName: "index",
    },
    rollupOptions: {
      external: ["vue", "@dcloudio/uni-app", "@dcloudio/uni-runtime"],

      output: {
        exports: "named",

        globals: {
          vue: "Vue",
          "@dcloudio/uni-app": "UniApp"
        },
      },
    },
    minify: false,
    outDir: "dist",
  },
});