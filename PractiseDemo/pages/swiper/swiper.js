// pages/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [
      "demo-text-1", "demo-text-2", "demo-text-3"
    ],
    indicatorDots: true,
    duration: 500,
    interval: 2000,
    autoPlay: false,
  },
  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoPlayState() {
    this.setData({
      autoPlay: !this.data.autoPlay
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  }
})