/**
 * Funciton: 配置编译环境和线上环境之间的切换文件
 * Desc:
 */
// baseUrl: 域名地址
let baseUrl = null;
// websocket 连接域名
let socketUrl = null;
// 网络图片地址
let imgBaseUrl = window.location.origin;

// 环境
if (process.env.NODE_ENV == 'development') { // 开发环境

  baseUrl = 'http://192.168.1.9:8802' // 后端adai
  // baseUrl = 'http://192.168.1.196:8801'                 // 后端kobe
  // baseUrl = 'http://192.168.1.9:8801'                 // 后端adai
  // baseUrl = 'http://192.168.1.49:8087'                  // Lucas接口域名
  // baseUrl = 'http://192.168.1.84:8802'                  // qiwen
  // baseUrl = 'http://192.168.1.5:8087'                     // gerg
  // socketUrl = `wss://${process.env.testUrl}/websocket`;
  socketUrl = `wss://${process.env.testUrl}/websocket`;
} else if (process.env.NODE_ENV == "production") { //正式环境(待配置)
  baseUrl = '/member'; // 正式环境接口域名
  socketUrl = `wss://ws.888b.com/websocket`;
}

export {
  baseUrl,
  socketUrl,
  imgBaseUrl
};
