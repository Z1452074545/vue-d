import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login'
import Home from '../page/hoem'
import User from '../page/user'
import Students from '../page/student'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path:'/user',
      name:'user',
      component:User
    },
    {
      path:'/student',
      name:'student',
      component:Students
    }
  ]
})
