//logs.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    textL1:'病人姓名：',
    textL1_1:'陈彩才',
    textL2: '身份证号：',
    textL2_2: '330227193107271355',
    textL3: '挂号科室：',
    textL3_3: '营养门诊',
    textL4: '医生姓名：',
    textL4_4: '周依秋',
    textL5: '门诊日期：',
    textL5_5: '2017-7-11 周二',
    textL6: '门诊时间：',
    textL6_6: '上午',
    textL7: '预约时间：',
    textL7_7: '2017-7-11 7:30',
    textL8: '挂号费用：',
    textL8_8: '0元'
  },
  bindDoctor: function () {
    wx.navigateTo({
      url: '../bookSub/bookSub'
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },


  bindQueTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
})