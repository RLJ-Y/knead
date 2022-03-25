import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import router from './router'
import Tabbar from './components/tabbar/index.vue'
import Technician from './components/technician/index.vue'

Vue.component('Tabbar',Tabbar)
Vue.component('Technician',Technician)
Vue.config.productionTip = false
// 如此配置即可
// uni.$u.config.unit = 'rpx'
Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(uView);
const app = new Vue({
  ...App,
  router,
  beforeCreate() {
  	Vue.prototype.$bus = this
  }
})
app.$mount()
