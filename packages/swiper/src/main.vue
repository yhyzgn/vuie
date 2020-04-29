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
      slideName: 'forward'
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
      if (position === this.actived) {
        return
      }
      this.slideName = position > this.actived ? 'forward' : 'backward'
      this.actived = position
      this.$emit('changed', this.actived)
    }
  }
}
</script>

<style lang="less" scoped>
.vuie-swiper-container {
  @duration: 0.3s;

  background: gray;
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
    .forward-enter,
    .backward-leave-to {
      transform: translateX(100%);
    }
    .forward-leave-to,
    .backward-enter {
      transform: translateX(-100%);
    }
    .forward-enter-active {
      animation: slide-in-right @duration ease;
    }

    .forward-leave-active {
      animation: slide-out-left @duration ease;
    }

    .backward-enter-active {
      animation: slide-in-left @duration ease;
    }

    .backward-leave-active {
      animation: slide-out-right @duration ease;
    }
  }
}

@keyframes slide-in-right {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@-webkit-keyframes slide-in-right {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slide-in-left {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@-webkit-keyframes slide-in-left {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slide-out-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@-webkit-keyframes slide-out-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes slide-out-right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

@-webkit-keyframes slide-out-right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>