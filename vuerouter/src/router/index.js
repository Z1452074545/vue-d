import Vue from "vue"
import Router from "vue-router"
import Home from "../components/home"
import First from "../components/first"
import New from "../components/new"
import Chard from "../components/chard"
import Sy1 from "../components/sy1"
import Sy_sy from "../components/sy_sy"
import Fss from "../components/404"
import Left from "../components/left"
import Right from "../components/right"
import Vuex from "../components/vuex"
Vue.use(Router)
export default new Router({
  mode:"history",    //hash(#)  history
  base:__dirname,           //base定义基本路径   
  routes:[ //配置路由全局
    {
      path:"/",
      name:"home",
      component:Home
    },
    {
      path:"/first",
      name:"first",
      components:{
        default:First,
        left:Left,
        right:Right
      },
        
        
     
      children:[
        {
          path:"/first/sy1",
          name:"sy1",
          component:Sy1,
          children:[
            {
              path:"/first/sy1/sy_sy",
              name:"sy1",
              component:Sy_sy,
            }
          ]
        }
      ]
    },
    {
      path:"/new",
      name:"new",
      component:New
    },
    {
      path:"/chard",
      name:"chard",
      component:Chard,
      alias:"/msg"
    },
    {
      path:"/404",
      name:"fss",
      component:Fss,
    },
    {
      path:"/vuex",
      name:"vuex",
      component:Vuex,
    },
    // {
    //   // 路由重定向
    //   path:"*",
    //   // redirect:{name:"first"}

    //   // redirect:(to)=>{
    //   //   return "/"
    //   // }

    //   redirect:{path:'/'}
    // }
  ]
})