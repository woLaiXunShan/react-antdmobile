import { fetch } from './axios'

export const login: any = (data: any) => { // 登录
  return fetch(`/warrantLogin.do`, data, `post`)
}
export const loginOut: any = (data: any) => { // 登出
  return fetch(`/warrantLoginOut`, data, `post`)
}