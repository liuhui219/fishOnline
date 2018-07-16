const app = getApp()

Page({
  data: {
    navbar: ['全部', '待确认', '待付款','待发货','待收货'],
    currentTab: 0,
    moneyState: 2,
    userInfo:{
      itemPic: "/pages/images/a1.jpg"
    },

    companyInfo:[
      {
        styleType:"1",
        companyName:"海之星水产公司",
        currentState:"待确认",
        content:[
          {title:"商品名字1111111",sizeT:"20-50克",level:"优",price:"1000.99",count:"70"},
          { title: "商品名字2222222", sizeT: "33-66克", level: "差劲", price: "商议", count: "70"}
        ],
        totalPrice:"待报价"   
      },
      {
        styleType: "2",
        companyName: "阿里巴巴水产公司",
        currentState: "待付款",
        content: [
          { title: "商品名字3333333", sizeT: "25-78克", level: "好", price: "13340.99", count: "50" },
          { title: "商品名字4444444", sizeT: "13-46克", level: "不行", price: "商议", count: "20"}
        ],
        totalPrice: "98000000"
      },
    ],

    showButtonState: [
      { name: "关闭交易", keyName: "1" },
      { name: "支付说明", keyName: "2" },
      { name: "上传付款凭证", keyName: "3" },
    ],
  },
 
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  closeButton:function(e){
    wx.showToast({
      title: '点击了',
    })
  },
  checkNumber:function(numb){
    
    console.log("numb....."+numb);
    var patrn = /^[0-9]*$/;
    if (patrn.exec(numb) == null || numb == "") {
      return false
    } else {
      return true
    }
  },
  textclick:function(e){
    console.log(e.target.dataset.index)
     
  },

  onItemClick:function(e){
    console.log(e);
      wx.navigateTo({
        url: '../OrderDetail/OrderDetail?index=' + e.currentTarget.dataset.index,
      })
  }
})