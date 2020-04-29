<template>
  <div class="vuie-swiper-container" ref="vuie-swiper-container">
    <div class="swiper-sliders">
      <div class="swiper-slider" v-for="(item, index) in total" :key="index">
        <transition :name="slideName">
          <div class="slider-item" v-show="index === actived">
            <slot class="slider-slot" name="slider" :index="index">no slot implementation</slot>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    total: {
      type: Number,
      default: 0
    },
    active: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      actived: this.active,
      slideName: 'slide-in-left'
    }
  },
  watch: {
    active: function (val) {
      this.slideTo(val)
    }
  },
  mounted () {
    this.slideTo(this.actived)
  },
  methods: {
    slideTo (position) {
      this.slideName = position > this.actived ? 'slide-in-right' : 'slide-in-left'
      this.actived = position
      this.$emit('changed', this.actived)
    }
  }
}
</script>

<style lang="less" scoped>
.vuie-swiper-container {
  .swiper-sliders {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    .swiper-slider {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      .slider-item {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>