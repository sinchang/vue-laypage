import Vue from 'vue'
import App from './App.vue'
import Laypage from '../dist/vue-laypage.js'

Vue.use(Laypage)

new Vue({
  el: '#app',
  render: h => h(App)
})
