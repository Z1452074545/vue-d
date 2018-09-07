import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Pf from '../components/pf'
import Fyq from '../components/fyq'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pf',
      name: 'pf',
      component: Pf
    },
    {
      path: '/fyq',
      name: 'fyq',
      component: Fyq
    }
  ]
})
