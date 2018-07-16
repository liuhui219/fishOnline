// pages/order/sent/sent.js
const util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2016-09-01',
    dates: '2016-09-01',
    car:'',
    phone:'',
    title:'上门自提',
    sents:true,
  },

  myTrim: function (x) {
    return x.replace(/^\s+|\s+$/gm, '');
  },

  bindCar:function(e){
    this.setData({
      car: this.myTrim(e.detail.value)
    })
  },

  bindPhone: function (e) {
    this.setData({
      phone: this.myTrim(e.detail.value)
    })
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  sure:function(){
    var obj = {}
    var pages = getCurrentPages(); 
    var prevPage = pages[pages.length - 2];  //上一个页面

    
    console.log(prevPage)
    if (this.data.sents){
      if (this.data.car.length == 0) {
        wx.showToast({
          title: '请输入自提车辆',
          icon: 'none',
          duration: 2000
        })
        return false;
      } else if (this.data.phone.length == 0) {
        wx.showToast({
          title: '请输入联系方式',
          icon: 'none',
          duration: 2000
        })
        return false;
      } else {
        obj = {
          car: this.data.car,
          phone: this.data.phone,
          date: this.data.date,
          title: this.data.title,
          sents: this.data.sents
        }

        prevPage.setData({
          mydata: obj
        })

        wx.navigateBack()
      }
    } else {
      obj = {
        car: this.data.car,
        phone: this.data.phone,
        date: this.data.date,
        title: this.data.title,
        sents: this.data.sents
      }

      prevPage.setData({
        mydata: obj
      })

      wx.navigateBack()
    }
    
  },

  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    if (e.detail.value == '委托发货'){
      this.setData({
        sents: false,
        title:'委托发货'
      })
    }else{
      this.setData({
        sents: true,
        title: '上门自提'
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      car: JSON.parse(options.mydata).car,
      phone: JSON.parse(options.mydata).phone,
      date: JSON.parse(options.mydata).date,
      title: JSON.parse(options.mydata).title,
      sents: JSON.parse(options.mydata).sents,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      date: util.formatTime(new Date()),
      dates: util.formatTime(new Date())
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})