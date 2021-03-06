import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import home from '@/pages/home'
import wish from '@/pages/wish'
import prize from '@/pages/prize'
import user from '@/pages/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/wish',
      name: 'wish',
      component: wish
    },
    {
      path: '/prize',
      name: 'prize',
      component: prize
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})
