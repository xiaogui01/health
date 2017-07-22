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


    wx.request({
      url: 'http://zxd.iwei7.com/scheduledates',
      method: 'GET',
      success: function (res) {
        // console.log(res.data.data.doctor_photo)
        // console.log(res)
        if (res.data.code == 200) {
          that.setData({
            result: res.data.data.schedule_date
          })
        }
      }
    });
    wx.request({
      url: 'http://zxd.iwei7.com/nums',
      method: 'GET',
      success: function (res) {
        if (res.data.code == 200) {
          that.setData({
            result1: res.data.data.scheduling
          })
        }
      }
    })


  },
  listenerButton: function () {
  }
})
