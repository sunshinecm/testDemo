const app = getApp();

Page({
    data: {
          scale: 14 , 
      latitude: 23.0121774500,
      longitude: 113.0617646500,
       markers: [
        {
          id: "1",
          latitude:23.0121774500,
          longitude: 113.0617646500,
          width: 30,
          height: 25,
          iconPath: "/images/car.png",// 图片
          zIndex: 0,
          label: {
            content : "",
            fontSize: "20rpx",
            color: "#656565",
        
          }
        }
      ]
    },

    onLoad(query) {

    },
    onReady() {
        // 页面加载完成
    },
    onHide() {
        // 页面隐藏
    },
    onUnload() {
        // 页面被关闭
    },
});
