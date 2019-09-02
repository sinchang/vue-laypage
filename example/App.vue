<template>
  <div>
    <laypage :pages="50" @jump="cb" :groups="5" class="laypage"></laypage>
    <input type="text" v-model="page">
    <laypage :pages="50" @jump="cb" :groups="5" skip="skip" class="laypage"></laypage>
    <laypage :pages="50" @jump="cb" :groups="5" :skin="skin" class="laypage"></laypage>
    <laypage :pages="50" @jump="cb" :groups="5" :first="first" :last="last" class="laypage"></laypage>
    <laypage :pages="50" @jump="cb" :groups="5" :prev="prev" :next="next" class="laypage"></laypage>
    <laypage :pages="50" @jump="cb" :groups="0" class="laypage"></laypage>
    <a href="https://github.com/sinchang/vue-laypage/blob/master/example/App.vue" target="_blank">source code</a>
  </div>
</template>

<script>
  // import Laypage from '../src/Laypage.vue'
  export default {
    name: 'app',
    data() {
      return {
        page: '1',
        skip: true,
        skin: '#4078c0',
        first: false,
        last: false,
        prev: false,
        next: false
      }
    },
    methods: {
      cb(page) {
        this.page = page
      }
    },
    // components: {
    //   Laypage
    // }
  }
</script>

<style>
  .laypage {
    margin: 20px 0;
  }
</style>
