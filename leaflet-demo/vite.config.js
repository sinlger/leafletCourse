import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import {
  resolve
} from "path"
import autoprefixer from "autoprefixer"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src')
    }
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(), //css 添加前缀
      ]
    }
  },
  server: {
    proxy: {
      '/api': {
        target: "", //转发地址，目标地址
        changeOrigin: true, //是否跨域
        rewrite: (path) => path.replace(/^\/api/, "") //重写路径
      }
    }
  }
})