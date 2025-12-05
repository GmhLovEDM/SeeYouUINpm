import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts"; // 刚才安装的自动生成类型插件
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
    // dts 插件配置：自动生成类型文件
    dts({
      // 输出目录，对应 package.json 的 types 字段
      outDir: "dist/types",
      // 是否生成 tsconfig 中的 .d.ts
      insertTypesEntry: true,
      // 指定 tsconfig 文件路径
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  resolve: {
    // 对应你 tsconfig 中的 paths: {"@/*": ["*"]}
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // ⚠️ 注意：这里假设你的变量文件在根目录的 uni.scss
        // 如果你的文件在 src/styles/vars.scss，请修改路径为 "@/src/styles/vars.scss"
        // 这里的 @ 对应 resolve.alias 中的配置
        additionalData: `@import "@/theme.scss";`,
      },
    },
  },
  build: {
    // 开启库模式
    lib: {
      // 入口文件：通常是 src/index.ts 或根目录下的 index.ts
      entry: path.resolve(__dirname, "index.ts"),
      // 库名称（用于 UMD/IIFE 全局变量）
      name: "MyLib",
      // 输出文件名格式
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // ⚠️ 关键：确保外部化处理那些你不想打包进库的依赖
      // 比如 vue, @dcloudio/* 等，让使用者自己的项目中去提供这些依赖
      external: ["vue", "@dcloudio/uni-app", "@dcloudio/uni-runtime"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
    // 输出目录
    outDir: "dist",
  },
});
