// pages/home/financial/applyInput/applyInput.js
var IsCompany = false;
var IsContacts = false;
var IsPhone = false;
var IsMoney = false;
var IsCycle = false;
var reg = /^1[3|4|5|7|8][0-9]{9}$/;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['广东省', '深圳市', '南山区'],
    customItem: '全部',
    company: '',
    contacts: '',
    phone: '',
    money: '',
    Issubmit: false,
    cycle: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  myTrim: function (x) {
    return x.replace(/^\s+|\s+$/gm, '');
  },

  bindCompany: function (e) {
    this.setData({
      company: e.detail.value
    })
    if (this.myTrim(e.detail.value).length > 0) {
      IsCompany = true;
      if (IsCompany && IsContacts && IsPhone && IsMoney && IsCycle) {
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
      IsContacts = true;
      if (IsCompany && IsContacts && IsPhone && IsMoney && IsCycle) {
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
        if (IsCompany && IsContacts && IsMoney && IsCycle) { 
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
      }else{
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

  bindMoney: function (e) {
    this.setData({
      money: e.detail.value
    })

    if (this.myTrim(e.detail.value).length > 0) {
      IsMoney = true;
      if (IsCompany && IsContacts && IsPhone && IsMoney && IsCycle) {
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

  bindCycle: function (e) {
    this.setData({
      cycle: e.detail.value
    })

    if (this.myTrim(e.detail.value).length > 0) {
      IsCycle = true;
      if (IsCompany && IsContacts && IsPhone && IsMoney && IsCycle) {
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

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
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