# vlibras

Componente Vue.js que ajuda você a implementar o VLibras no seu site.

Demo: [https://vue-vlibras.web.app](https://vue-vlibras.web.app)

Esse componente segue os padrões fornecidos na [documentação do VLibras](https://www.vlibras.gov.br/doc/widget/index.html).

> Os surdos enfrentam bastante dificuldade para ler, escrever e se comunicar na língua oral do seu país. Dessa forma, para tentar reduzir esses problemas, o objetivo da ferramenta computacional de código aberto, denominada VLibras Widget, consiste em traduzir conteúdos do Português Brasileiro para a Língua Brasileira de Sinais (LIBRAS), tornando websites acessíveis a pessoas surdas. -- [Visão geral VLibras](https://www.vlibras.gov.br/doc/widget/introduction/overview.html)

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
No seu `App.vue`

```vue
<template>
  <VLibras 
    :position="'left'" 
    :avatar="'random'" 
    :opacity="1.0" 
  />
</template>
```

### Props

O componente `VLibras` suporta as seguintes props para personalização:

- **src**: URL do script do VLibras. Padrão: `https://vlibras.gov.br/app/vlibras-plugin.js`
- **urlWidget**: URL base do widget VLibras. Padrão: `https://vlibras.gov.br/app`
- **position**: Define a posição do widget na tela. Valores suportados:
  - `'left'`, `'right'`, `'bottom'`, `'top'`, `'bottom-left'`, `'top-left'`, `'bottom-right'`, `'top-right'`
  - Padrão: `'bottom-right'`
- **avatar**: Escolha do avatar a ser exibido no widget. Valores suportados:
  - `'icaro'`, `'hosana'`, `'guga'`, `'random'`
  - Padrão: `'random'`
- **opacity**: Define a opacidade do widget. Valores entre 0 (totalmente transparente) e 1 (totalmente opaco).
  - Padrão: `1.0`

### Suporte para Vue 2

Se você está utilizando Vue 2 em seus projetos, também pode integrar facilmente o VLibras! A versão específica para Vue 2 do componente está disponível [aqui](https://github.com/vue-a11y/vue-vlibras/tree/vue-2), mantendo a mesma funcionalidade e acessibilidade que a versão para Vue 3.

Confira o repositório no GitHub para mais detalhes e instruções sobre como integrar o VLibras no seu projeto Vue 2!

## Contribuindo

- De erros de digitação na documentação à codificação de novos recursos;
- Verifique os issues em aberto ou abra um novo issue para iniciar uma discussão sobre sua ideia de recurso ou o bug que você encontrou;
- Dê um fork no repositório, faça as alterações e envie um PR;

Nos siga no Twitter [@vue_a11y](https://twitter.com/vue_a11y)

**Obrigado por usar e fazer a web mais acessível!**