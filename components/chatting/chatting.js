// components/chatting/chatting.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    obj:{
      type:Object,
      observer:function(newVal,oldVal){
        // console.log(newVal);

        // 处理时间
        const now = new Date()
        const time = new Date(newVal.time)
        const diff = now - time
        const minutes = Math.floor(diff / 1000 / 60)
        var show = ''
        if (minutes > 0){
          const hours = Math.floor(minutes / 60)
          if (hours > 0){
            const days = Math.floor(hours / 24)
            if (days > 0){
              const months = Math.floor(days / 30)
              if (months > 0){
                const years = Math.floor(days / 365)
                if (years > 0){
                  show = years + '年前'
                }
                else{
                  show = months + '个月前'
                }
              }
              else{
                show = days + '天前'
              }
            }
            else{
              show = hours + '小时前'
            }
          }
          else{
            show = minutes + '分钟前'
          }
        }
        else{
          show = '刚刚'
        }
        this.setData({
          time : show
        })

        // 最多显示3个图片
        if (newVal.images && newVal.images.length>3){
          newVal.images = newVal.images.slice(0,3)
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    time:''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})