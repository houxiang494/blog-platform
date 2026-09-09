import { Form, Input, Button, Card, message } from 'antd'
import { useNavigate, Link } from 'react-router-dom'
import { authService } from '../services/auth'
import './Auth.css'

function Register() {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const [loading, setLoading] = false

  const onFinish = async (values: any) => {
    if (values.password !== values.confirmPassword) {
      message.error('两次输入的密码不一致')
      return
    }

    setLoading(true)
    try {
      await authService.register(values.username, values.email, values.password, values.nickname)
      message.success('注册成功')
      navigate('/')
    } catch (error) {
      message.error('注册失败，请检查信息后重试')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <Card className="auth-card" title="注册">
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            name="username"
            label="用户名"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>

          <Form.Item
            name="email"
            label="邮箱"
            rules={[{ required: true, message: '请输入邮箱' }, { type: 'email' }]}
          >
            <Input placeholder="请输入邮箱" />
          </Form.Item>

          <Form.Item
            name="nickname"
            label="昵称"
            rules={[{ required: true, message: '请输入昵称' }]}
          >
            <Input placeholder="请输入昵称" />
          </Form.Item>

          <Form.Item
            name="password"
            label="密码"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="确认密码"
            rules={[{ required: true, message: '请再次输入密码' }]}
          >
            <Input.Password placeholder="请再次输入密码" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              注册
            </Button>
          </Form.Item>

          <p>
            已有账号? <Link to="/login">去登录</Link>
          </p>
        </Form>
      </Card>
    </div>
  )
}

export default Register
