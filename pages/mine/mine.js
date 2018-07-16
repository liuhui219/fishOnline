const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl:"/pages/images/a1.jpg",
      rightPic:"/pages/images/rightArrow.png",
      name:'123******4568',
      orderName:'我的订单',
      allOrder:'全部订单',
    },
    itemOne: [
      { name: "待确定", image:"/pages/images/a1.jpg"},
      { name: "待付款", image: "/pages/images/a2.jpg"},
      { name: "待发货", image: "/pages/images/a3.jpg"},
      { name: "待收货", image: "/pages/images/a4.jpg"}
    ],
    itemTwo: [
      { name: "收货地址", image: "/pages/images/a1.jpg" },
      { name: "服务中心", image: "/pages/images/a2.jpg" },
      { name: "关于我们", image: "/pages/images/a3.jpg" },
      { name: "售后政策", image: "/pages/images/a4.jpg" }
    ],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onPullDownRefresh() {
      wx.showToast({
        title: "下拉刷新",
      })
      // 数据成功后，停止下拉刷新
      wx.stopPullDownRefresh();
 
  },

  //事件处理函数
  bindViewTap: function () {
 
  },


  myOrderClick:function(){
      wx.navigateTo({
        url: './myOrder/myOrder',
      })
  },


})
