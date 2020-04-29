<template>
  <div class="example-swiper-container">
    <swiper class="swiper" :total="total" :active="actived" @changed="onChanged">
      <template v-slot:slider="slider">
        <div class="slider-item" :style="style(slider.index)">{{ slider.index }}</div>
      </template>
    </swiper>
    <div class="operation">
      <div class="btn" @click="toLeft">向 左</div>
      <div class="btn" @click="toRight">向 右</div>
    </div>
  </div>
</template>

<script>
import swiper from '@/swiper'
const colors = ['red', 'orange', '#843900', 'green', '#5c7a29', 'blue', 'purple']

export default {
  name: 'Swiper',
  components: { swiper },
  data () {
    return {
      total: 7,
      actived: 0
    }
  },
  methods: {
    style (index) {
      return `background: ${colors[index]};`
    },
    onChanged (index) {
      this.actived = index
    },

    toLeft () {
      if (this.actived < this.total - 1) {
        this.actived = this.actived + 1
      }
    },

    toRight () {
      if (this.actived > 0) {
        this.actived = this.actived - 1
      }
    }
  }
}
</script>

<style lang="less" scoped>
.swiper {
  width: 400px;
  height: 300px;
  margin: 160px auto;
  .slider-item {
    width: 100%;
    height: 100%;
    color: white;
    text-align: center;
    vertical-align: middle;
    font-size: 4em;
  }
}
.operation {
  width: 240px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 40px auto;
  .btn {
    text-align: center;
    padding: 8px 24px;
    background: #1d953f;
    cursor: pointer;
    border-radius: 4px;
    color: white;
  }
  .btn:hover {
    background: #45b97c;
  }
}
</style>