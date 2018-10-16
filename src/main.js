// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 温馨提示， 为了打包让文件体积更小， 采用了cdn方式加载， 判断是否使用Vue.use
import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
import i18n from './lang'
import router from './router'
import store from './store'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
  require('element-ui/lib/theme-chalk/index.css')
  Vue.use(Element, {
    i18n: (key, value) => i18n.t(key, value)
  })
} else {
  // 生成环境
  Element.i18n((key, value) => i18n.t(key, value))
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
