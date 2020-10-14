import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VLibras from '../vue-vlibras'

Vue.config.productionTip = false
Vue.use(VLibras)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
