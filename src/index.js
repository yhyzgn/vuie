import './style/less/index.less'

import dom from './dom'

import Swiper from '../packages/swiper'
import Tabs from '../packages/tabs'
import TabLayout from '../packages/tab-layout'

const components = [
  Swiper,
  Tabs,
  TabLayout
]

const install = function (Vue, opts = {}) {
  if (install.installed) {
    return
  }
  install.installed = true

  // dom
  Vue.prototype.$ = Vue.prototype.dom = dom

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
  Swiper,
  Tabs,
  TabLayout
}