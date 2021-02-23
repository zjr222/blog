import Vue from 'vue'
import App from './App'
import router from './routers'
import ElementUI from 'element-ui'
import mavonEditor from 'mavon-editor'
import animated from 'animate.css'
import Educodes from 'educodes-ui'
import $ from 'jquery';
import axios from './request/axios'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'
import 'mavon-editor/dist/css/index.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/reset.css'
import '@/assets/css/main.css'
// import store from '@/package/store'
Vue.prototype.$axios = axios;


Vue.use(VueFullPage);
Vue.use(ElementUI);
Vue.use(mavonEditor);
Vue.use(animated);
Vue.use(Educodes);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  mode: history,
  router,
  // store,
  components: {
    App
  },
  template: '<App/>'
})
