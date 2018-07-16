// pages/order/orderSeccess/orderSeccess.js
const util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: false,
    mydata:{
      car: '',
      phone: '',
      title:'请选择',
      date: util.formatTime(new Date()),
      sents: true
    },
    receipt:{
      sents: true,
      cont: true, 
      title:'不需要发票',
      ticketTitleType: '',
      ticketDetail: '', 
      ticketType:0,
      company: '',
      companyTax: '',
      bank: '',
      bankNum: '',
      address: '',
      phone: ''
    }
  },

  sent:function(){
    wx.navigateTo({
      url: '../sent/sent?mydata='+JSON.stringify(this.data.mydata)
    })
  },

  receipt:function(){
    wx.navigateTo({
      url: '../receipt/receipt?receipt=' + JSON.stringify(this.data.receipt)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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