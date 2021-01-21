/**
 * 通过判断登录、权限 动态生成Route
 */
import React, { Suspense, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { RouteList } from '../../route/Index'
import { useStore } from '../../store/context'

interface IRoute {
  path: string,
  name: string,
  redirect?: string | null,
  component: any,
  needLogin?: boolean,
  auth?: string[]
}

const PrivateRoute: React.FC<any> = () => {
  const history = useHistory()
  const [store] = useStore()

  useEffect(() => {
  
  }, [])

  
  return (
    <Switch>
      {
        // 动态生成路由
        RouteList.map((item: IRoute, index: number) => {
          return <Route
            key={index}
            path={item.path}
            exact
            render={props => { // 渲染route
              const _redirect: string | null = item.redirect ? item.redirect : ''
              if (_redirect) {
                return <Redirect
                  to={{
                    pathname: _redirect,
                    state: { from: props.location }
                  }}
                />
              }
              if (!store.isLogin) { // 已登录
                if (!item.auth) { // 没有权限限制
                  return <Suspense fallback={<h1>loading</h1>}>
                    <item.component {...props} />
                  </Suspense>
                } else { // 有权限限制
                  let _arr: string[] = [];
                  if (_arr.includes('auth')) { // 拥有权限
                    return <Suspense fallback={<h1>loading</h1>}>
                      <item.component {...props} />
                    </Suspense>
                  } else { // 未拥有权限
                    // 重定向到未拥有权限页
                    return <Redirect
                      to={{
                        pathname: '/noPermissions',
                        state: { from: props.location }
                      }}
                    />
                  }
                }
              } else { // 未登录
                // 重定向到登录页
                return <Redirect
                  to={{
                    pathname: '/login',
                    state: { from: props.location }
                  }}
                />
              }
            }}
          />
        })
      }
    </Switch>
  )
}


export default PrivateRoute