// pages/questionInfo.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wordCounts: 0,
    wordValue: undefined,
    spinShow: false,
    current: '',
    visible1: false,
    fakerFocus: true,
    inputShow: false,
    commentPlaceholder: '评论',
    offsetY: undefined,
    addComment: {
      username1: '',
      username2: '',
      content: ''
    },
    answerList: [
      {
        username: '用户12138',
        answer: '这个问题其实非常简单解决，选择一款搜索引擎，把问题输入进去，按回车，就会看到很多答案了。',
        createTime: '2018-07-19',
        extra: '其他信息',
        operateLeft: 400,
        editing: false,
        agreed: false,
        commentList: [],
        agreeList: ['用户huangkai', '用户wangzhouyong']
      },
      {
        username: '用户12139',
        answer: '这个问题其实非常简单解决，选择一款搜索引擎，把问题输入进去，按回车，就会看到很多答案了。',
        createTime: '2018-07-19',
        extra: '其他信息',
        operateLeft: 400,
        editing: false,
        agreed: false,
        commentList: [
          { username1: '用户huangkai', username2: '', content: '我觉着你说的不对' },
          { username1: '用户12138', username2: '用户huangkai', content: '先问是不是，在问为什么' },
          { username1: 'yonghuzj', username2: '', content: '楼上二位不要在争论了' }
        ],
        agreeList: ['用户huangkai', '用户wangzhouyong']
      },
      {
        username: '用户12140',
        answer: '这个问题其实非常简单解决，选择一款搜索引擎，把问题输入进去，按回车，就会看到很多答案了。',
        createTime: '2018-07-19',
        extra: '其他信息',
        operateLeft: 400,
        editing: false,
        agreed: false,
        commentList: [],
        agreeList: []
      },
      {
        username: '用户12141',
        answer: '这个问题其实非常简单解决，选择一款搜索引擎，把问题输入进去，按回车，就会看到很多答案了。',
        createTime: '2018-07-19',
        extra: '其他信息',
        operateLeft: 400,
        editing: false,
        agreed: false,
        commentList: [],
        agreeList: []
      }
    ]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  onAnswerChange: function (e) {
    let { wordCounts, wordValue } = this.data
    wordCounts = e.detail.value.length
    wordValue = e.detail.value
    this.setData({ wordCounts, wordValue})
  },
  clearValue: function (e) {
    let { wordCounts, wordValue } = this.data
    wordCounts = 0
    wordValue = ''
    this.setData({ wordCounts, wordValue, visible1: false })
  },
  saveValue: function (e) {
    let { wordCounts, wordValue } = this.data
    wordCounts = 0
    wordValue = ''
    this.setData({ wordCounts, wordValue, visible1: false})
    this.openLoading()
    setTimeout(() => {
      this.openToast()
    }, 3000)
  },
  openToast: function () {
    wx.showToast({
      title: '提交成功',
      icon: 'success',
      duration: 1500
    });
  },
  openLoading: function () {
    wx.showToast({
      title: '提交中',
      icon: 'loading',
      duration: 3000
    });
  },
  handleChange({ detail }) {
    if (detail.key === 'answer') {
      this.setData({
        current: detail.key
      });
      wx.navigateTo({
        url: "../reply/reply"
      })
    } else {
      this.setData({
        current: detail.key
      });
      wx.navigateBack({
        url: "pages/index/index"
      })
    }
  },
  toHome: function (e) {
    wx.navigateBack({
      url: "pages/index/index"
    })
  },
  toReply: function (e) {
    wx.navigateTo({
      url: "../reply/reply"
    })
  },
  imgtap: function (e) {
    const index = e.currentTarget.dataset.index
    const { answerList } = this.data
    if (!answerList[index]['operateLeft']) {
      answerList[index]['operateLeft'] = 400
    } else {
      answerList[index]['operateLeft'] = 0
    }
    this.setData({answerList})
  },
  hideOperateShade: function (e) {
    const index = e.currentTarget.dataset.index
    const { answerList } = this.data
    if (!answerList[index]['operateLeft']) {
      answerList[index]['operateLeft'] = 400
    }
    this.setData({ answerList })
  },
  operateShadeTap: function (e) {
    this.hideOperateShade(e)
  },
  agreeTap: function (e) {
    let { answerList } = this.data
    const userInfo = app.globalData.userInfo
    const index = e.currentTarget.dataset.index
    answerList[index]['agreeList'].push(userInfo.nickName)
    answerList[index]['agreed'] = true
    this.hideOperateShade(e)
    this.setData({answerList})
  },
  disagreeTap: function (e) {
    let { answerList } = this.data
    const userInfo = app.globalData.userInfo
    const index = e.currentTarget.dataset.index
    answerList[index]['agreeList'].pop()
    answerList[index]['agreed'] = false
    this.hideOperateShade(e)
    this.setData({ answerList })
  },
  commentTap: function (e) {
    let { answerList, commentPlaceholder } = this.data
    const index = e.currentTarget.dataset.index
    commentPlaceholder = `评论${answerList[index]['username']}`
    const offsetY = e.detail.y
    answerList[index]['editing'] = true
    this.hideOperateShade(e)
    this.setData({ inputShow: true, answerList, offsetY, commentPlaceholder })
  },
  onconfirm: function (e) {
    const { answerList, addComment } = this.data
    const value = e.detail.value
    const commentList = answerList.find((item => item.editing))['commentList']
    answerList.forEach(item => {
      if (item.editing) {
        item.editing = false
      }
    })
    const userInfo = app.globalData.userInfo
    addComment['content'] = value
    addComment['username1'] = userInfo.nickName
    commentList.push(addComment)
    this.setData({answerList})
  },
  onfakerinputblur: function (e) {
    this.setData({ inputShow: false })
  },
  onfakerfocus: function (e) {
    const { offsetY } = this.data
    const keyBoardHeight = e.detail.height
    // if (offsetY) {
    //   wx.pageScrollTo({
    //     scrollTop: offsetY,
    //     duration: 300
    //   })
    // }
  },
  commentItemTap: function (e) {
    let { answerList, addComment, commentPlaceholder } = this.data
    const username1 = e.currentTarget.dataset.name
    const index = e.currentTarget.dataset.index
    commentPlaceholder = `回复${username1}`
    answerList[index]['editing'] = true
    this.setData({ inputShow: true, commentPlaceholder, addComment: { ...addComment, username2: username1}})
  }
})