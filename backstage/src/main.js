// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import echarts from 'echarts'
import element from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'

Vue.use(element);

Vue.prototype.$echarts = echarts 

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
