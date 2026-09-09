import axios from 'axios'
import { AuthResponse, Article, Comment } from '../types'

const API_BASE_URL = '/api'

const api = axios.create({
  baseURL: API_BASE_URL,
})

// 请求拦截器 - 添加token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 认证API
export const authAPI = {
  register: (data: any) => api.post<AuthResponse>('/auth/register', data),
  login: (data: any) => api.post<AuthResponse>('/auth/login', data),
  refresh: () => api.post('/auth/refresh'),
}

// 文章API
export const articleAPI = {
  getList: (page: number = 1, pageSize: number = 10) =>
    api.get(`/articles?page=${page}&pageSize=${pageSize}`),
  getDetail: (id: number) => api.get<Article>(`/articles/${id}`),
  create: (data: any) => api.post('/articles', data),
  update: (id: number, data: any) => api.put(`/articles/${id}`, data),
  delete: (id: number) => api.delete(`/articles/${id}`),
  search: (query: string) => api.get(`/articles/search?q=${query}`),
}

// 评论API
export const commentAPI = {
  getList: (articleId: number) => api.get(`/articles/${articleId}/comments`),
  create: (articleId: number, data: any) => api.post(`/articles/${articleId}/comments`, data),
  delete: (id: number) => api.delete(`/comments/${id}`),
}

// 用户API
export const userAPI = {
  getProfile: (id: number) => api.get(`/users/${id}`),
  update: (id: number, data: any) => api.put(`/users/${id}`, data),
  getUserArticles: (id: number) => api.get(`/users/${id}/articles`),
  follow: (id: number) => api.post(`/users/${id}/follow`),
}

export default api
