import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";

export default defineConfig({
  base: "/cats_task/",
  plugins: [vue()],
  assetsInclude: ["**/*.ttf"],
});
