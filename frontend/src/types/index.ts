// User类型
export interface User {
  id: number
  username: string
  email: string
  nickname: string
  bio: string
  avatarUrl: string
  followersCount: number
  followingCount: number
  createdAt: string
}

// Article类型
export interface Article {
  id: number
  title: string
  content: string
  summary: string
  author: User
  category: string
  viewCount: number
  likeCount: number
  commentCount: number
  published: boolean
  createdAt: string
  updatedAt: string
}

// Comment类型
export interface Comment {
  id: number
  content: string
  article: Article
  author: User
  replyToId: number
  createdAt: string
}

// Auth响应类型
export interface AuthResponse {
  token: string
  type: string
  id: number
  username: string
  email: string
  nickname: string
}
