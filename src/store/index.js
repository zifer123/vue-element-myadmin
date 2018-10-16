import Vue from 'vue'
import Vuex from 'vuex'

if (process.env.NODE_ENV === 'development') {
  Vue.use(Vuex)
}

const state = {
  test: '我是测试的vuex'
}

const mutations = {
  changeTest (state, str) {
    state.test = str
  }
}

export default new Vuex.Store({
  state,
  mutations
})
