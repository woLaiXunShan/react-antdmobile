const initialState = {
  isLogin: sessionStorage.isLogin ? JSON.parse(sessionStorage.isLogin) : false,
}

export default initialState