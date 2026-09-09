import { useState, useEffect } from 'react'
import { Card, List, Space, Button, Empty, Spin, Tag } from 'antd'
import { EyeOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { Article } from '../types'
import { articleAPI } from '../services/api'
import './Home.css'

function Home() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchArticles()
  }, [page])

  const fetchArticles = async () => {
    setLoading(true)
    try {
      const response = await articleAPI.getList(page, 10)
      setArticles(response.data.data || [])
    } catch (error) {
      console.error('获取文章列表失败:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading && articles.length === 0) {
    return <Spin size="large" style={{ display: 'flex', justifyContent: 'center', padding: '50px' }} />
  }

  return (
    <div className="home">
      <h1>最新文章</h1>
      {articles.length === 0 ? (
        <Empty description="暂无文章" />
      ) : (
        <List
          dataSource={articles}
          renderItem={(article) => (
            <Card className="article-card" key={article.id}>
              <Link to={`/article/${article.id}`}>
                <h2>{article.title}</h2>
              </Link>
              <p className="summary">{article.summary || article.content.substring(0, 100)}...</p>
              <div className="article-meta">
                <Space>
                  <Tag color="blue">{article.category}</Tag>
                  <span>作者: <Link to={`/user/${article.author.id}`}>{article.author.nickname}</Link></span>
                </Space>
              </div>
              <div className="article-stats">
                <Space>
                  <span>
                    <EyeOutlined /> {article.viewCount}
                  </span>
                  <span>
                    <LikeOutlined /> {article.likeCount}
                  </span>
                  <span>
                    <MessageOutlined /> {article.commentCount}
                  </span>
                </Space>
              </div>
            </Card>
          )}
        />
      )}
    </div>
  )
}

export default Home
