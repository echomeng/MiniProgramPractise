// pages/action-sheet/action-sheet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'view',
        name: '视图容器',
        open: false,
        pages: ['views', 'scroll-view', 'swiper']
      },
      {
        id: 'content',
        name: '基础内容',
        open: false,
        pages: ['views', 'scroll-view', 'swiper']
      },
      {
        id: 'form',
        name: '表单组件',
        open: false,
        pages: ['views', 'scroll-view', 'swiper']
      },
      {
        id: 'nav',
        name: '导航',
        open: false,
        pages: ['views', 'scroll-view', 'swiper']
      },
      {
        id: 'media',
        name: '媒体组件',
        open: false,
        pages: ['views', 'scroll-view', 'swiper']
      },
      {
        id: 'map',
        name: '地图',
        open: false,
        pages: ['views', 'scroll-view', 'swiper']
      },
      {
        id: 'canvas',
        name: '画布',
        open: false,
        pages: ['views', 'scroll-view', 'swiper']
      },
      {
        id: 'open',
        name: '开放能力',
        open: false,
        pages: ['views', 'scroll-view', 'swiper']
      }
    ]
  },
  kindToggle(e) {
    console.log('click cell')
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})