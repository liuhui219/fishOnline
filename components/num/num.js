// components/num/num.js
var num = 0;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    values: {
      type: Number,
      value: 0
    },
  },

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  
  

  /**
   * 组件的初始数据
   */
  data: {

  },

   

  /**
   * 组件的方法列表
   */
  methods: { 
    add:function(){
      this.triggerEvent("add")
    },

    remove: function () {
      this.triggerEvent("remove")
    },

    bindinput:function(e){
      this.triggerEvent("bindinput",e)
    },

    bindblur:function(e){
      this.triggerEvent("bindblur", e)
    }

  }
})
