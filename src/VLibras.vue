<template>
  <!-- Doc: https://www.vlibras.gov.br/doc/widget/installation/webpageintegration.html -->
  <div vw class="enabled">
    <div vw-access-button class="active" />
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper" />
    </div>
  </div>
</template>

<script setup>
const name = "VLibras"
let script = ref()

const props = defineProps({
  src: {
    type: String,
    default: 'https://vlibras.gov.br/app/vlibras-plugin.js'
  },
  urlWidget: {
    type: String,
    default: 'https://vlibras.gov.br/app'
  }
});

function init () {
  script = document.createElement('script')
  script.addEventListener('load', createWidget)
  script.src = props.src
  document.querySelector('body').appendChild(script)
}

function createWidget () {
  script.removeEventListener('load', createWidget)
  // eslint-disable-next-line
  new window.VLibras.Widget(props.urlWidget)
}

init()
</script>
