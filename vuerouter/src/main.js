import Vue from "vue"
import router from "./router"
import Vuex from "vuex"
import store from "./store"
// import Stade from "./components/vuex.vue"
Vue.use(Vuex)
router.beforeEach((to,from,next)=>{
  console.log(to.matched.length)
  if(to.matched.length===0){
  // if(to.fullPath=="/"){
    console.log(from.name)
    from.name?next({name:from.name}):next("/404")
    // from.name?next({name:from.name}):next("/404")
  }else{
    next();
  }
  // next();
})
router.afterEach((to,from)=>{

})
new Vue({
  el:"#app",
  router,
  store,
})