//app.js
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log('app launch'),
    wx.login({
      success: res => {
        console.log('log in success')
      }
    }),
    wx.getUserInfo({
      success: res => {
        console.log('get user info success')
        this.globalData.userInfo = res.userInfo
        // 这里由于getUserInfo是网络请求，可能会成功回调会发生在page.onLoad之后，因此这这里加一个callback防止这种情况
        if(this.userInfoReadyForCallBack) {
          this.userInfoReadyForCallBack(res)
        }
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('app show')
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('app hide')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('app error')
  },
  globalData: {
    userInfo: null
  },

})
