import pkg from '../../package.json';
const appVersion = pkg.version;
const vueVersion = pkg.dependencies.vue.replace('^', '');

export const configApp = {
  name: '@vue-a11y/vlibras',
  npm: 'https://www.npmjs.com/package/@vue-a11y/vlibras',
  github: 'https://github.com/vue-a11y/vue-vlibras',
  author: 'Vue a11y',
  appVersion,
  vueVersion,
  stepsInstall: [
    {
      name: 'Install',
      language: 'bash',
      content: 'npm install vue-a11y/vlibras',
    },
    {
      name: 'Import in app',
      language: 'tsx',
      content: `import { createApp } from 'vue'
import App from './App.vue'
import VLibras from '@vue-a11y/vlibras'

createApp(App)
  .use(VLibras)
  .mount('#app')`,
    },
    {
      name: 'Usage component',
      language: 'tsx',
      content: `<VLibras />`,
    },
  ],
}