
var util = require('../../utils/util.js')
Page({
  data: {
  },
  bindBook: function() {
    wx.navigateTo({
      url: '../bookSub/bookSub'
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
