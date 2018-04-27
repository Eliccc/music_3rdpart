import Vue from 'vue'
import App from './components/App.vue'
import store from './store/store.js'

// new Vue({
//     el: '#app',
//     render: h => h(App)
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})