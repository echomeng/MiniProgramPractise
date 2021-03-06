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
        pages: ['views', 'scroll-view', 'swiper', 'movable-view', 'cover-view']
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
        pages: ['checkbox', 'form', 'input', 'picker', 'picker-view']
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
    const id = e.currentTarget.id
    const list = this.data.list
    for(let i = 0; i < list.length; i++) {
      if(list[i].id === id) {
        list[i].open =! list[i].open
      } else {
        list[i].open = false;
      }
    }
    this.setData ({
      list
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})