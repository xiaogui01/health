
var util = require('../../utils/util.js')
Page({
  data: {
    searchHos:'',
    department_name: ''
  },

  depputname: function (e) {
    this.setData({
      department_name: e.detail.value
    })
  },
  bindGet: function () {
    var that = this;
    // console.log(this.data.department_name);
    wx.request({
      url: 'http://zxd.iwei7.com/departments',
      data: {
        department_name: this.data.department_name,
      },
      method: 'GET',
      success: function (res) {
        if (res.data.code == 200) {
          that.setData({
            result: res.data.data.department
          })
        }
      }
    })
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://zxd.iwei7.com/departments',
      data:({
        hospital_id:options.id
      }),
      method: 'GET',
      success: function (res) {
        // console.log(res.data.data.hospital)
        // console.log(res)
        if (res.data.code == 200) {
          that.setData({
            result: res.data.data.department
          })
        }
      }
    })
  },
  listenerButton: function () {
  }

})
