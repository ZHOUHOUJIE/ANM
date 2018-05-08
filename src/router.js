import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Home from '@/pages/Home'
import error from '@/pages/Error'

Vue.use(Router)

export default new Router({
  routes: [{
      path: "*",
      redirect: '/main/home'
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [{
        path: 'home',
        name: 'Home',
        component: Home
      }]
    },
    {
      path: 'error',
      name: 'Error',
      component: error
    }
  ]
})
