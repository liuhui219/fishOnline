// pages/goods/details/details.js
var number = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: false,
    number: 10,
    maxnum:100,
    minnum:1,
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    maskHidden: true,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

   

  img: function (event) {
    var src = event.target.dataset.src;//获取data-src
    var list = event.target.dataset.list;
    console.log(event)
    wx.previewImage({
      current: src,
      urls: list
    })
  },

  add: function () {
    var that = this;
    this.setData({
      maskHidden: false,

    })
    setTimeout(function () {
      that.animation.bottom(0 + 'rpx').step()
      that.opacity.opacity(1).step()
      that.setData({
        animation: that.animation.export(),
        opacity: that.opacity.export()
      })
    }, 200)
  },

  cancal: function () {
    var that = this;
    this.animation.bottom(-500 + 'rpx').step()
    this.opacity.opacity(0).step()
    this.setData({
      animation: this.animation.export(),
      opacity: this.opacity.export(),
    })
    setTimeout(function () {
      that.setData({
        maskHidden: true,
      })
    }, 200)
  },

  adds: function () {
    number = this.data.number + 1;
    if (this.data.maxnum && number >= this.data.maxnum){
      number = this.data.maxnum
      this.setData({
        number: number
      })
    }else{
      this.setData({
        number: number
      })
    } 
  },

  remove:function(){
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

  bindinput:function(e){
    console.log(e)
    this.setData({
      number: Number(e.detail.detail.value)
    })
  },

  bindblur:function(e){
    if(this.data.number >= this.data.maxnum){
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.animation = wx.createAnimation({ duration:200})
    this.opacity = wx.createAnimation({ duration: 200 })
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