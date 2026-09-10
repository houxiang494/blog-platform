# 🎯 Blog Platform - 全栈博客平台

一个现代化的、功能完整的博客平台，采用 **React + Spring Boot + MySQL** 技术栈，支持用户认证、文章发布、评论交互等功能。

![GitHub](https://img.shields.io/badge/GitHub-houxiang494-blue?logo=github)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-In%20Development-orange)

---

## 🌟 主要特性

### 用户系统
- ✅ **用户注册和登录** - 基于JWT认证
- ✅ **密码安全** - BCrypt加密存储
- ✅ **用户资料** - 个人主页和资料编辑
- ✅ **用户关注** - 关注其他用户（可扩展）

### 文章系统
- ✅ **文章发布** - 支持标题、内容、摘要、分类
- ✅ **文章编辑** - 修改已发布文章
- ✅ **文章删除** - 删除自己的文章
- ✅ **文章搜索** - 按关键词搜索文章
- ✅ **文章分类** - 按分类浏览文章
- ✅ **浏览统计** - 记录文章浏览次数

### 互动功能
- ✅ **文章评论** - 在文章下方发表评论
- ✅ **评论管理** - 删除自己的评论
- ✅ **评论回复** - 回复其他评论（可扩展）
- ✅ **点赞功能** - 点赞文章（可扩展）

### 技术特点
- ✅ **响应式设计** - 支持移动端
- ✅ **现代化UI** - 使用 Ant Design 组件库
- ✅ **类型安全** - 完整的 TypeScript 类型定义
- ✅ **API文档** - Swagger/OpenAPI 支持
- ✅ **容器化部署** - Docker 和 Docker Compose
- ✅ **跨域支持** - CORS 配置完整

---

## 🏗️ 项目架构

```
blog-platform/
├── backend/                              # 后端 Spring Boot 项目
│   ├── src/main/java/com/blog/
│   │   ├── entity/                       # 数据库实体类
│   │   │   ├── User.java
│   │   │   ├── Article.java
│   │   │   └── Comment.java
│   │   ├── repository/                   # 数据访问层 (Repository)
│   │   │   ├── UserRepository.java
│   │   │   ├── ArticleRepository.java
│   │   │   └── CommentRepository.java
│   │   ├── service/                      # 业务逻辑层 (Service)
│   │   │   ├── AuthService.java
│   │   │   ├── ArticleService.java
│   │   │   └── CommentService.java
│   │   ├── controller/                   # API接口层 (Controller)
│   │   │   ├── AuthController.java
│   │   │   ├── ArticleController.java
│   │   │   └── CommentController.java
│   │   ├── dto/                          # 数据传输对象
│   │   │   ├── JwtResponse.java
│   │   │   ├── LoginRequest.java
│   │   │   └── RegisterRequest.java
│   │   ├── security/                     # 安全配置
│   │   │   └── JwtTokenProvider.java
│   │   ├── config/                       # 应用配置
│   │   │   └── SecurityConfig.java
│   │   └── BlogApplication.java          # 启动类
│   ├── src/main/resources/
│   │   └── application.yml               # 应用配置文件
│   ├── pom.xml                           # Maven 依赖配置
│   ├── Dockerfile                        # Docker 镜像配置
│   └── .gitignore
│
├── frontend/                             # 前端 React + TypeScript 项目
│   ├── src/
│   │   ├── components/                   # React 组件
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/                        # 页面组件
│   │   │   ├── Home.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   ├── ArticleDetail.tsx
│   │   │   ├── CreateArticle.tsx
│   │   │   └── UserProfile.tsx
│   │   ├── services/                     # API 服务
│   │   │   ├── api.ts
│   │   │   └── auth.ts
│   │   ├── types/                        # TypeScript 类型定义
│   │   │   └── index.ts
│   │   ├── App.tsx                       # 主应用组件
│   │   ├── main.tsx                      # 入口文件
│   │   └── index.css                     # 全局样式
│   ├── public/                           # 静态资源
│   ├── package.json                      # NPM 依赖配置
│   ├── tsconfig.json                     # TypeScript 配置
│   ├── vite.config.ts                    # Vite 构建配置
│   ├── Dockerfile                        # Docker 镜像配置
│   ├── nginx.conf                        # Nginx 配置
│   └── .gitignore
│
├── docker-compose.yml                    # Docker Compose 配置
├── .gitignore                            # Git 忽略文件
├── README.md                             # 项目说明
├── LOCAL_SETUP.md                        # 本地开发指南
└── init-db.sql                           # 数据库初始化脚本
```

---

## 🛠️ 技术栈

### 后端
- **Java 17** - 编程语言
- **Spring Boot 3.1.5** - Web 框架
- **Spring Data JPA** - ORM 框架
- **Spring Security** - 安全框架
- **MySQL 8.0** - 关系型数据库
- **JWT (JJWT)** - 令牌认证
- **Maven 3.8.4** - 包管理工具
- **Lombok** - 代码生成库

### 前端
- **React 18.2** - UI 框架
- **TypeScript 5.0** - 类型化语言
- **Vite 4.4** - 构建工具
- **React Router 6.16** - 路由库
- **Axios 1.5** - HTTP 客户端
- **Ant Design 5.11** - UI 组件库
- **Zustand 4.4** - 状态管理（可选）

### DevOps
- **Docker** - 容器化
- **Docker Compose** - 多容器编排
- **Nginx** - 反向代理

---

## 🚀 快速开始

### 前提条件

- [Java 17+](https://www.oracle.com/java/technologies/downloads/#java17)
- [Node.js 16+](https://nodejs.org/)
- [Maven 3.8.4+](https://maven.apache.org/)
- [MySQL 8.0+](https://www.mysql.com/)
- [Docker & Docker Compose](https://www.docker.com/) （可选，用于容器化部署）

### 方式一：Docker Compose（推荐 - 最简单）

```bash
# 1. 克隆项目
git clone https://github.com/houxiang494/blog-platform.git
cd blog-platform

# 2. 一键启动
docker-compose up -d

# 3. 等待 1-2 分钟服务启动

# 4. 访问应用
# 前端: http://localhost:3000
# 后端API: http://localhost:8080/api
```

**停止服务：**
```bash
docker-compose down
```

### 方式二：本地开发（完全可控）

详细步骤请参考 [LOCAL_SETUP.md](./LOCAL_SETUP.md)

**简要步骤：**

```bash
# 1. 创建数据库
mysql -u root -p
CREATE DATABASE blog_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
EXIT;

# 2. 启动后端（一个终端）
cd backend
mvn spring-boot:run
# 等待看到: "Started BlogApplication in X.XXX seconds"

# 3. 启动前端（新终端）
cd frontend
npm install
npm run dev
# 等待看到: "Local: http://localhost:5173/"

# 4. 打开浏览器
# http://localhost:5173
```

---

## 📖 API 文档

### 认证相关

#### 用户注册
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123",
  "nickname": "测试用户"
}

# 响应
{
  "token": "eyJhbGciOiJIUzUxMiJ9...",
  "type": "Bearer",
  "id": 1,
  "username": "testuser",
  "email": "test@example.com",
  "nickname": "测试用户"
}
```

#### 用户登录
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "password123"
}

# 响应同上
```

### 文章相关

#### 获取文章列表
```http
GET /api/articles?page=0&pageSize=10

# 响应
{
  "content": [
    {
      "id": 1,
      "title": "文章标题",
      "content": "文章内容",
      "summary": "文章摘要",
      "author": { ... },
      "category": "技术",
      "viewCount": 100,
      "likeCount": 10,
      "commentCount": 5,
      "published": true,
      "createdAt": "2026-09-09T12:00:00"
    }
  ],
  "totalElements": 50
}
```

#### 获取文章详情
```http
GET /api/articles/{id}

# 响应
{
  "id": 1,
  "title": "文章标题",
  ...
}
```

#### 创建文章
```http
POST /api/articles
Content-Type: application/json
Authorization: Bearer <token>

{
  "title": "新文章",
  "content": "文章内容",
  "summary": "文章摘要",
  "category": "技术",
  "published": true
}

# 响应
{ "id": 1, ... }
```

#### 更新文章
```http
PUT /api/articles/{id}
Content-Type: application/json
Authorization: Bearer <token>

{
  "title": "更新标题",
  "content": "更新内容",
  ...
}
```

#### 删除文章
```http
DELETE /api/articles/{id}
Authorization: Bearer <token>

# 响应: 204 No Content
```

#### 搜索文章
```http
GET /api/articles/search?q=关键词&page=0&pageSize=10
```

### 评论相关

#### 获取评论列表
```http
GET /api/articles/{articleId}/comments?page=0&pageSize=10
```

#### 创建评论
```http
POST /api/articles/{articleId}/comments
Content-Type: application/json
Authorization: Bearer <token>

{
  "content": "这是一条评论"
}
```

#### 删除评论
```http
DELETE /api/comments/{id}
Authorization: Bearer <token>
```

---

## 🗄️ 数据库设计

### users 表
```sql
CREATE TABLE users (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  nickname VARCHAR(255),
  bio TEXT,
  avatar_url VARCHAR(255),
  followers_count INT DEFAULT 0,
  following_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### articles 表
```sql
CREATE TABLE articles (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  content LONGTEXT,
  summary TEXT,
  author_id BIGINT NOT NULL,
  category VARCHAR(255),
  view_count INT DEFAULT 0,
  like_count INT DEFAULT 0,
  comment_count INT DEFAULT 0,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE
);
```

### comments 表
```sql
CREATE TABLE comments (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  content TEXT NOT NULL,
  article_id BIGINT NOT NULL,
  author_id BIGINT NOT NULL,
  reply_to_id BIGINT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE,
  FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE
);
```

---

## 🔐 安全性

### 认证和授权
- ✅ **JWT Token** - 无状态认证
- ✅ **BCrypt** - 密码加密
- ✅ **CORS** - 跨域资源共享控制
- ✅ **HTTPS** - 建议生产环境使用

### 最佳实践
1. **敏感信息**：生产环境中更改 JWT Secret
2. **数据库**：使用强密码和最小权限原则
3. **API验证**：所有修改操作都需要认证
4. **输入验证**：对所有用户输入进行验证

---

## 📝 项目配置

### 后端配置（application.yml）

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/blog_db
    username: root
    password: root123
  jpa:
    hibernate:
      ddl-auto: update

server:
  port: 8080
  servlet:
    context-path: /api

jwt:
  secret: your-secret-key-change-in-production
  expiration: 86400000  # 24小时
```

### 前端配置（vite.config.ts）

```typescript
export default defineConfig({
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})
```

---

## 🧪 测试

### 使用 VS Code REST Client 测试

1. 安装 [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) 插件
2. 创建 `test.http` 文件
3. 复制下面的请求测试

```http
### 注册用户
POST http://localhost:8080/api/auth/register
Content-Type: application/json

{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123",
  "nickname": "测试用户"
}

### 登录
POST http://localhost:8080/api/auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "password123"
}

### 获取文章列表
GET http://localhost:8080/api/articles?page=0&pageSize=10
```

---

## 🐛 故障排除

详见 [LOCAL_SETUP.md](./LOCAL_SETUP.md) 中的 **常见问题** 部分

常见问题：
- MySQL 连接失败
- Port 已占用
- 依赖下载很慢
- 跨域请求被拒绝

---

## 📚 相关文档

- [📖 本地开发指南](./LOCAL_SETUP.md)
- [🗄️ 数据库初始化脚本](./init-db.sql)
- [🐳 Docker 部署指南](./docker-compose.yml)

---

## 🚀 未来功能规划

- [ ] 文章分类管理
- [ ] 文章标签系统
- [ ] 用户关注和粉丝
- [ ] 文章点赞功能
- [ ] 文章评论点赞
- [ ] 私信系统
- [ ] 通知系统
- [ ] 文章推荐算法
- [ ] 用户权限管理（管理员）
- [ ] 内容审核系统
- [ ] 搜索引擎优化（SEO）
- [ ] 分析统计功能

---

## 📄 许可证

MIT License © 2026 houxiang494

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

---

## 📞 联系方式

- GitHub: [@houxiang494](https://github.com/houxiang494)
- Email: houxiang494@gmail.com

---

## ⭐ 如果这个项目对你有帮助，请给一个 Star！

**Happy Coding! 🎉**
