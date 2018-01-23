import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/components/demo/vuex'
import Demo2 from '@/components/demo/vuex2'

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
      component: Demo
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: Demo2
    }
  ]
})