
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    searchHos:''
  },

  hinputname: function (e) {
    this.setData({
    searchHos: e.detail.value
    })
  },
  bindGet: function () {
    var that = this;
    // console.log(this.data.searchHos);
    wx.request({
      url: 'http://zxd.iwei7.com/hospitals',
      data:{
        searchHos: this.data.searchHos
      },
      method: 'GET',
      success: function (res) {
        if (res.data.code == 200) {
           that.setData({
            result: res.data.data.hospital
          })
        }
      }
    })
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://zxd.iwei7.com/hospitals',
      method: 'GET',
      success: function (res) {
        // console.log(res.data.data.hospital)
        // console.log(res)
        if (res.data.code == 200) {
          that.setData({
            result: res.data.data.hospital
          })
        }
      }
    })
  },
  listenerButton: function () {
  }

})
