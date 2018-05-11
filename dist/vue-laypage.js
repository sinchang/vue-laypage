/*!
 * vue-laypage v1.0.3
 * (c) 2017-present sinchang <sinchangwen@gmail.com>
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.vueLaypage = factory());
}(this, (function () { 'use strict';

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script = {
    name: 'laypage',
    data: function data() {
      return {
        cur: 1,
        jumpPage: ''
      };
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
      pagesNumber: function pagesNumber() {
        var from;
        var to;
        var diff = (this.groups - 1) / 2;

        if (this.groups > this.pages) {
          throw new Error('groups can not greater than pages');
        }

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

        var pagesArr = [];

        while (from <= to) {
          pagesArr.push(from);
          from++;
        }

        return pagesArr;
      }
    },
    methods: {
      changePage: function changePage(page) {
        if (page > this.pages) return;
        this.cur = page;
        this.$emit('jump', page);
      },
      jumpFunc: function jumpFunc() {
        if (!this.jumpPage) return;
        this.changePage(parseInt(this.jumpPage, 10));
        this.jumpPage = '';
      }
    }
  };

  /* script */
  var __vue_script__ = script;
  /* template */

  var __vue_render__ = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      staticClass: "laypage_main laypageskin_default"
    }, [_vm.cur > 1 && _vm.prev ? _c("a", {
      staticClass: "laypage_prev",
      attrs: {
        href: "javascript:;"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();

          _vm.changePage(_vm.cur - 1);
        }
      }
    }, [_vm._v(_vm._s(_vm.prev))]) : _vm._e(), _vm._v(" "), _vm.first && _vm.pagesNumber[0] > 1 ? _c("a", {
      staticClass: "laypage_first",
      attrs: {
        href: "javascript:;"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();

          _vm.changePage(1);
        }
      }
    }, [_vm._v(_vm._s(_vm.first))]) : _vm._e(), _vm._v(" "), _vm._l(_vm.pagesNumber, function (page, index) {
      return _c("a", {
        key: index,
        style: [page === _vm.cur ? {
          color: "#fff",
          backgroundColor: _vm.skin,
          borderColor: _vm.skin
        } : ""],
        attrs: {
          href: "javascript:;"
        },
        on: {
          click: function click($event) {
            $event.preventDefault();

            _vm.changePage(page);
          }
        }
      }, [_vm._v(_vm._s(page))]);
    }), _vm._v(" "), _vm.last && _vm.pagesNumber[0] <= _vm.pages - _vm.groups ? _c("a", {
      staticClass: "laypage_last",
      attrs: {
        href: "javascript:;"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();

          _vm.changePage(_vm.pages);
        }
      }
    }, [_vm._v(_vm._s(_vm.last))]) : _vm._e(), _vm._v(" "), _vm.cur < _vm.pages && _vm.next ? _c("a", {
      staticClass: "laypage_next",
      attrs: {
        href: "javascript:;"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();

          _vm.changePage(_vm.cur + 1);
        }
      }
    }, [_vm._v(_vm._s(_vm.next))]) : _vm._e(), _vm._v(" "), _vm.skip ? _c("span", {
      staticClass: "laypage_total"
    }, [_c("label", [_vm._v("到第")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.jumpPage,
        expression: "jumpPage"
      }],
      staticClass: "laypage_skip",
      attrs: {
        type: "number",
        min: "1",
        onkeyup: "this.value=this.value.replace(/\\D/, '');"
      },
      domProps: {
        value: _vm.jumpPage
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) {
            return;
          }

          _vm.jumpPage = $event.target.value;
        }
      }
    }), _vm._v(" "), _c("label", [_vm._v("页")]), _vm._v(" "), _c("button", {
      staticClass: "laypage_btn",
      attrs: {
        type: "button"
      },
      on: {
        click: _vm.jumpFunc
      }
    }, [_vm._v("确定")])]) : _vm._e()], 2);
  };

  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  var __vue_template__ = typeof __vue_render__ !== 'undefined' ? {
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
  } : {};
  /* style */


  var __vue_inject_styles__ = function (inject) {
    if (!inject) return;
    inject("data-v-80c502c2_0", {
      source: "/*!\n laypage默认样式\n*/\n.laypage_main a,.laypage_main input,.laypage_main span{height:26px;line-height:26px\n}\n.laypage_main button,.laypage_main input,.laypageskin_default a{border:1px solid #ccc;background-color:#fff\n}\n.laypage_main{font-size:0;clear:both;color:#666\n}\n.laypage_main *{display:inline-block;vertical-align:top;font-size:12px\n}\n.laypage_main a{text-decoration:none;color:#666\n}\n.laypage_main a,.laypage_main span{margin:0 3px 6px;padding:0 10px\n}\n.laypage_main input{width:40px;margin:0 5px;padding:0 5px\n}\n.laypage_main button{height:28px;line-height:28px;margin-left:5px;padding:0 10px;color:#666\n}\n",
      map: undefined,
      media: undefined
    });
  };
  /* scoped */


  var __vue_scope_id__ = undefined;
  /* module identifier */


  var __vue_module_identifier__ = undefined;
  /* functional template */


  var __vue_is_functional_template__ = false;
  /* component normalizer */

  function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = script$$1 || {};

    {
      component.__file = "/Users/sinchang/gpm/github.com/sinchang/vue-laypage/src/Laypage.vue";
    }

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      var hook;

      if (style) {
        hook = function hook(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;

          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component;
  }
  /* style inject */


  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = {};
    var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = {
        ids: [],
        parts: [],
        element: undefined
      });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;
        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';
          if (css.media) el.setAttribute('media', css.media);

          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
        }
      }
    };
  }
  /* style inject SSR */


  var Laypage = __vue_normalize__(__vue_template__, __vue_inject_styles__, typeof __vue_script__ === 'undefined' ? {} : __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, typeof __vue_create_injector__ !== 'undefined' ? __vue_create_injector__ : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

  Laypage.install = function (Vue) {
    Vue.component(Laypage.name, Laypage);
  };

  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Laypage);
  }

  return Laypage;

})));
