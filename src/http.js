/**
 * http配置
 */
// 引入axios以及element ui中的loading和message组件
import axios from 'axios'
import {
  Loading,
  Message
} from 'element-ui'
axios.defaults.withCredentials = true

// 新建axios拦截器对象
let http = axios.create({
  baseURL: 'http://192.168.1.34:8081',
  withCredentials: true
})
http.interceptors.request.use(config => {
  return config
}, error => {
  Message.error({
    message: 'request error'
  })
  return Promise.reject(error)
})
// http响应拦截器
http.interceptors.response.use(response => { // 响应成功关闭loading
  if (response.data.status == 200) {
    return response
  } else {
    console.log(response);
    Message.error({
      message: 'Failed to get data, please try again'
    })
  }
}, error => {
  Message.error({
    message: 'response error'
  })
  return Promise.reject(error)
})

// 新建axios拦截器对象
let httpl = axios.create({
  baseURL: 'http://192.168.1.34:8081',
  withCredentials: true
})
// http请求拦截器
let loadinginstace
httpl.interceptors.request.use(config => {
  // element ui Loading方法
  loadinginstace = Loading.service({
    fullscreen: true
  })
  return config
}, error => {
  loadinginstace.close()
  Message.error({
    message: 'request error'
  })
  return Promise.reject(error)
})
// http响应拦截器
httpl.interceptors.response.use(response => { // 响应成功关闭loading
  loadinginstace.close();
  if (response.data.status == 200) {
    return response
  } else {
    console.log(response);
    Message.error({
      message: 'Failed to get data, please try again'
    })
  }
}, error => {
  loadinginstace.close()
  Message.error({
    message: 'response error'
  })
  return Promise.reject(error)
})

export {
  axios,
  http,
  httpl
}
