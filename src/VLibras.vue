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
      document.body.appendChild(script)
    },

    createWidget () {
      script.removeEventListener('load', this.createWidget)
      // eslint-disable-next-line
      new window.VLibras.Widget(this.urlWidget)
      this.observeDOMChanges()
    },

    generateUniqueKeyframeName (baseName) {
      return `${baseName}-${Math.random().toString(36).substring(2, 15)}`
    },

    updateKeyframeNameInStyles (oldName, newName) {
      document.querySelectorAll('style').forEach((styleTag) => {
        const containsOldName = new RegExp(`@keyframes\\s+${oldName}|\\b${oldName}\\b`, 'g').test(styleTag.textContent)

        if (this.containsVpOrVw(styleTag.textContent) && containsOldName) {
          const updatedContent = styleTag.textContent
            .replace(new RegExp(`@keyframes\\s+${oldName}`, 'g'), `@keyframes ${newName}`)
            .replace(new RegExp('(animation:\\s*[^;}]*?)(;|})', 'g'), (match) => {
              return match.replace(new RegExp(`\\b${oldName}\\b`, 'g'), newName)
            })
          styleTag.textContent = updatedContent
        }
      })
    },

    containsVpOrVw (selectorText) {
      return /\[vp\]|\[vw\]|\.vp|\.vw|\.vpw/.test(selectorText)
    },

    validationStyleSheet (node) {
      return (node.nodeName === 'STYLE' || (node.nodeName === 'LINK' && node.rel === 'stylesheet')) && node.sheet && node.sheet.cssRules
    },

    observeDOMChanges () {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (this.validationStyleSheet(node)) {
              Array.from(node.sheet.cssRules).forEach((rule) => {
                if (rule.type === CSSRule.KEYFRAMES_RULE) {
                  this.updateKeyframeNameInStyles(rule.name, this.generateUniqueKeyframeName(rule.name))
                }
              })
            }
          })
        })
      })

      observer.observe(document.head, { childList: true, subtree: true })
    }
  }
}
</script>
