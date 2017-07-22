//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  bindRec: function () {
    wx.navigateTo({
      url: '../book_record/bookRec'
    })
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://zxd.iwei7.com/doctors',
      method: 'GET',
      success: function (res) {
        // console.log(res.data.data.hospital)
        // console.log(res)
        if (res.data.code == 200) {
          that.setData({
            result: res.data.data.doctor
          })
        }
      }
    })
  },
  listenerButton: function () {
  }
})
