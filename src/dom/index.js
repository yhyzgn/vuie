class DomSelector {
  all (selector, parent) {
    if (!parent) {
      parent = document
    }
    return document.querySelectorAll(selector)
  }

  get (selector, index, parent) {
    const all = this.all(selector, parent || document)
    return all && all.length > 0 ? all[index] : undefined
  }

  first (selector, parent) {
    return this.get(selector, 0, parent || document)
  }

  css (el, attr, value) {
    if (arguments.length === 2) {
      if (typeof arguments[1] === 'string') {
        // 获取属性值
        const computer = window.getComputedStyle ? window.getComputedStyle : document.defaultView.getComputedStyle
        if (computer) {
          return computer(el)[attr]
        }
        if (el.currentStyle) {
          return el.currentStyle[attr]
        }
      } else if (typeof arguments[1] === 'object') {
        // 设置属性值
        for (const key in attr) {
          el.style[key] = attr[key]
        }
      }
    } else {
      // 设置属性值
      el.style[attr] = value
    }
  }

  animate (el, attrs, time, callback) {
    //判断透明度是否为undefined（兼容IE8-）
    if(this.css(el, 'opacity') == undefined){
        el.style.opacity = 1
        el.style.filter = 'alpha(opacity=100)'
    }
    //保存初始值
    var start = {}
    for (var key in attrs) {
        if (key == 'opacity') {
            start[key] = parseFloat(this.css(el, key)) * 100
        } else {
            start[key] = parseInt(this.css(el, key))
        }
    }
    //将时间划分为100份
    var space = time / 100
    var deg = 0
    //添加动画之前停止之前的动画
    clearInterval(el.timer)
    //添加动画
    el.timer = setInterval(function () {
        deg += 9
        for (var key in attrs) {
            //判断是否为不透明度
            if (key == 'opacity') {
                //计算变化量
                var end = (attrs[key] * 100 - start[key]) * Math.sin((deg/10) * Math.PI / 180)
                el.style.opacity = (start[key] + end) / 100
                el.style.filter = 'alpha(opacity=' + (start[key] + end) + ')'
            } else {
                //计算变化量
                var end = (attrs[key] - start[key]) * Math.sin((deg/10) * Math.PI / 180)
                el.style[key] = (start[key] + end) + 'px'
            }
        }
        //判断动画停止条件
        if (deg == 900) {
            clearInterval(el.timer)
            //动画结束后执行回调函数
            if (callback) {
                callback()
            }
        }
    }, space)
  }
}

export default new DomSelector()