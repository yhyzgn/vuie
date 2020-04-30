<template>
  <div class="vuie-swiper-container">
    <ul ref="ul" class="swiper-sliders">
      <transition-group tag="ul" :name="slideName">
        <li
          class="swiper-slider"
          v-for="(item, index) in total"
          :key="item"
          v-show="index === actived"
        >
          <div class="slider">
            <slot class="slider-slot" name="slider" :index="index">no slot implementation</slot>
          </div>
        </li>
      </transition-group>
    </ul>
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
    width: 100%;
    height: 100%;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    .swiper-slider {
      width: 100%;
      height: 100%;
      position: absolute;
      list-style: none;
      .slider {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>