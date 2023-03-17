// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue({ isProduction: true }),
    AutoImport({
      imports: ['vue']
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src'),
      name: 'VLibras',
      fileName: 'vue-vlibras'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})