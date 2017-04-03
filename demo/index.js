import Vue from 'vue'
import App from './App'
import Laypage from '../src/index'

Vue.use(Laypage)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

