// pages/log/log.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
         list:[],
         num:0,
         sum:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  add(e){
      
       let obj ={
        user:e.detail.value,
        done:false,
        type:false,
       }
     
       this.data.list.push(obj)
       console.log(this.data.list)
       this.setData({list:this.data.list})
       e.detail.value=""
    this.count()
  },
  del(e){
     console.log(e)
     let i=e.currentTarget.dataset.index
     console.log(i)
     this.data.list.splice(i,1)
     this.setData({list:this.data.list})
     this.count()
  },
  change(e){
    console.log(111)
    let i=e.currentTarget.dataset.index
    this.data.list[i].type=!this.data.list[i].type
    console.log(this.data.list)
    this.setData({list:this.data.list})
    this.count()
  },
 count(){
    
  let leng= this.data.list.filter((item)=>{
         return item.type==false
     })
    this.data.num=leng.length
    this.data.sum=this.data.list.length-leng.length
    this.setData({num:this.data.num,sum:this.data.sum})
     
 },
 show(e){
   let i =e.currentTarget.dataset.index
   this.data.list[i].zone=true
   this.setData({list:this.data.list})
 },
 show1(e){
  let i =e.currentTarget.dataset.index
  this.data.list[i].user=e.detail.value
  this.data.list[i].zone=false
  this.setData({list:this.data.list})
 }
})