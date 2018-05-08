// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {axios,http,httpl} from './http'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/font/iconfont.css'

Vue.config.productionTip = false

Vue.use(ElementUI);

//封装axios
Vue.prototype.$axios = axios;
Vue.prototype.$http = http;
Vue.prototype.$httpl = httpl;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
