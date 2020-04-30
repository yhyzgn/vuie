<template>
  <div class="example-tab-layout-container">
    <div class="tab-layout">
      <tab-layout :tabs="tabs" :active="actived">
        <template v-slot:slider="slider">
          <div class="slider-item" :style="style(slider.index)">{{ slider.index }}</div>
        </template>
      </tab-layout>
    </div>
  </div>
</template>

<script>
const colors = ['red', 'orange', '#843900', 'green', '#5c7a29', 'blue', 'purple']

export default {
  name: 'ExTabLayout',
  data () {
    return {
      tabs: ['首页', '新闻页', '狗带地点'],
      actived: 0
    }
  },
  methods: {
    style (index) {
      return `background: ${colors[index]};`
    },
    onChanged (index) {
      this.actived = index
    }
  }
}
</script>

<style lang="less" scoped>
.example-tab-layout-container {
  width: 400px;
  height: 500px;
  .tab-layout {
    width: 100%;
    height: 100%;
    .pages {
      width: 100%;
      height: 100%;
      .swiper {
        width: 100%;
        height: 100%;
        .slider-item {
          width: 100%;
          height: 100%;
          color: white;
          text-align: center;
          vertical-align: middle;
          font-size: 4em;
        }
      }
    }
  }
}
</style>