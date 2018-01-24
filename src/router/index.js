import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Demo from '@/components/demo/vuex'
// import Demo2 from '@/components/demo/vuex2'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo',
      name: 'demo',
      component: require('../components/demo/vuex.vue').default
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: require('../components/demo/vuex2.vue').default
    },
    {
      path: '/memorandum',
      name: 'memorandum',
      component: require('../components/memorandum/memorandum.vue').default
    },
    {
      path: '/about',
      name: 'about',
      component: require('../components/about/about.vue').default
    }
  ]
})