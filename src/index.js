import './style/less/index.less'

import Swiper from '@/swiper'
import Tabs from '@/tabs'
import TabLayout from '@/tab-layout'

const components = [
  Swiper,
  Tabs,
  TabLayout
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.0.0',
  install,
  ...components
}