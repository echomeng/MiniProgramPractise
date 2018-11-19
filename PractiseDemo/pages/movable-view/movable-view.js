// pages/movable-view/movable-view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 0,
    y: 0,
    scale: 2,
  },
  tap() {
    this.setData({
      x: 30,
      y: 30
    })
  },
  onChage(e) {
    console.log(e.detail)
  },
  onScale() {
    console.log(e.detail)
  }

})