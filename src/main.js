// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store/index'
import Csshake from 'csshake'
import animate from 'animate.css'
import lodash from 'lodash'
import md5 from 'js-md5'

import "./assets/icon/iconfont.css";
import 'element-ui/lib/theme-chalk/index.css'
import {
  mapGetters
} from 'vuex';

Vue.prototype.$lodash = lodash;
Vue.prototype.$md5 = md5;
Vue.config.productionTip = false

// element-ui使用
Vue.use(ElementUI)
Vue.use(Csshake)
Vue.use(animate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  computed: { ...mapGetters(['stateUserName'])
  },
  created: function() {
    debugger;
    if (this.$store.state.stateUserName == '') {
      this.$router.push({
        path: 'login'
      });
    }
  },
  template: '<App/>'
})