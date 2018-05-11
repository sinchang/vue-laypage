import Vue from 'vue'
import App from './App.vue'
import Laypage from '../src'

Vue.use(Laypage)

new Vue({
  el: '#app',
  render: h => h(App)
})
