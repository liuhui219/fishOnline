// pages/goods/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    maskHidden: true,
    icon1:'icon-androidarrowdropdown',
    icon2: 'icon-androidarrowdropdown',
    col1:'color_777',
    overflow:'',
    height1:0,
    height2:0,
    col2: 'color_777'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  detail:function(){
    wx.navigateTo({
      url: '../details/details'
    })
  },

  classTap: function () {
    var that = this;
    if (this.data.height1 == 0){
      this.setData({
        maskHidden: false,
        icon1:'icon-androidarrowdropup',
        col1: 'color_m',
        icon2: 'icon-androidarrowdropdown',
        col2: 'color_777',
        overflow:'overflow',
        height1:700,
        height2: 0
      }) 
      setTimeout(function () {
        that.animation.height(700 + 'rpx').step()
        that.animation1.height(0 + 'rpx').step()
        that.opacity.opacity(1).step()
        that.setData({
          animation: that.animation.export(),
          animation1: that.animation1.export(),
          opacity: that.opacity.export()
        })
      }, 0)
    }else{ 
      this.animation.height(0 + 'rpx').step()
      this.opacity.opacity(0).step()
      this.setData({
        animation: this.animation.export(),
        opacity: this.opacity.export(),
        overflow: '',
        icon1: 'icon-androidarrowdropdown',
        col1: 'color_777',
        height1: 0
      })
      setTimeout(function () {
        that.setData({
          maskHidden: true,
        })
      }, 400)
    }    
  },

  classSort:function(){
    var that = this;
    if (this.data.height2 == 0) {
      this.setData({
        maskHidden: false,
        icon2: 'icon-androidarrowdropup',
        col2: 'color_m',
        icon1: 'icon-androidarrowdropdown',
        col1: 'color_777',
        overflow: 'overflow',
        height2: 300,
        height1: 0
      })
      setTimeout(function () {
        that.animation1.height(300 + 'rpx').step()
        that.animation.height(0 + 'rpx').step()
        that.opacity.opacity(1).step()
        that.setData({
          animation1: that.animation1.export(),
          animation: that.animation.export(),
          opacity: that.opacity.export()
        })
      }, 0)
    } else {
      this.animation1.height(0 + 'rpx').step()
      this.opacity.opacity(0).step()
      this.setData({
        animation1: this.animation1.export(),
        opacity: this.opacity.export(),
        icon2: 'icon-androidarrowdropdown',
        col2: 'color_777',
        overflow: '',
        height2: 0
        
      })
      setTimeout(function () {
        that.setData({
          maskHidden: true,
        })
      }, 400)
    } 
  },

  cancal:function(){
    var that = this;
    this.animation.height(0 + 'rpx').step()
    this.animation1.height(0 + 'rpx').step()
    this.opacity.opacity(0).step()
    this.setData({
      animation1: this.animation1.export(),
      animation: this.animation.export(),
      opacity: this.opacity.export(),
      icon2: 'icon-androidarrowdropdown',
      col2: 'color_777',
      icon1: 'icon-androidarrowdropdown',
      col1: 'color_777',
      overflow: '',
      height2: 0,
      height1: 0

    })
    setTimeout(function () {
      that.setData({
        maskHidden: true,
      })
    }, 400)
  },

  search: function () {
    wx.navigateTo({
      url: '../../home/search/search'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.animation = wx.createAnimation()
    this.animation1 = wx.createAnimation()
    this.opacity = wx.createAnimation()
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