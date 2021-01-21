import React, { lazy } from 'react';

/**
 * 路由懒加载
 * @param {String} filename 文件路径
 */
const lazyRouter = (filename: string) => {
  return lazy(() => import(`../pages/${filename}`))
}

export const RouteMap = [
  { path: '/', name: 'Home', title: '首页', notMenu: true, component: lazyRouter('Home/Index') },
  
]

let routeList: any[] = []
let neatenRouteMap = (list: any[]) => {
  list.forEach((item: any) => {
    if (item.children && item.children.length) {
      neatenRouteMap(item.children)
    } else {
      routeList.push(item)
    }
  })
}
neatenRouteMap(RouteMap)

export const RouteList = routeList
// 登录后默认跳转的地址
export const loginToHome = '/'
