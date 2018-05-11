<template>
  <div class="laypage_main laypageskin_default">
    <a href="javascript:;" class="laypage_prev" v-if="cur > 1 && prev" @click.prevent="changePage(cur - 1)">{{prev}}</a>
    <a href="javascript:;" class="laypage_first" @click.prevent="changePage(1)" v-if="first && pagesNumber[0] > 1">{{first}}</a>
    <a href="javascript:;" v-for="(page, index) in pagesNumber" :key="index" :style="[page === cur ? {color: '#fff', backgroundColor: skin, borderColor: skin} : '']" @click.prevent="changePage(page)">{{ page }}</a>
    <a href="javascript:;" class="laypage_last" @click.prevent="changePage(pages)" v-if="last && pagesNumber[0] <= pages - groups">{{last}}</a>
    <a href="javascript:;" class="laypage_next" @click.prevent="changePage(cur + 1)" v-if="cur < pages && next">{{next}}</a>
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
      jumpPage: ''
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
    }
  },
  computed: {
    pagesNumber() {
      let from
      let to
      const diff = (this.groups - 1) / 2

      if (this.groups > this.pages) {
        throw new Error('groups can not greater than pages')
      }

      if (this.diff % 2 === 0) {
        from = this.cur - diff
        to = this.cur + diff
      } else {
        from = this.cur - Math.floor(diff)
        to = this.cur + Math.ceil(diff)
      }

      if (from < 1) {
        from = 1
        to = this.groups
      }

      if (to >= this.pages) {
        to = this.pages
        from = to - this.groups + 1
      }

      const pagesArr = []

      while (from <= to) {
        pagesArr.push(from)
        from++
      }

      return pagesArr
    }
  },
  methods: {
    changePage(page) {
      if (page > this.pages) return
      this.cur = page
      this.$emit('jump', page)
    },
    jumpFunc() {
      if (!this.jumpPage) return
      this.changePage(parseInt(this.jumpPage, 10))
      this.jumpPage = ''
    }
  }
}
</script>

<style scoped>
.laypage_main a,
.laypage_main input,
.laypage_main span {
  height: 26px;
  line-height: 26px;
}
.laypage_main button,
.laypage_main input,
.laypageskin_default a {
  border: 1px solid #ccc;
  background-color: #fff;
}
.laypage_main {
  font-size: 0;
  clear: both;
  color: #666;
}
.laypage_main * {
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
}
.laypage_main a {
  text-decoration: none;
  color: #666;
}
.laypage_main a,
.laypage_main span {
  margin: 0 3px 6px;
  padding: 0 10px;
}
.laypage_main input {
  width: 40px;
  margin: 0 5px;
  padding: 0 5px;
}
.laypage_main button {
  height: 28px;
  line-height: 28px;
  margin-left: 5px;
  padding: 0 10px;
  color: #666;
}
</style>

