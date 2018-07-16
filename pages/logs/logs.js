//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },

  onTabItemTap(e) {
    console.log(e)
  },
  onShow:function(){ 
  },
  onLoad: function (e) {
    
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
