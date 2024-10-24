# vlibras
Componente Vue.js que ajuda você a implementar o VLibras no seu site.

Demo: https://vue-vlibras.web.app

Esse componente segue os padrões fornecidos na [documentação do vlibras](https://www.vlibras.gov.br/doc/widget/index.html).

> Os surdos enfrentam bastante dificuldade para ler, escrever e se comunicar na língua oral do seu país. Dessa forma, para tentar reduzir esses problemas, o objetivo da ferramenta computacional de código aberto, denominada VLibras Widget, consiste em traduzir conteúdos do Português Brasileiro para a Língua Brasileira de Sinais (LIBRAS), tornando websites acessíveis a pessoas surdas. -- [Visão geral vlibras](https://www.vlibras.gov.br/doc/widget/introduction/overview.html)

## Instalação

```shell
npm install -S @vue-a11y/vlibras@next
# or
yarn add @vue-a11y/vlibras@next
``` 

```js
import { createApp } from 'vue'
import App from './App.vue'
import VLibras from '@vue-a11y/vlibras'

createApp(App)
  .use(VLibras)
  .mount('#app')
```

## Como usar
No seu App.vue

```vue
<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <VLibras />
</template>
```

### Suporte para Vue 2

Se você está utilizando Vue 2 em seus projetos, também pode integrar facilmente o VLibras! A versão específica para Vue 2 do componente está disponível [aqui](https://github.com/vue-a11y/vue-vlibras/tree/vue-2), mantendo a mesma funcionalidade e acessibilidade que a versão para Vue 3.

Confira o repositório no GitHub para mais detalhes e instruções sobre como integrar o VLibras no seu projeto Vue 2!

## Contribuindo

- De erros de digitação na documentação à codificação de novos recursos;
- Verifique os issue em aberto ou abra um novo issue para iniciar uma discussão sobre sua ideia de recurso ou o bug que você encontrou;
- Dê um fork no repositório, fazendo as alterações e enviando um PR;

Nos siga no Twitter [@vue_a11y](https://twitter.com/vue_a11y)

**Obrigado por usar e fazer a web mais acessível**
