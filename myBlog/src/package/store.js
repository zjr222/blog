import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../request/axios'

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    //任何组件共享的数据
    captcha: '',

  },
  mutations: {
    //通过外界的值来修改仓库内原有的值
    getVal() {
      
    },
    updateCaptcha(state, newVal) {
      state.captcha = newVal;
    }
  },
  actions: {
    //分发数据
    getCaptcha({
      commit
    }) {
      commit('updateCaptcha')
    },
    login(context) {
      console.log(context);
      // axios.get('/api/captcha')
    }
  }
})
