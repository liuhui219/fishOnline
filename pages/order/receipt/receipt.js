// pages/order/receipt/receipt.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sents: true,
    cont: true, 
    title:'个人',
    ticketDetail:1,
    ticketType:0,
    ticketTitleType:1,
    company:'',
    companyTax:'',
    bank:'',
    bankNum:'',
    address:'',
    phone:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      ticketTitleType: JSON.parse(options.receipt).ticketTitleType,
      ticketDetail: JSON.parse(options.receipt).ticketDetail, 
      company: JSON.parse(options.receipt).company,
      sents: JSON.parse(options.receipt).sents,
      ticketType: JSON.parse(options.receipt).ticketType,
      cont: JSON.parse(options.receipt).cont, 
      companyTax: JSON.parse(options.receipt).companyTax,
      bank: JSON.parse(options.receipt).bank,
      bankNum: JSON.parse(options.receipt).bankNum,
      address: JSON.parse(options.receipt).address,
      phone: JSON.parse(options.receipt).phone
    })
  },

  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    if (e.detail.value == '公司') {
      this.setData({
        sents: false,
        ticketTitleType:2,
        title: '公司'
      })
    } else {
      this.setData({
        sents: true,
        ticketTitleType:1,
        title: '个人'
      })
    }
  },

  radioChanges: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    if (e.detail.value == '水产食品') {
      this.setData({
        cont: false,
        ticketDetail:2 
      })
    } else {
      this.setData({
        cont: true,
        ticketDetail: 1 
      })
    }
  },

  cancel:function(){
    var obj = {}
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];
    obj = {
      ticketTitleType: this.data.ticketTitleType,
      ticketDetail: this.data.ticketDetail,
      title: '不需要发票',
      sents: this.data.sents,
      ticketType:0,
      cont: this.data.cont,
      company: this.data.company,
      companyTax: this.data.companyTax,
      bank: this.data.bank,
      bankNum: this.data.bankNum,
      address: this.data.address,
      phone: this.data.phone
    }

    prevPage.setData({
      receipt: obj
    })
    wx.navigateBack()
  },

  sure:function(){
    var obj = {}
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];
    if (this.data.sents){
       obj = {
         ticketTitleType: this.data.ticketTitleType,
         ticketDetail: this.data.ticketDetail,
         title:'个人',
         ticketType: 1,
         sents: this.data.sents,
         cont: this.data.cont, 
         company: this.data.company,
         companyTax: this.data.companyTax,
         bank: this.data.bank,
         bankNum: this.data.bankNum,
         address: this.data.address,
         phone: this.data.phone
       }

       prevPage.setData({
         receipt: obj
       })
       wx.navigateBack()
    }else{
      obj = {
        ticketTitleType: this.data.ticketTitleType,
        ticketDetail: this.data.ticketDetail,
        title: '公司',
        ticketType: 1,
        sents: this.data.sents,
        cont: this.data.cont, 
        company: this.data.company,
        companyTax: this.data.companyTax,
        bank: this.data.bank,
        bankNum: this.data.bankNum,
        address: this.data.address,
        phone: this.data.phone
      }

      prevPage.setData({
        receipt: obj
      })

      wx.navigateBack()
    }
  },

  myTrim: function (x) {
    return x.replace(/^\s+|\s+$/gm, '');
  },

  bindCompany:function(e){
    this.setData({
      company: this.myTrim(e.detail.value)
    })
  },

  bindCompanyTax: function (e) {
    this.setData({
      companyTax: this.myTrim(e.detail.value)
    })
  },

  bindBank: function (e) {
    this.setData({
      bank: this.myTrim(e.detail.value)
    })
  },

  bindBankNum: function (e) {
    this.setData({
      bankNum: this.myTrim(e.detail.value)
    })
  },

  bindAddress: function (e) {
    this.setData({
      address: this.myTrim(e.detail.value)
    })
  },

  bindPhone: function (e) {
    this.setData({
      phone: this.myTrim(e.detail.value)
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