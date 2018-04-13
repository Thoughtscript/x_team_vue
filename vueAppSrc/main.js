import Vue from 'vue'
import { router } from './Router'
import App from './App.vue'

const assembledApp = new Vue({
  router,
  render: createElement => createElement(App)
})

assembledApp.$mount('#vueApp')