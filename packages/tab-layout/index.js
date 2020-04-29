import TabLayout from './src/main'

TabLayout.install = (Vue) => {
  if (TabLayout.installed) {
    return
  }
  TabLayout.installed = true
  Vue.component(TabLayout.name, TabLayout)
}

export default TabLayout