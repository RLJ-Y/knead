import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
Vue.use(uView);
// 如此配置即可
// uni.$u.config.unit = 'rpx'
 // import router from './router'
import {jump} from 'utils/method.js'
import API from '@/api' 
console.log(API)
// 任意组件可以使用API相关的接口
Vue.prototype.$API = API
App.mpType = 'app'
Vue.prototype.$jump = jump
import Tabbar from './components/tabbar/index.vue'
import Technician from './components/technician/index.vue'
Vue.component('Tabbar',Tabbar)
Vue.component('Technician',Technician)

import store from './store'
Vue.config.productionTip = false
const app = new Vue({
  ...App,
  // router,
  store,
  beforeCreate() {
  	Vue.prototype.$bus = this
  }
})
app.$mount()
