import Vue from 'vue'
import Router from 'vue-router'
import App from './app'

import WingKin from '../wing-kin/index'

Vue.use(WingKin)
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: 'quick',
      name: 'quick_path',
      component: () => import( /* webpackChunkName: "quick" */ './views/quick')
    },
    {
      path: '/',
      name: 'button_path',
      component: () => import( /* webpackChunkName: "button" */ './views/components/button')
    },
  ]
})

new Vue({
  router,
  render: v => v(App)
}).$mount('#app')
