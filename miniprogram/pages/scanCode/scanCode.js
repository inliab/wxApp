// pages/scanCode/scanCode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  scan:function(event)
  {
    wx.scanCode({
      onlyFromCamera:true,
      scanType:['barCode'],
      success:res => 
      {

        wx.cloud.callFunction
        ({
          // 要调用的云函数名称
          name: 'book',
          // 传递给云函数的参数
          data: 
          {
            isbn: res.result
          },
          success: res => 
          {
            console.log(res);
          },
          fail: err => 
          {
            console.log(err);
          }
        })

      },

      fail:err => 
      {
        console.log(err);
      }
    })
  }
})