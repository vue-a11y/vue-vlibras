import buble from '@rollup/plugin-buble'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'

export default commandLineArgs => {
  return {
    input: 'src/index.js',
    plugins: [
      resolve(),
      vue({
        css: true,
        compileTemplate: true,
        template: {
          isProduction: true,
          optimizeSSR: commandLineArgs.format === 'cjs'
        }
      }),
      buble(),
      commandLineArgs.format === 'iife' && terser(),
      commonjs()
    ],
    output: {
      name: 'VLibras',
      exports: 'named'
    }
  }
}
