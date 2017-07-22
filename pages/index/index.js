//index.js
var util = require('../../utils/util.js')
//获取应用实例
var app = getApp()
Page({
  data: {
    mode: 'scaleToFill',
    src: '../../images/main1.jpg',
    icon1: '../../images/icon1.png',
    icon2: '../../images/icon22.png',
    icon3: '../../images/icon3.png',
    icon4: '../../images/lingka.png',
    text1: '点击预约',
    text2: '可预约八天的号源',
    text3: '找医生',
    text4: '帮您找市内名医',
    text5: '预约记录',
    text6: '个人中心'
  },
  bindDoctor: function () {
    wx.navigateTo({
      url: ''
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