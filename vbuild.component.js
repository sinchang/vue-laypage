const ExtractTextPlugin = require("extract-text-webpack-plugin")
const path = require('path')

module.exports = {
  entry: 'src/index.js',
  // then user can access `window.vueLaypage` in browser as well
  moduleName: 'Laypage',
  html: false,
  minimize: false,
  sourceMap: false,
  filename: {
    js: 'vue-laypage.js'
  },
  extract: false,
  // this will not copy ./static/** to ./dist/**
  copy: false
}
