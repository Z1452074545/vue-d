vue 
构建vue应用
npm install vue-cli -g
vue init webpack《template-name》 项目名 backStage  onecard
模板名：webpack pwa simple webpack-simple browerify browerify-simple 
cd 项目名
cnpm install 安装项目依赖
cnpm run dev 执行项目文件


依赖的环境：node=》npm

vue 的脚手架 =》搭建好的一个工程
   安装脚手架：cnpm install vue-cli -g
        查询：vue -V

npm install vue-resource --save    =  npm install axios -S
npm install axios --save-dev    =  npm install axios -D    安装项目依赖 npm install


npm install vuex --save




vue 是什么？  view 视图
是一套构建用户界面的渐进式框架,（渐进式：有底向上开发）     

vue的特点？
mvvm m:model 模型 v:view 视图 vm: 数据交互的过程   
简洁
组件化
模块化
双向数据绑定


vae的应用场景？ 
构建单页面应用


webpack hotupdate 热更新


index.html   main.js    idnex.js    app.vue    helloword.vue 

idex.html 主文件

指令:
v-model 双向数据绑定
v-for   循环
v-show  显示或隐藏
v-if  
v-else-if 
v-else
v-show和v-if的区别
  是否对dom节点进行删除操作 

v-on   事件

v-text 只解析文本

v-html 可解析标签

v-bind 动态绑定 class style href src


v-cloak 解决闪烁问题


组件：
全局组件
局部组件

父组件
子组件
兄弟组件

钩子函数

bind(){}
 只调用一次 当绑定元素时调用
inserted(){}
 数据插入时调用
updata(){}
 数据更新是调用
componentUpdataed(){}
unbind(){}
 只调用一次 解绑时调用

 input ref  v-modld  this.$refs.xx.value 


 数据交互
 npm install anywhere -g / live-server//本地服务器

 anywhere 


 get(){
   this.$http.get("url").then(res=>{

   })
   this.$http.post("url").then(function(){

   })
   this.$http.jsonp().then(function(){})
   this.$http({
     url:"/api/dsapi",
    method:"get",
    params:{
    file:"json",
    date:""
         }
   })
 }

<!-- 过滤器 -->
vuex 
 是什么？
   状态管理模式 state 状态 
    mutations 触发状态 getters 计算属性 actions 事件分发 module 模块管理
  状态的分类：
   组件内部的状态 只能在当前组件内部使用 data
   多个级别的应用状态 多个组件都可以使用
 应用场景   
   多个视图依赖同一状态
   多个视图要改变同一个状态
   import Vuex from "vuex"
   Vue.ues("Vuex")
   new Vuex.Store({
     stade:{

     },
     mutations:{
     }
   }) 




 