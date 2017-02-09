<template>
  <div>
    <laypage :pages="50" :jump="cb" :groups="8" class="laypage"></laypage>
    <input type="text" v-model="page">
    <laypage :pages="50" :jump="cb" :groups="5" skip="skip" class="laypage"></laypage>
    <laypage :pages="50" :jump="cb" :groups="8" skip="skip" :skin="skin" class="laypage"></laypage>
  </div>
</template>

<script>
  import Laypage from '../src/Laypage';

  export default {
    name: 'app',
    data() {
      return {
        page: '1',
        skip: true,
        skin: '#4078c0'
      }
    },
    components: {
      Laypage
    },
    methods: {
      cb(page) {
        this.page = page;
      }
    }
  }
</script>

<style>
  .laypage {
    margin: 20px 0;
  }
</style>
