import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Login from './Login.vue'
// import axios from 'axios'
import lodash from 'lodash'
import md5 from 'js-md5'
import store from '../../store/index'
// Vue.prototype.axios = axios;
Vue.prototype.$lodash = lodash;
Vue.prototype.$md5 = md5;
Vue.config.productionTip = false

// element-ui使用
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#login',
  store,
  components: {
    Login
  },
  template: '<Login/>'
})