import Tabs from './src/main'

Tabs.install = function (Vue) {
  if (Tabs.installed) {
    return
  }
  Tabs.installed = true
  Vue.component(Tabs.name, Tabs)
}

export default Tabs