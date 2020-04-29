<template>
  <div id="app">
    <swiper></swiper>
  </div>
</template>

<script>
import Swiper from '#/Swiper'

export default {
  name: 'App',
  components: { Swiper }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
body {
  width: 100vw;
  height: 100vh;
  background: white;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
