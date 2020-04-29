import Swiper from './src/main'

Swiper.install = (Vue) => {
  if (Swiper.installed) {
    return
  }
  Swiper.installed = true
  Vue.component(Swiper.name, Swiper)
}

export default Swiper