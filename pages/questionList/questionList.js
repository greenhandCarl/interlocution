//index.js
//获取应用实例
const app = getApp()
function deepClone(obj) {
  var result,
    oClass = isClass(obj);
  if (oClass == 'object') {
    result = {}
  } else if (oClass == 'array') {
    result = []
  } else {
    return obj
  }
  for (let key in obj) {
    var copy = obj[key];
    if (isClass(obj[key]) == 'object') {
      result[key] = deepClone(copy)
    } else if (isClass(obj[key]) == 'array') {
      result[key] = deepClone(copy)
    } else {
      result[key] = obj[key]
    }
  }
  return result
}
function isClass(obj) {
  if (obj == null) {
    return 'null'
  }
  if (obj == undefined) {
    return 'undefined'
  }
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}
Page({
  data: {
    windowHeight: '',
    weuiCellList: [
      { name: '产品类', func: 'onProdTap', current: false },
      { name: '资讯类', func: 'onNewsTap', current: false },
      { name: '股票类', func: 'onProdTap', current: false },
      { name: '基金类', func: 'onProdTap', current: false },
      { name: '期货类', func: 'onProdTap', current: false }
    ],
    dataList: [
      {
        id: '0',
        showMore: true, list: [
          { id: '0', title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2017-12-04', extra: 'vip用户'}
        ]
      },
      {
        id: '1',
        showMore: true,
        list: [
          { id: '0', title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2018-07-16', extra: '黄金vip用户' }
        ]
      },
      {
        id: '2',
        showMore: true,  list: [
          { id: '0', title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2018-07-05', extra: '非vip用户'  }
        ]
      },
      {
        id: '3',
        showMore: true,
        list: [
          { id: '0', title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2018-07-06', extra: '非vip用户'  }
        ]
      },
      {
        id: '4',
        showMore: true,
        list: [
          { id: '0', title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2018-07-06', extra: '非vip用户' }
        ]
      },
      {
        id: '5',
        showMore: true,
        list: [
          { id: '0', title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2018-07-06', extra: '非vip用户' }
        ]
      }
    ],
    questionList: [
      {
        id: '0',
        showMore: true, list: [
          { id: '0', title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2017-12-04', extra: 'vip用户' }
        ]
      },
      {
        id: '1',
        showMore: true,
        list: [
          { id: '0', title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2018-07-16', extra: '黄金vip用户' }
        ]
      },
      {
        id: '2',
        showMore: true, list: [
          { id: '0', title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2018-07-05', extra: '非vip用户' }
        ]
      },
      {
        id: '3',
        showMore: true,
        list: [
          { id: '0', title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2018-07-06', extra: '非vip用户' }
        ]
      },
      {
        id: '4',
        showMore: true,
        list: [
          { id: '0', title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2018-07-06', extra: '非vip用户' }
        ]
      },
      {
        id: '5',
        showMore: true,
        list: [
          { id: '0', title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: '2018-07-06', extra: '非vip用户' }
        ]
      }
    ],
    prodList: [],
    newsList: [],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    showLeft: false,
    inputShowed: false,
    inputVal: "",
    loadMore: true,
    spinShow: false,
    sortItem: {
      id: 'form',
      name: '功能',
      open: false,
      pages: [
        { value: '按时间倒序', tap: 'reverseTime', img: 'nav' },
        { value: '按类别分类', tap: 'toggleLeft', img: 'form' },
        { value: '搜索', tap: 'toSearch', img: 'search' }
      ]
    }
  },
  // onLoad: function () {
  //   if (app.globalData.userInfo)wx.navigateTo {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse) {
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function (e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },
  toggleLeft() {
    this.kindToggle()
    this.setData({
      showLeft: !this.data.showLeft
    });
  },
  //事件处理函数
  onShowMore: function (event) {
    const id = event.currentTarget.dataset.id
    const { questionList, showMore } = this.data
    const questionItem = questionList.find(item => item.id === id)
    questionItem.showMore = !questionItem.showMore
    this.setData({questionList})
  },
  kindToggle: function (e) {
    const { sortItem } = this.data
    sortItem.open = !sortItem.open
    this.setData({sortItem});
  },
  goInfo: function (event) {
    console.log(event.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../questionInfo/questionInfo'
    })
  },
  reverseTime: function (event) {
    const { dataList } = this.data
    this.setData({ spinShow: true})
    setTimeout(() => {
      this.setData({ spinShow: false, questionList: dataList })
    }, 1500)
  },
  toSearch: function (event) {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onReady: function () {
    const { questionList } = this.data
    questionList.sort((a, b) => {
      const timeA = a.list[0].createTime.replace(/-/g, '') - 0
      const timeB = b.list[0].createTime.replace(/-/g, '') - 0
      return timeB - timeA
    })
    this.setData({questionList})
  },
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    const { dataList } = this.data
    //模拟加载
    setTimeout( () => {
      this.setData({questionList: deepClone(dataList)})
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1000);
  },
  onReachBottom: function (e) {
    const { questionList } = this.data
    if (!questionList[0]['classification']) {
      const year = String(new Date().getFullYear())
      const month = new Date().getMonth() + 1 < 10 ? `0${new Date().getMonth() + 1}` : String(new Date().getMonth() + 1)
      const day = new Date().getDate() < 10 ? `0${new Date().getDate()}` : String(new Date().getDate())
      questionList.push({
        id: String(questionList.length),
        showMore: true, list: [
          { id: '0', title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。', userName: '用户12138', createTime: `${year}-${month}-${day}`, extra: 'vip用户' }
        ]
      })
      this.setData({ loadMore: false })
      setTimeout(() => {
        this.setData({ loadMore: true, questionList })
      }, 1500)
    }
  },
  setCurrentUi: function (e) {
    const index = e.currentTarget.dataset.index
    let { weuiCellList } = this.data
    weuiCellList.forEach((item => item.current = false))
    weuiCellList[index]['current'] = true
    this.setData({ weuiCellList})
  },
  onProdTap: function (e) {
    this.setCurrentUi(e)
    let { dataList, questionList } = this.data
    questionList = deepClone(dataList)
    questionList.forEach((item, index) => {
      if (index <= 2 && index > 0) {
        questionList[0]['list'].push(item.list[0])
      }
    })
    questionList[0]['classification'] = '产品类'
    questionList = [questionList[0]]
    this.setData({ spinShow: true })
    this.toggleLeft()
    this.kindToggle()
    setTimeout(() => {
      this.setData({ spinShow: false, questionList })
    }, 1500)
  },
  onNewsTap: function (e) {
    this.setCurrentUi(e)
    let { dataList, questionList } = this.data
    questionList = deepClone(dataList)
    dataList.forEach((item, index) => {
      if (index > 2) {
        questionList[0]['list'].push(item.list[0])
      }
    })
    questionList[0]['classification'] = '资讯类'
    questionList = [questionList[0]]
    this.setData({spinShow: true})
    this.toggleLeft()
    this.kindToggle()
    setTimeout(() => {
      this.setData({ spinShow: false, questionList })
    }, 1500)
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
})