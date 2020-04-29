<template>
  <div class="example-tabs-container">
    <tabs :tabs="tabs"></tabs>
  </div>
</template>

<script>
export default {
  name: 'ExTabs',
  data (){
    return {
      tabs: ['首页', '新闻啊新闻啊新闻啊', '看日频道', '啊哈']
    }
  }
}
</script>