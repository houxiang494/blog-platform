import { useParams, useNavigate } from 'react-router-dom'
import { Card, Spin, Empty, Button, Space, Comment, CommentList, message } from 'antd'
import { useEffect, useState } from 'react'
import { Article, Comment as CommentType } from '../types'
import { articleAPI, commentAPI } from '../services/api'
import './ArticleDetail.css'

function ArticleDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [article, setArticle] = useState<Article | null>(null)
  const [comments, setComments] = useState<CommentType[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (id) {
      fetchArticle()
      fetchComments()
    }
  }, [id])

  const fetchArticle = async () => {
    setLoading(true)
    try {
      const response = await articleAPI.getDetail(Number(id))
      setArticle(response.data)
    } catch (error) {
      message.error('获取文章失败')
      navigate('/')
    } finally {
      setLoading(false)
    }
  }

  const fetchComments = async () => {
    try {
      const response = await commentAPI.getList(Number(id))
      setComments(response.data.data || [])
    } catch (error) {
      console.error('获取评论失败:', error)
    }
  }

  if (loading) {
    return <Spin size="large" style={{ display: 'flex', justifyContent: 'center', padding: '50px' }} />
  }

  if (!article) {
    return <Empty description="文章不存在" />
  }

  return (
    <div className="article-detail">
      <Card>
        <h1>{article.title}</h1>
        <div className="article-header">
          <span>作者: {article.author.nickname}</span>
          <span>分类: {article.category}</span>
          <span>发布时间: {new Date(article.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="article-content">
          {article.content}
        </div>
        <div className="article-footer">
          <Space>
            <span>浏览: {article.viewCount}</span>
            <span>点赞: {article.likeCount}</span>
            <span>评论: {article.commentCount}</span>
          </Space>
        </div>
      </Card>

      <Card title="评论" style={{ marginTop: '30px' }}>
        {comments.length === 0 ? (
          <Empty description="暂无评论" />
        ) : (
          <CommentList
            comments={comments.map((c) => ({
              author: c.author.nickname,
              avatar: c.author.avatarUrl,
              content: c.content,
              datetime: new Date(c.createdAt).toLocaleString(),
            }))}
          />
        )}
      </Card>
    </div>
  )
}

export default ArticleDetail
