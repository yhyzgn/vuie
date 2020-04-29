<template>
  <div class="vuie-tabs-container">
    <ul>
      <li v-for="(tab, index) in tabs" :key="index" @click="tabTo(index)">{{ tab }}</li>
    </ul>
    <div class="line-horizontal divider" />
    <div ref="indicator" class="indicator" />
  </div>
</template>

<script>
import dom from 'vuie/dom'

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
    }
  },
  data () {
    return {
      actived: this.active,
    }
  },
  watch: {
    active: function (val) {
      this.tabTo(val)
    }
  },
  mounted () {
    this.tabTo(this.actived)
  },
  methods: {
    tabTo (index) {
      this.actived = index
      this.$emit('changed', this.actived)
      this.updateIndicator()
    },
    updateIndicator () {
      const indicator = this.$refs.indicator
      const tab = dom.get('li', this.actived)
      const margin = parseInt(dom.css(tab, 'marginLeft'))
      const left = `${tab.offsetLeft - margin}px`
      dom.animate(indicator, {
        width: (tab.clientWidth + margin * 2),
        left: tab.offsetLeft - margin
      })
    }
  }
}
</script>

<style lang="less" scoped>
.vuie-tabs-container {
  position: relative;
  ul {
    white-space: nowrap;
    overflow: scroll;
    li {
      display: inline-block;
      padding: 10px 0;
      margin: 0 12px;
      cursor: pointer;
    }
  }
  .divider {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .indicator {
    width: 0;
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: greenyellow;
  }
}
</style>