<template>
  <div class="vuie-tabs-container">
    <ul :ref="`tabs-${name}`" class="no-select">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :class="className(index)"
        :ref="`tabs-${name}-li-${index}`"
        @click="tabTo(index)"
      >{{ tab }}</li>
    </ul>
    <div class="line-horizontal divider" />
    <div
      ref="indicator"
      class="indicator"
      :style="`height: ${indicatorHeight}; background: ${indicatorColor};`"
    />
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    active: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
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
      inited: false,
      actived: this.active,
    }
  },
  watch: {
    active: function (val) {
      this.tabTo(val)
    }
  },
  mounted () {
    setTimeout(() => {
      this.tabTo(this.actived)
    }, 400)
  },
  methods: {
    tabTo (index) {
      if (this.inited && this.actived === index) {
        return
      }
      this.inited = true
      this.actived = index
      this.$emit('changed', this.actived)
      this.updateIndicator()
    },
    className (index) {
      const tabClass = this.tabClass ? this.tabClass + ' ' : ''
      return tabClass + (index === this.actived ? 'is-actived' : '')
    },
    updateIndicator () {
      const indicator = this.$refs.indicator
      const tab = this.$refs[`tabs-${this.name}-li-${this.actived}`][0]
      const margin = parseInt(this.$.css(tab, 'marginLeft'))
      this.$.animate(indicator, {
        width: (tab.clientWidth + margin * 2),
        left: tab.offsetLeft - margin
      }, 300)
    }
  }
}
</script>

<style lang="less" scoped>
.vuie-tabs-container {
  position: relative;
  ul {
    white-space: nowrap;
    overflow: hidden;
    li {
      display: inline-block;
      padding: 10px 0;
      margin: 0 12px;
      cursor: pointer;
    }
    li.is-actived {
      color: aquamarine;
    }
  }
  .divider {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .indicator {
    width: 0;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>