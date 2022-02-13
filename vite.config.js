import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'//一樣先引入套件
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    WindiCSS(), 
    Components({ 
      resolvers: IconsResolver({
        prefix: 'icon'  // 可以為 icon component加上前贅字來區分元件
      })
     }),
     Icons()
    ]
})
