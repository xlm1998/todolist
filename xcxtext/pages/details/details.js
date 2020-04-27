// pages/details/details.js
const urls=require('../../api/api')

Page({

  /**
   * 页面的初始数据
   */
  data: {
   obj:{},flag:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   wx.setNavigationBarTitle({
     title: '详情',
   })
   if(this.data.flag){
    wx.showLoading({
      title: '加载中',
    })
  }
   console.log(options)
   let {id}=options
   console.log(id)
   wx.request({
    url: `https://api.douban.com/v2/movie/subject/${id}?apikey=0b2bdeda43b5688921839c8ecb20399b`,
    header:{
       'content-type':'application/text'
    },
    success:(res)=>{
     console.log(res.data)
     let obj={
       img:res.data.images.small,
       title:res.data.original_title.slice(0,9),
       year:res.data.year,
       huo:res.data.countries[0],
       ztitle:res.data.title.slice(0,9),
       data:res.data.mainland_pubdate,
       lone:res.data.durations[0],
       lei:res.data.genres[0],
       lei:res.data.genres[1],
       jian:res.data.summary
     }
     console.log(obj)
    this.setData({obj:obj,flag:false})
    if(!this.data.flag){
      wx.hideLoading()
     }
       
    }
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