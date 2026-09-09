import { Form, Input, Button, Card, message, Select } from 'antd'
import { useNavigate } from 'react-router-dom'
import { articleAPI } from '../services/api'
import { authService } from '../services/auth'
import './CreateArticle.css'

function CreateArticle() {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const [loading, setLoading] = false

  if (!authService.isLoggedIn()) {
    message.error('请先登录')
    navigate('/login')
    return null
  }

  const onFinish = async (values: any) => {
    setLoading(true)
    try {
      await articleAPI.create({
        title: values.title,
        content: values.content,
        summary: values.summary,
        category: values.category,
        published: true,
      })
      message.success('文章发布成功')
      navigate('/')
    } catch (error) {
      message.error('发布失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="create-article">
      <Card title="发布新文章">
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            name="title"
            label="标题"
            rules={[{ required: true, message: '请输入文章标题' }]}
          >
            <Input placeholder="请输入文章标题" size="large" />
          </Form.Item>

          <Form.Item
            name="category"
            label="分类"
            rules={[{ required: true, message: '请选择分类' }]}
          >
            <Select placeholder="请选择分类">
              <Select.Option value="技术">技术</Select.Option>
              <Select.Option value="生活">生活</Select.Option>
              <Select.Option value="随笔">随笔</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="summary"
            label="摘要"
            rules={[{ required: true, message: '请输入文章摘要' }]}
          >
            <Input.TextArea placeholder="请输入文章摘要" rows={2} />
          </Form.Item>

          <Form.Item
            name="content"
            label="内容"
            rules={[{ required: true, message: '请输入文章内容' }]}
          >
            <Input.TextArea placeholder="请输入文章内容" rows={10} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large" loading={loading}>
              发布文章
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default CreateArticle
