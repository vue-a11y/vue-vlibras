import buble from '@rollup/plugin-buble'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { eslint } from 'rollup-plugin-eslint'
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/index.js',
  plugins: [
    resolve(),
    eslint({ include: './src/**' }),
    vue({
      css: true,
      compileTemplate: true
    }),
    buble(),
    commonjs()
  ],
  output: [
    {
      name: 'VLibras',
      file: 'demo/vue-vlibras.js',
      format: 'esm',
      exports: 'named'
    }
  ]
}
