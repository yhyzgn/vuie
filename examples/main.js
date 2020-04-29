import Vue from 'vue'
import App from './App.vue'

import Vuie from 'vuie'

Vue.use(Vuie)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
