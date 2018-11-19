// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  formSubmit(e) {
    console.log("form发生了submit事件，数据为：", e.detail.value)
  },
  formReset(e) {
    console.log("form发生了reset事件，数据为：", e.detail.value)
  }
})