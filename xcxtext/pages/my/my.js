// pages/my/my.js

const urls=require('../../api/api')
  console.log(urls)
Page({

  /**
   * 页面的初始数据
   */
  data: {
       hotmove:[],
       flag:true,
       move:[],
       shang:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(this.data.flag){
      wx.showLoading({
        title: '加载中',
      })
    }
   
        wx.request({
          url: urls.hotmove,
          header:{
             'content-type':'application/text'
          },
          success:(res)=>{
           console.log(res.data.subjects)
             this.setData({hotmove:res.data.subjects})
           
          }
        })
        wx.request({
          url: urls.move250,
          header:{
             'content-type':'application/text'
          },
          success:(res)=>{
           console.log(res.data.subjects)
             this.setData({move:res.data.subjects})
            
          }
        })
        wx.request({
          url: urls.shangmove,
          header:{
             'content-type':'application/text'
          },
          success:(res)=>{
           console.log(res.data.subjects)
             this.setData({shang:res.data.subjects,flag:false})
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

  },
  godet(options){
    console.log(options)
    let {id}=options.currentTarget.dataset
    console.log(id)
        wx.navigateTo({
          url: `/pages/details/details?id=${id}`,
        })
  }
})