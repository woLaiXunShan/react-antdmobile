import { IS_LOGIN } from './actionTypes'

export default (state: any, action: any) => {
  switch (action.type) {
    case IS_LOGIN:
      state.isLogin = action.value
      sessionStorage.isLogin = state.isLogin
      return state
    default:
      return state
  }
}