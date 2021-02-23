import axios from 'axios';

axios.defaults.baseUrl = '/api';

// axios.create({
//   baseURL: process.env.BASE_API,
//   withCredentials: true,
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
//   },
//   timeout: 5000,
// })

axios.interceptors.request.use(function (req) {
  // console.log(req);
  //window.localStorage.getItem("accessToken") 获取token的value
  // let token = window.localStorage.getItem("accessToken")
  // if (token) {
  //   //将token放到请求头发送给服务器,将tokenkey放在请求头中
  //   config.headers.accessToken = token;
  //   //也可以这种写法
  //   // config.headers['accessToken'] = Token;
  //   return config;
  // }
  return req;
}, function (error) {
  return Promise.reject(error);
});


axios.interceptors.response.use(function (res) {
  // 对响应数据做点什么
  return res;
}, function (error) {
  return Promise.reject(error);
});


export default axios;
