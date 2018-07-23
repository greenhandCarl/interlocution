// pages/reply/reply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wordCounts: 0,
    wordValue: ''
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
    this.setData({ wordCounts, wordValue })
  },
  clearValue: function (e) {
    let { wordCounts, wordValue } = this.data
    wordCounts = 0
    wordValue = ''
    this.setData({ wordCounts, wordValue })
  },
  saveValue: function (e) {
    let { wordCounts, wordValue } = this.data
    wordCounts = 0
    wordValue = ''
    this.setData({ wordCounts, wordValue })
    this.openLoading()
    setTimeout(() => {
      this.openToast()
      wx.navigateTo({
        url: '../questionInfo/questionInfo'
      })
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
  }
})