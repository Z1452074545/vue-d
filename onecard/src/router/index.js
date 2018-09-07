import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Waiter from '../page/waiter'
import Column from '../page/column'
import User from '../page/user'
import Saoping from '../page/saoping'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/waiter',
      name: 'waiter',
      component: Waiter
    },
    {
      path: '/column',
      name: 'column',
      component: Column
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/saoping',
      name: 'saoping',
      component: Saoping
    },
  
  ]
})
