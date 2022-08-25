/**
 * Create By: Meng
 * Desc: window系列监听
 */

// 初始化系统
export function systemInit() {
  window.onload = function () {
    const u = navigator.userAgent;
    const info = {
      //浏览器版本信息
      trident: u.indexOf('Trident') > -1,
      presto: u.indexOf('Presto') > -1,
      webKit: u.indexOf('AppleWebKit') > -1,
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') > -1,
      mobile: !!u.match(/AppleWebKit.*Mobile.*/),
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+ Mac OS X/),
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
      iPhone: u.indexOf('iPhone') > -1,
      iPad: u.indexOf('iPad') > -1,
      webApp: u.indexOf('Safari') > -1, // Chrome/Safari/Mozilla
      intel: u.indexOf('Intel') > -1,
      weixin: u.indexOf('MicroMessenger') > -1 && u.replace(/.*(MicroMessenger\/[^\s]*).*/, "$1").replace("MicroMessenger/", "") || false,
    };
    console.log(info)
  }
  getWindowSize();
}

function getWindowSize() {

  // 获取窗口大小尺寸
  const app = document.getElementById('app');
  if (app) {
    const height = app.offsetHeight;
    const width = app.offsetWidth;
    console.log(width, height);
  }
}

// function srcollListener(divId, onScroll, interval = 100) {
//   let lastY = 0;
//   const body = document.getElementById(divId);
//   if (body) {
//     body.addEventListener("scroll", () => {
//       const topSize = body.scrollTop;
//       if (topSize - lastY > interval) {
//         onScroll(topSize, body.scrollHeight, body.offsetHeight);
//         lastY = topSize;
//       }
//       // console.log(topSize);
//       // console.log('offsetTop-------->',body.offsetTop);
//       // console.log('offsetHeight-------->',body.offsetHeight);
//       // console.log('scrollHeight-------->',body.scrollHeight);
//     });
//   }
// }