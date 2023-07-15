import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  define: {
    "process.env": {},
  },
  rollupOptions: {
    // 自定义 Rollup 配置
    plugins: [
      // 处理 CSS 文件的插件
      {
        name: "rollup-plugin-css-only",
        transform(code, id) {
          if (id.endsWith(".css")) {
            // 将 CSS 文件转换为 JS 模块导出
            const transformedCode = `export default ${JSON.stringify(code)};`;
            return {
              code: transformedCode,
              map: { mappings: "" },
            };
          }
        },
      },
    ],
  },
});
