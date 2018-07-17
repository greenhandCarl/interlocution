//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    questionList: [
      {
        id: '0',
        showMore: false,
        classification: '产品类', list: [
          { id: '0', title: '标题1', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2017-12-4', extra: 'vip用户'},
          { id: '1', title: '标题2', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户122328', createTime: '2017-12-4', extra: 'vip用户' },
          { id: '2', title: '标题3', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2018-7-16', extra: '非vip用户' },
          { id: '3', title: '标题4', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2018-7-16', extra: '非vip用户'  },
          { id: '4', title: '标题5', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2018-7-16', extra: '非vip用户'  }
        ], descList: [
          { id: '0', title: '标题1', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2017-12-4', extra: 'vip用户' },
          { id: '1', title: '标题2', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户122328', createTime: '2017-12-4', extra: 'vip用户' }
        ]
      },
      {
        id: '1',
        showMore: true,
        list: [
          { id: '0', title: '标题1', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2018-7-16', extra: '黄金vip用户' }
        ]
      },
      {
        id: '2',
        showMore: false,
        classification: '资讯类', list: [
          { id: '0', title: '标题1', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2018-7-16', extra: '非vip用户'  },
          { id: '1', title: '标题2', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2018-7-16', extra: '非vip用户'  },
          { id: '2', title: '标题3', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2018-7-16', extra: '非vip用户'  },
          { id: '3', title: '标题4', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2018-7-16', extra: '非vip用户'  },
          { id: '4', title: '标题5', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2018-7-16', extra: '非vip用户'  }
        ], descList: [
          { id: '0', title: '标题1', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2018-7-16', extra: '非vip用户' },
          { id: '1', title: '标题2', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2018-7-16', extra: '非vip用户' }
        ]
      },
      {
        id: '3',
        showMore: true,
        list: [
          { id: '0', title: '标题1', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2018-7-16', extra: '非vip用户'  }
        ]
      }
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  onShowMore: function (event) {
    const id = event.currentTarget.dataset.id
    const { questionList, showMore } = this.data
    const questionItem = questionList.find(item => item.id === id)
    questionItem.showMore = !questionItem.showMore
    this.setData({questionList})
  },
  goInfo: function (event) {
    console.log(event.currentTarget.dataset.id)
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
