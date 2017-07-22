//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    text_d1: '周亦秋',
    text_d1_1: '营养门诊',
    icond: '../../images/doct.png',
    date: ''
  },
  bindDoctor: function () {
    wx.navigateTo({
      url: '../doctor_content/doctorCon'
    })
  },
  bindActive: function (e) {
    console.log(e)
  },
  onLoad: function () {
    var that = this;
    that.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      }),
      date: util.formatTime(new Date)
    })
    wx.request({
      url: 'http://zxd.iwei7.com/scheduledates',
      method: 'GET',
      success: function (res) {
        // console.log(res.data.data.schedule_date)
        // console.log(res)
        if (res.data.code == 200) {
          that.setData({
            result: res.data.data.schedule_date
          })
        }
      }
    })
  },
  listenerButton: function () {
  }
})