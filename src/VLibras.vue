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
import { ref, onMounted } from 'vue';

const props = defineProps({
  src: {
    type: String,
    default: 'https://vlibras.gov.br/app/vlibras-plugin.js'
  },
  urlWidget: {
    type: String,
    default: 'https://vlibras.gov.br/app'
  },
  position: {
    type: String,
    default: 'right',
    validator: value => ['left', 'right', 'bottom', 'top', 'bottom-left', 'top-left', 'bottom-right', 'top-right'].includes(value)
  },
  avatar: {
    type: String,
    default: 'random',
    validator: value => ['icaro', 'hosana', 'guga', 'random'].includes(value)
  },
  opacity: {
    type: Number,
    default: 1.0,
    validator: value => value >= 0 && value <= 1
  }
});

const mapPosition = {
  'left': 'L',
  'right': 'R',
  'bottom': 'B',
  'top': 'T',
  'bottom-left': 'BL',
  'top-left': 'TL',
  'bottom-right': 'BR',
  'top-right': 'TR',
};

let script = ref(null);

function init() {
  script = document.createElement('script');
  script.addEventListener('load', createWidget);
  script.src = props.src;
  document.querySelector('body').appendChild(script);
}

function createWidget() {
  script.removeEventListener('load', createWidget);
  new window.VLibras.Widget({
    url: props.urlWidget,
    position: mapPosition[props.position],
    avatar: props.avatar,
    opacity: props.opacity,
  });
}

onMounted(() => {
  init();
});
</script>
