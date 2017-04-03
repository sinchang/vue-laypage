import Laypage from './Laypage.vue'

Laypage.install = Vue => {
  Vue.component(Laypage.name, Laypage)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Laypage)
}

export default Laypage
