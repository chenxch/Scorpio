import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Login from './Login.vue'
Vue.config.productionTip = false

// element-ui使用
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#login',
  components: {
    Login
  },
  template: '<Login/>'
})