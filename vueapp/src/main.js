// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'   //相当于引入vue.js
// import App from './App'
// import Even from './even'
// import Tab from './tab'
// import Life from './life'
// import Filtar from './filtar'
// import Compo from './compo'
// import Dome1 from './dome1'
// import Directive from './directive'
// import Transition from './transition'
import Http from './http'
// import QqList from './qqList'
// import Select from './select'
import router from './router'



import VueResource from "vue-resource"   //vue1 暂停维护
import axios from "axios"         //vue2
Vue.use(VueResource)



// Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.filter("uppercase",function(val){
  console.log(arguments);
  return val.toUpperCase();
})
Vue.filter("cal",function(val,a,b){
  console.log(arguments);
  return val+a+b;
})
// 全局组件
let vm=new Vue();
Vue.component("custom",{
  template:`<div>我是全局组件(哥){{a}}{{datas}}{{ggs}}
  <customs 
   @data='get'></customs>
  </div>`,
  data(){
    return{
      a:"hhh",
      datas:'',
      ggs:'',
    }
  },
  methods:{
    get(val){
      this.datas=val;

    },
  },
  mounted(){
    // vm.$on("blur",function(ags){
    //   this.ggs=ags;
    // }.bind(this))
    vm.$on("blur",val=>{
      this.ggs=val;
    })
  }
})



Vue.component("customs",{
  props:["data"],
  template:`<div>我是全局组件{{data}}{{b}}
            <button @click="send">发送</button></div>`,
  data(){
    return{
       b:"hel agl",
    }
  },
  methods:{
    send(){
      this.$emit("data",this.b)
    }
  },
  // mounted(){
  //   this.$emit("data",this.b)
  // }
})

Vue.component("customs1",{
  template:`<div>我是弟{{b}}
            <button @click="di">发.送</button></div>`,
  data(){
    return{
       b:"老哥稳",
           }
       },
       methods:{
         di(){
          vm.$emit('blur',this.b)
          console.log(this.b)
         }
       }

})
 new Vue({
  el: '#app',  //挂载
  router,
  // components: { App },
  // components: { Even },
  // components: { Tab },
  // components: { Life },
  // components: { Filtar },
  // components: { Compo },
  // components: { Dome1 },
  // components: { Directive},
  // components: { Transition },
  components: { Http },
  // components: { QqList },
  // components: { Select },
  // template: '<App/>',
  // template: '<Even/>',
  // template: '<Tab/>',
  // template: '<Life/>',
  // template: '<Filtar/>',
  // template: '<Compo/>',
  // template: '<Dome1/>',
  // template: '<Directive/>',
  // template: '<Transition />',
  template: '<Http />',
  // template: '<QqList />',
  // template: '<Select />',
})
// }).$mount("#app")   el: '#app' 类似
