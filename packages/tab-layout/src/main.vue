<template>
  <div class="vuie-tab-layout-container">
    <div class="tab-layout">
      <div class="tabs">
        <tabs
          :tabs="tabs"
          :active="actived"
          :tabClass="tabClass"
          :indicatorHeight="indicatorHeight"
          :indicatorColor="indicatorColor"
          name="tab-layout"
          @changed="onChanged"
        ></tabs>
      </div>
      <div class="pages">
        <swiper class="swiper" :total="tabs.length" :active="actived" name="tab-layout">
          <template v-slot:slider="slider">
            <slot name="slider" :index="slider.index"></slot>
          </template>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabLayout',
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    active: {
      type: Number,
      default: 0
    },
    tabClass: {
      type: String,
      default: ''
    },
    indicatorHeight: {
      type: String,
      default: '4px'
    },
    indicatorColor: {
      type: String,
      default: 'rgb(45, 212, 162)'
    }
  },
  data () {
    return {
      actived: 0
    }
  },
  methods: {
    onChanged (index) {
      this.actived = index
      this.$emit('changed', this.actived)
    }
  }
}
</script>

<style lang="less" scoped>
.vuie-tab-layout-container {
  width: 100%;
  height: 100%;
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