// components/community/community.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    messages: {
      type: Number,
      value: 10,
      observer: function(newVal, oldVal) {
        this.setData({
          displayMessages: newVal > 9 ? '9+' : newVal
        });
      }
    },
    messagesList:{
      type: Array,
      value: [
        {
          avatar: 'https://images.unsplash.com/photo-1698862341365-cf4478f12332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNDUyNjk5Mw&ixlib=rb-4.0.3&q=80&w=1080',
          name: '用户名',
          message: '1233232',
          time: '2023-12-20',
          images: ['https://images.unsplash.com/photo-1703811096376-1cb9f563961d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNDUyNzA5Mg&ixlib=rb-4.0.3&q=80&w=1080','https://images.unsplash.com/photo-1703811096376-1cb9f563961d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNDUyNzA5Mg&ixlib=rb-4.0.3&q=80&w=1080','https://images.unsplash.com/photo-1703811096376-1cb9f563961d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNDUyNzA5Mg&ixlib=rb-4.0.3&q=80&w=1080'],
          video: [],
          upvotes: 25,
          comments: 20,
          shares: 10
        },
        {
          avatar: 'https://images.unsplash.com/photo-1701014159143-09482059f571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNDUyNzAzNQ&ixlib=rb-4.0.3&q=80&w=1080',
          name: '用户名',
          message: '12332312321313213321233123231231332',
          time: '2024-1-6',
          images: [],
          video: ['121312312'],
          upvotes: 30,
          comments: 10,
          shares: 6
        },        {
          avatar: 'https://images.unsplash.com/photo-1698862341365-cf4478f12332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNDUyNjk5Mw&ixlib=rb-4.0.3&q=80&w=1080',
          name: '用户名',
          message: '1233232',
          time: '2023-12-20',
          images: ['https://images.unsplash.com/photo-1703811096376-1cb9f563961d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNDUyNzA5Mg&ixlib=rb-4.0.3&q=80&w=1080','https://images.unsplash.com/photo-1703811096376-1cb9f563961d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNDUyNzA5Mg&ixlib=rb-4.0.3&q=80&w=1080','https://images.unsplash.com/photo-1703811096376-1cb9f563961d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNDUyNzA5Mg&ixlib=rb-4.0.3&q=80&w=1080'],
          video: [],
          upvotes: 25,
          comments: 20,
          shares: 10
        },        {
          avatar: 'https://images.unsplash.com/photo-1698862341365-cf4478f12332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNDUyNjk5Mw&ixlib=rb-4.0.3&q=80&w=1080',
          name: '用户名',
          message: '1233232',
          time: '2023-12-20',
          images: ['https://images.unsplash.com/photo-1703811096376-1cb9f563961d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNDUyNzA5Mg&ixlib=rb-4.0.3&q=80&w=1080','https://images.unsplash.com/photo-1703811096376-1cb9f563961d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNDUyNzA5Mg&ixlib=rb-4.0.3&q=80&w=1080','https://images.unsplash.com/photo-1703811096376-1cb9f563961d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNDUyNzA5Mg&ixlib=rb-4.0.3&q=80&w=1080'],
          video: [],
          upvotes: 25,
          comments: 20,
          shares: 10
        },        {
          avatar: 'https://images.unsplash.com/photo-1698862341365-cf4478f12332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNDUyNjk5Mw&ixlib=rb-4.0.3&q=80&w=1080',
          name: '用户名',
          message: '1233232',
          time: '2023-12-20',
          images: ['https://images.unsplash.com/photo-1703811096376-1cb9f563961d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNDUyNzA5Mg&ixlib=rb-4.0.3&q=80&w=1080','https://images.unsplash.com/photo-1703811096376-1cb9f563961d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNDUyNzA5Mg&ixlib=rb-4.0.3&q=80&w=1080','https://images.unsplash.com/photo-1703811096376-1cb9f563961d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNDUyNzA5Mg&ixlib=rb-4.0.3&q=80&w=1080'],
          video: [],
          upvotes: 25,
          comments: 20,
          shares: 10
        },
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentTab:0,
    showNumber: '9+'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchBar:function(e){
      console.log(e);
      this.setData({
        currentTab:e.target.dataset.index
      })
      console.log(this.data.currentTab);
    }
  }
})