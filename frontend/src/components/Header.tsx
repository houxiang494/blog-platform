import { Layout, Menu, Button, Space } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { PlusOutlined, LogoutOutlined, LoginOutlined } from '@ant-design/icons'
import { authService } from '../services/auth'
import './Header.css'

const { Header } = Layout

function HeaderComponent() {
  const navigate = useNavigate()
  const isLoggedIn = authService.isLoggedIn()

  const handleLogout = () => {
    authService.logout()
    navigate('/')
  }

  return (
    <Header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>📝 Blog Platform</h1>
        </Link>

        <Menu theme="dark" mode="horizontal" style={{ flex: 1, marginLeft: '50px' }}>
          <Menu.Item key="home">
            <Link to="/">首页</Link>
          </Menu.Item>
        </Menu>

        <Space>
          {isLoggedIn ? (
            <>
              <Button type="primary" icon={<PlusOutlined />}>
                <Link to="/create">发布文章</Link>
              </Button>
              <Button icon={<LogoutOutlined />} onClick={handleLogout}>
                登出
              </Button>
            </>
          ) : (
            <>
              <Button type="primary" icon={<LoginOutlined />}>
                <Link to="/login">登录</Link>
              </Button>
              <Button>
                <Link to="/register">注册</Link>
              </Button>
            </>
          )}
        </Space>
      </div>
    </Header>
  )
}

export default HeaderComponent
