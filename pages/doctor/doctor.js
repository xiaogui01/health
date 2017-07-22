
var util = require('../../utils/util.js')
Page({
  data: {
    text_d1: '周亦秋',
    text_d1_1: '营养门诊',
    icond: '../../images/doct.png',
    date: '',
    timeDay: "timeDay",
    timeDayIndex: null
  },
  bindDoctor: function () {
    wx.navigateTo({
      url: '../doctor_content/doctorCon'
    })
  },
  bindActive: function (e) {
    const ds = e.currentTarget.dataset;
    console.log("dataset");
    console.log(e.currentTarget.dataset);
    this.setData({
      timeDayIndex: ds.datasetindex
    });
    console.log("timeDayIndex = " + this.data.timeDayIndex);
  },
  onLoad: function () {

    var that = this;
<<<<<<< HEAD


=======
    that.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      }),
      date: util.formatTime(new Date)
    });
>>>>>>> 416c9e29cb261dbaf73905f8bbe89fffaef85d16
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
