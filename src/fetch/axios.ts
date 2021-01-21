import axios from 'axios'
import qs from 'qs';
// import { message } from 'antd';

export const baseURL = 'http://10.10.22.186:8888/bmp/'
const Axios = axios.create({
  baseURL: baseURL,
  timeout: 15000 // 请求超时时间
})

// 添加请求拦截器
Axios.interceptors.request.use((config: any) => {
  // 在发送请求之前做些什么
  return config;
}, (error: any) => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
Axios.interceptors.response.use((response: any) => {
  // 对响应数据做点什么
  return response.data
}, (error: any) => {
    return Promise.reject(error)
})

// 发起请求
export const fetch = (url: any, data: any, method = `GET`) => {
  data = data || ''
  if (method === `GET` || method === `get`) {
    return Axios.get(url, data.params ? data : {
      params: data
    })
  }
  if (method === 'DELETE' || method === 'delete') {
    return Axios.delete(url, data.params ? data : {
      params: data
    })
  }
  if (method === 'POST' || method === 'post') {
    return Axios.post(url, qs.stringify(data))
  }
  if (method === 'PATCH' || method === 'patch') {
    return Axios.post(url, data)
  }
  if (method === 'PUT' || method === 'put') {
    return Axios.post(url, data)
  }
}
