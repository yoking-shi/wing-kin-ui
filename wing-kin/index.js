import 'normalize.css/normalize.css'
import './styles/wing-kin.scss'
import { Button } from './components/button'

window.document.addEventListener('touchstart', function () {
  /* params : event  */

  /* Do Nothing */
}, false)

const install = function (Vue) {
  Vue.component(Button.name, Button)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
