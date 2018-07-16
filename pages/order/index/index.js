// pages/order/index/index.js
var number = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:[1],
    
    number: 10,
    maxnum: 100,
    minnum: 1,
    checkAlls:[],
  },

  buy:function(){
    wx.switchTab({
      url: '../../goods/goods/goods'
    })
  },

  order:function(){
    wx.navigateTo({
      url: '../orderSeccess/orderSeccess'
    })
  },

  adds: function () {
    number = this.data.number + 1;
    if (this.data.maxnum && number >= this.data.maxnum) {
      number = this.data.maxnum
      this.setData({
        number: number
      })
    } else {
      this.setData({
        number: number
      })
    }
  },

  remove: function () {
    number = this.data.number - 1;
    if (this.data.maxnum && number <= this.data.minnum) {
      number = this.data.minnum
      this.setData({
        number: number
      })
    } else {
      this.setData({
        number: number
      })
    }
  },

  bindinput: function (e) {
    console.log(e)
    this.setData({
      number: Number(e.detail.detail.value)
    })
  },

  bindblur: function (e) {
    if (this.data.number >= this.data.maxnum) {
      this.setData({
        number: this.data.maxnum
      })
    }
    if (this.data.number <= this.data.minnum) {
      this.setData({
        number: this.data.minnum
      })
    }
  },
  removepro:function(){
    wx.showModal({
      title: '操作',
      content: '确定要删除商品？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
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