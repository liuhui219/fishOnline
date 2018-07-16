// pages/home/purchase/purchase.js

var IsName = false;
var IsFormat = false;
var IsNum = false;
var IsContact = false;
var IsPhone = false;
var reg = /^1[3|4|5|7|8][0-9]{9}$/;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    format:'',
    num:'', 
    contacts:'',
    phone:'', 
    Issubmit: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     
  },

  myTrim: function (x) {
    return x.replace(/^\s+|\s+$/gm, '');
  },

  bindName:function(e){
    this.setData({
      name: e.detail.value
    })
    if (this.myTrim(e.detail.value).length > 0) {
      IsName = true;
      if (IsName && IsFormat && IsNum && IsContact && IsPhone) {
        this.setData({
          Issubmit: true
        })
      } else {
        this.setData({
          Issubmit: false
        })
      }
    } else {
      this.setData({
        Issubmit: false
      })
    }
  },

  bindFormat: function (e) {
    this.setData({
      format: e.detail.value
    })
    if (this.myTrim(e.detail.value).length > 0) {
      IsFormat = true;
      if (IsName && IsFormat && IsNum && IsContact && IsPhone) {
        this.setData({
          Issubmit: true
        })
      } else {
        this.setData({
          Issubmit: false
        })
      }
    } else {
      this.setData({
        Issubmit: false
      })
    }
  },

  bindNum: function (e) {
    this.setData({
      num: e.detail.value
    })
    if (this.myTrim(e.detail.value).length > 0) {
      IsNum = true;
      if (IsName && IsFormat && IsNum && IsContact && IsPhone) {
        this.setData({
          Issubmit: true
        })
      } else {
        this.setData({
          Issubmit: false
        })
      }
    } else {
      this.setData({
        Issubmit: false
      })
    }
  },

  bindContacts: function (e) {
    
    this.setData({
      contacts: e.detail.value
    })
    if (this.myTrim(e.detail.value).length > 0) {
      IsContact = true;
      if (IsName && IsFormat && IsNum && IsContact && IsPhone) {
        this.setData({
          Issubmit: true
        })
      } else {
        this.setData({
          Issubmit: false
        })
      }
    } else {
      this.setData({
        Issubmit: false
      })
    }
  },

  bindPhone: function (e) {
    this.setData({
      phone: e.detail.value
    })

    if (this.myTrim(e.detail.value).length == 11) {

      if (reg.test(this.myTrim(e.detail.value))) {
        IsPhone = true
        if (IsName && IsFormat && IsNum && IsContact) {
          this.setData({
            Issubmit: true,
            IsPhone: true
          })
        } else {
          this.setData({
            Issubmit: false,
            IsPhone: true
          })
        }
      } else {
        IsPhone = false
        this.setData({
          Issubmit: false,
        })

        wx.showToast({
          title: '手机号格式不对',
          icon: 'none',
          duration: 2000
        })

      }
    } else {
      IsPhone = false
      this.setData({
        Issubmit: false
      })

    }
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