# 🚀 Blog Platform - 内容创作平台

一个现代化的全栈博客平台，使用 **React + Spring Boot** 构建。支持用户创建、管理和分享高质量内容。

## ✨ 核心功能

### 用户相关
- 📝 用户注册和登录（JWT认证）
- 👤 个人资料管理
- 🔐 密码安全加密存储

### 内容管理
- ✍️ 创建、编辑、删除文章
- 📚 文章分类和标签管理
- 🔍 全文搜索功能
- 📌 文章置顶和草稿保存

### 互动功能
- 👍 点赞系统
- 💬 评论系统
- 📊 热门文章排行
- 👥 用户关注功能

## 🛠️ 技术栈

### 前端 (Frontend)
- **React 18** - UI框架
- **TypeScript** - 类型安全
- **Ant Design** - UI组件库
- **Axios** - HTTP客户端
- **React Router v6** - 路由管理
- **Vite** - 现代构建工具

### 后端 (Backend)
- **Spring Boot 3.x** - Java框架
- **Spring Security** - 认证和授权
- **Spring Data JPA** - ORM
- **MySQL 8.0** - 数据库
- **JWT** - Token认证
- **Lombok** - 代码简化
- **Maven** - 包管理

### 工具
- **Docker** - 容器化
- **Git** - 版本控制

## 📁 项目结构

```
blog-platform/
├── frontend/                 # React前端项目
│   ├── src/
│   │   ├── components/      # React组件
│   │   ├── pages/           # 页面
│   │   ├── services/        # API服务
│   │   ├── hooks/           # 自定义Hooks
│   │   ├── utils/           # 工具函数
│   │   ├── styles/          # 全局样式
│   │   ├── types/           # TypeScript类型定义
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
├── backend/                  # Spring Boot后端项目
│   ├── src/
│   │   └── main/java/com/blog/
│   │       ├── controller/  # 控制器
│   │       ├── service/     # 业务逻辑
│   │       ├── repository/  # 数据访问
│   │       ├── entity/      # 数据模型
│   │       ├── dto/         # 数据传输对象
│   │       ├── config/      # 配置类
│   │       ├── security/    # 安全认证
│   │       ├── exception/   # 异常处理
│   │       └── BlogApplication.java
│   ├── pom.xml
│   └── application.yml
│
├── docker-compose.yml        # Docker编排
└── README.md
```

## 🚀 快速开始

### 前置条件
- Node.js 16+
- Java 17+
- MySQL 8.0+
- Docker (可选)

### 使用Docker Compose (推荐)

```bash
# 启动所有服务
docker-compose up -d

# 访问应用
# 前端: http://localhost:3000
# 后端API: http://localhost:8080
```

### 本地开发

#### 1. 启动MySQL
```bash
docker run --name mysql-blog -e MYSQL_ROOT_PASSWORD=root123 -e MYSQL_DATABASE=blog_db -p 3306:3306 -d mysql:8.0
```

#### 2. 启动后端
```bash
cd backend
mvn spring-boot:run
```

后端运行在：`http://localhost:8080`

#### 3. 启动前端
```bash
cd frontend
npm install
npm run dev
```

前端运行在：`http://localhost:5173`

## 📚 API文档

### 认证相关
- `POST /api/auth/register` - 注册
- `POST /api/auth/login` - 登录
- `POST /api/auth/refresh` - 刷新Token

### 文章相关
- `GET /api/articles` - 获取文章列表
- `GET /api/articles/:id` - 获取文章详情
- `POST /api/articles` - 创建文章
- `PUT /api/articles/:id` - 编辑文章
- `DELETE /api/articles/:id` - 删除文章
- `GET /api/articles/search?q=keyword` - 搜索文章

### 评论相关
- `GET /api/articles/:id/comments` - 获取评论
- `POST /api/articles/:id/comments` - 添加评论
- `DELETE /api/comments/:id` - 删除评论

### 用户相关
- `GET /api/users/:id` - 获取用户信息
- `PUT /api/users/:id` - 更新用户信息
- `GET /api/users/:id/articles` - 获取用户文章
- `POST /api/users/:id/follow` - 关注用户

## 💾 数据库设计

主要表结构：
- `users` - 用户表
- `articles` - 文章表
- `comments` - 评论表
- `likes` - 点赞表
- `follows` - 关注表
- `categories` - 分类表
- `tags` - 标签表

## 🔐 安全特性

- ✅ JWT Token认证
- ✅ 密码加密存储（BCrypt）
- ✅ CORS配置
- ✅ SQL注入防护
- ✅ XSS防护

## 📊 项目进度

- [x] 项目初始化
- [ ] 后端API开发
- [ ] 前端UI开发
- [ ] 认证系统
- [ ] 文章管理功能
- [ ] 评论和点赞
- [ ] 搜索功能
- [ ] Docker部署
- [ ] 单元测试
- [ ] 部署到云平台

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📝 许可证

MIT License

## 👨‍💻 作者

**houxiang494** - 2026年求职作品集项目

---

## 📞 技术栈亮点总结

| 方面 | 特点 |
|------|------|
| **前端** | React 18 + TypeScript，Ant Design美观UI，Vite极速开发 |
| **后端** | Spring Boot 3.x，JWT认证，完整的RESTful API设计 |
| **数据库** | MySQL规范设计，支持复杂查询和搜索 |
| **部署** | Docker容器化，一键启动 |
| **代码质量** | 分层架构，清晰的代码结构，易于维护和扩展 |
