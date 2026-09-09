import { Form, Input, Button, Card, message } from 'antd'
import { useNavigate, Link } from 'react-router-dom'
import { authService } from '../services/auth'
import './Auth.css'

function Login() {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const [loading, setLoading] = false

  const onFinish = async (values: any) => {
    setLoading(true)
    try {
      await authService.login(values.email, values.password)
      message.success('登录成功')
      navigate('/')
    } catch (error) {
      message.error('登录失败，请检查邮箱和密码')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <Card className="auth-card" title="登录">
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            name="email"
            label="邮箱"
            rules={[{ required: true, message: '请输入邮箱' }, { type: 'email' }]}
          >
            <Input placeholder="请输入邮箱" />
          </Form.Item>

          <Form.Item
            name="password"
            label="密码"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              登录
            </Button>
          </Form.Item>

          <p>
            还没有账号? <Link to="/register">去注册</Link>
          </p>
        </Form>
      </Card>
    </div>
  )
}

export default Login
