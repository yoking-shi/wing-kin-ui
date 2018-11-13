import Vue from 'vue'
import App from './app'

import WingKin from '../wing-kin/index'

Vue.use(WingKin)

new Vue({
  render: v => v(App)
}).$mount('#app')
