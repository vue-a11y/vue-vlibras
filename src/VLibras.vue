<template>
  <!-- Doc: https://www.vlibras.gov.br/doc/widget/installation/webpageintegration.html -->
  <div
    vw
    class="enabled"
  >
    <div
      vw-access-button
      class="active"
    />
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper" />
    </div>
  </div>
</template>

<script>
let script = null

export default {
  name: 'VLibras',

  props: {
    src: {
      type: String,
      default: 'https://vlibras.gov.br/app/vlibras-plugin.js'
    },

    urlWidget: {
      type: String,
      default: 'https://vlibras.gov.br/app'
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      script = document.createElement('script')
      script.addEventListener('load', this.createWidget)
      script.src = this.src
      document.querySelector('body').appendChild(script)
    },

    createWidget () {
      script.removeEventListener('load', this.createWidget)
      // eslint-disable-next-line
      new window.VLibras.Widget(this.urlWidget)
    }
  }
}
</script>
