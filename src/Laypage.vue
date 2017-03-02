<template>
  <div class="laypage_main laypageskin_default">
    <a href="javascript:;" class="laypage_prev" v-if="cur > 1 && prev" v-on:click.prevent="changePage(cur - 1)">{{prev}}</a>
    <a href="javascript:;" class="laypage_first" v-on:click.prevent="changePage(1)" v-if="first && pagesNumber[0] > 1">{{first}}</a>
    <a href="javascript:;" v-for="page in pagesNumber" :style="[page === cur ? {color: '#fff', backgroundColor: skin} : '']" v-on:click.prevent="changePage(page)">{{ page }}</a>
    <a href="javascript:;" class="laypage_last" v-on:click.prevent="changePage(pages)" v-if="last && pagesNumber[0] <= pages - groups">{{last}}</a>
    <a href="javascript:;" class="laypage_next" v-on:click.prevent="changePage(cur + 1)" v-if="cur < pages && next">{{next}}</a>
    <span class="laypage_total" v-if="skip">
      <label>到第</label>
      <input type="number" min="1" onkeyup="this.value=this.value.replace(/\D/, '');" class="laypage_skip" v-model="jumpPage">
      <label>页</label>
      <button type="button" class="laypage_btn" @click="jumpFunc">确定</button>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'laypage',
    data() {
      return {
        cur: 1,
        jumpPage: '',
      }
    },
    props: {
      pages: {
        required: true,
        type: Number
      },
      groups: {
        type: Number,
        default: 5
      },
      skin: {
        type: String,
        default: '#42b983'
      },
      first: {
        type: [String, Number, Boolean],
        default: '首页'
      },
      last: {
        type: [String, Number, Boolean],
        default: '尾页'
      },
      prev: {
        type: [String, Boolean],
        default: '上一页'
      },
      next: {
        type: [String, Boolean],
        default: '下一页'
      },
      skip: {
        type: Boolean,
        default: false
      },
      jump: {
        type: Function
      }
    },
    computed: {
      pagesNumber() {
        let from, to;
        let diff = (this.groups - 1) / 2;
        if (this.diff % 2 === 0) {
          from = this.cur - diff;
          to = this.cur + diff;
        } else {
          from = this.cur - Math.floor(diff);
          to = this.cur + Math.ceil(diff);
        }

        if (from < 1) {
          from = 1;
          to = this.groups;
        }

        if (to >= this.pages) {
          to = this.pages;
          from = to - this.groups + 1;
        }

        let pagesArr = [];

        while (from <= to) {
          pagesArr.push(from);
          from++;
        }

        return pagesArr;
      }
    },
    methods: {
      changePage(page) {
        this.cur = page;
        this.jump(page);
      },
      jumpFunc() {
        if (!this.jumpPage) {
          return;
        }
        this.changePage(parseInt(this.jumpPage));
        this.jumpPage = '';
      }
    }
  }

</script>

<style>
  @import "./laypage.css";
</style>
