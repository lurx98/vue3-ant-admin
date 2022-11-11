import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import AutoImport from 'unplugin-auto-import/vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()]
    }),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      imports: ['vue', 'vue-router', 'pinia']
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹(路径为存放所有svg图标的文件夹不单个svg图标)
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    }),
    VueSetupExtend()
  ],
  resolve: {
    //设置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
      '*': path.resolve('')
    }
  },
  css: {
    preprocessorOptions: {
      // 全局样式引入
      scss: {
        additionalData: '@import "./src/styles/variables.scss";',
        javascriptEnabled: true
      }
    }
  }
})
