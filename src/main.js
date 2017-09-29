// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import store from './store'

// 用Vuex进行状态管理
Vue.use(Vuex);

// 用 axios 进行 Ajax 请求
Vue.use(VueAxios, axios);

// Vue.prototype.$http = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
