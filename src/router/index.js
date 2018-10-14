import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/common/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout
    }
  ]
})
