import { useParams } from 'react-router-dom'
import { Card, Spin, Empty, Button, Space, Divider } from 'antd'
import { useEffect, useState } from 'react'
import { User, Article } from '../types'
import { userAPI } from '../services/api'
import './UserProfile.css'

function UserProfile() {
  const { id } = useParams<{ id: string }>()
  const [user, setUser] = useState<User | null>(null)
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (id) {
      fetchUserProfile()
    }
  }, [id])

  const fetchUserProfile = async () => {
    setLoading(true)
    try {
      const userResponse = await userAPI.getProfile(Number(id))
      setUser(userResponse.data)
      const articlesResponse = await userAPI.getUserArticles(Number(id))
      setArticles(articlesResponse.data.data || [])
    } catch (error) {
      console.error('获取用户信息失败:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <Spin size="large" style={{ display: 'flex', justifyContent: 'center', padding: '50px' }} />
  }

  if (!user) {
    return <Empty description="用户不存在" />
  }

  return (
    <div className="user-profile">
      <Card>
        <div className="profile-header">
          <div className="avatar">
            <img src={user.avatarUrl || 'https://via.placeholder.com/100'} alt={user.nickname} />
          </div>
          <div className="info">
            <h1>{user.nickname}</h1>
            <p>{user.bio}</p>
            <Space>
              <span>粉丝: {user.followersCount}</span>
              <span>关注: {user.followingCount}</span>
            </Space>
            <Button type="primary" style={{ marginTop: '10px' }}>
              关注
            </Button>
          </div>
        </div>
      </Card>

      <Card title="发布的文章" style={{ marginTop: '30px' }}>
        {articles.length === 0 ? (
          <Empty description="该用户还没有发布任何文章" />
        ) : (
          articles.map((article) => (
            <div key={article.id} className="article-item">
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
              <Divider />
            </div>
          ))
        )}
      </Card>
    </div>
  )
}

export default UserProfile
