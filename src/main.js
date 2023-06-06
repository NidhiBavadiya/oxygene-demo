import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'

Vue.config.productionTip = false

// import mixin file
require('./mixin/index');


// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/scss/style.scss'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
