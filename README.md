## vue-laypage

> A simple pagination component for Vue.js, Based on [layPage](http://laypage.layui.com/)

## Installation and Use

```
$ npm install vue-laypage --save
```

```
import Laypage from 'vue-laypage'
export default {
  components: {
    Laypage
  }
}
```

or

```
import Vue from 'vue'
import Laypage from 'vue-laypage'

Vue.use(Laypage)
```
## Props
| Name | Type | Description |
| --- | --- | --- |
| pages | Number | 总页数，必填 |
| groups | Number | 一组显示几页，默认为5 |
| prev | String, Number, Boolean | 上一页按钮的文字，false 不显示 |
| next | String, Number, Boolean | 下一页按钮的文字，false 不显示 |
| first | String, Number, Boolean | 首页按钮的文字，false 不显示 |
| last | String, Number, Boolean | 尾页按钮的文字，false 不显示 |
| skin | String | 按钮高亮的颜色，默认#42b983 |
| skip | Boolean | 是否显示跳转 |
| jump | Function | 触发分页后的回调，返回当前页 |

## LICENSE

MIT
