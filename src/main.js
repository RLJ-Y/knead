import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
 // import router from './router'
 import store from './store'
import Tabbar from './components/tabbar/index.vue'
import Technician from './components/technician/index.vue'
import {jump} from 'utils/method.js'

Vue.component('Tabbar',Tabbar)
Vue.component('Technician',Technician)

// 如此配置即可
// uni.$u.config.unit = 'rpx'
Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$jump = jump

Vue.use(uView);
const app = new Vue({
  ...App,
  // router,
  store,
  beforeCreate() {
  	Vue.prototype.$bus = this
  }
})
app.$mount()
