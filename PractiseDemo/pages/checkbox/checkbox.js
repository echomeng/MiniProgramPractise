// pages/checkbox/checkbox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { value: 'USA', name: '美国'},
      { value: 'CHN', name: '中国', checked:'true' },
      { value: 'BRA', name: '巴西' },
      { value: 'JPN', name: '日本' },
      { value: 'ENG', name: '英国' },
      { value: 'FRA', name: '法国' }
    ]
  },

  checkboxChange(e) {
    const items = this.data.items;
    const values = e.detail.value;
    for(let i = 0; i < items.length; i++) {
      items[i].checked = false;
      for(let j = 0; j < values.length; j++) {
        if (items[i].value === values[j]) {
          items[i].checked = true;
          break;
        }
      }
    }
    this.setData({
      items
    })
  }
})