import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Demo from '@/components/demo/vuex'
// import Demo2 from '@/components/demo/vuex2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: require('../pages/index/Index.vue').default,
      children: [{
          path: '/',
          name: 'index',
          component: require('../components/HelloWorld.vue').default
        },
        {
          path: '/index/demo',
          name: 'demo',
          component: require('../components/demo/vuex.vue').default
        },
        {
          path: '/index/demo2',
          name: 'demo2',
          component: require('../components/demo/vuex2.vue').default
        },
        {
          path: '/index/memorandum',
          name: 'memorandum',
          component: require('../components/memorandum/memorandum.vue').default
        },
        {
          path: '/index/about',
          name: 'about',
          component: require('../components/about/about.vue').default
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: require('../pages/login/Login.vue').default
    }

  ]
})