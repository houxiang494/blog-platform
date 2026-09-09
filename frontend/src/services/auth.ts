import { authAPI } from './api'

export const authService = {
  // 注册
  register: async (username: string, email: string, password: string, nickname: string) => {
    const response = await authAPI.register({ username, email, password, nickname })
    const { token } = response.data
    localStorage.setItem('token', token)
    return response.data
  },

  // 登录
  login: async (email: string, password: string) => {
    const response = await authAPI.login({ email, password })
    const { token } = response.data
    localStorage.setItem('token', token)
    return response.data
  },

  // 登出
  logout: () => {
    localStorage.removeItem('token')
  },

  // 获取Token
  getToken: () => localStorage.getItem('token'),

  // 是否已登录
  isLoggedIn: () => !!localStorage.getItem('token'),
}
