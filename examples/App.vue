<template>
  <div id="app">
    <!-- <ExTabs></ExTabs> -->
    <!-- <ExSwiper></ExSwiper> -->
    <ExTabLayout></ExTabLayout>
  </div>
</template>

<script>
import ExSwiper from 'exps/components/Swiper'
import ExTabs from 'exps/components/Tabs'
import ExTabLayout from 'exps/components/TabLayout'

export default {
  name: 'App',
  components: { ExSwiper, ExTabs, ExTabLayout },
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
