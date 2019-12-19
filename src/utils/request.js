import axios from 'axios'
// 开发环境 就会在loclahost:8080变成 localhsot:8080/api
const BASEURL = process.env.NODE_ENV === 'production' ? '' : '/api'
// 创建axios 把赋值给service
const service = axios.create({
  baseURL: BASEURL, // localhost:8080/api
  timeout: 1000,
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log(response)
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
export default service