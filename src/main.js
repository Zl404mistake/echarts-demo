import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as echarts from 'echarts'
import './assets/css/global.css'
import china from '../src/js/china'
echarts.registerMap('china', china)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
