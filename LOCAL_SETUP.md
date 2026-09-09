# 📖 本地开发运行指南

## 环境要求

✅ 已有：
- MySQL 8.0+ (需要运行)
- Navicat (数据库管理)
- VSCode (代码编辑)

需要安装：
- **JDK 17+** (Java开发) - [下载](https://www.oracle.com/java/technologies/downloads/#java17)
- **Node.js 16+** (前端开发) - [下载](https://nodejs.org/)
- **Maven 3.8.4+** (Java包管理) - [下载](https://maven.apache.org/download.cgi)
- **Git** (版本控制) - [下载](https://git-scm.com/)

---

## 🚀 快速启动（推荐 - 5分钟）

### 方式一：Docker Compose 启动（最简单）

**前提：** 安装 [Docker Desktop](https://www.docker.com/products/docker-desktop)

```bash
# 1. 克隆项目
git clone https://github.com/houxiang494/blog-platform.git
cd blog-platform

# 2. 一键启动所有服务
docker-compose up -d

# 3. 等待1-2分钟，然后访问
# 前端: http://localhost:3000
# 后端API: http://localhost:8080
# MySQL: localhost:3306
```

**停止服务：**
```bash
docker-compose down
```

---

## 🛠️ 本地开发运行（推荐 - 完全可控）

### 步骤 1️⃣：启动 MySQL

**使用你已有的MySQL和Navicat：**

```sql
-- 1. 在Navicat中创建新数据库
CREATE DATABASE IF NOT EXISTS blog_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 2. Spring Boot会自动创建表结构（application.yml中ddl-auto: update）
```

或直接在MySQL命令行：
```bash
mysql -u root -p
# 输入密码后执行：
CREATE DATABASE IF NOT EXISTS blog_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
EXIT;
```

### 步骤 2️⃣：启动后端服务

**打开VSCode的终端（Ctrl + `）：**

```bash
# 1. 进入后端目录
cd backend

# 2. 编译项目（首次需要下载依赖，约2-3分钟）
mvn clean package -DskipTests

# 3. 启动Spring Boot应用
mvn spring-boot:run

# 或者直接用Java运行
java -jar target/blog-platform-1.0.0.jar
```

**成功标志：** 看到如下输出
```
Started BlogApplication in X.XXX seconds (JVM running for X.XXX)
Tomcat started on port(s): 8080
```

**访问API：** http://localhost:8080/api

### 步骤 3️⃣：启动前端服务

**新开一个VSCode终端（Ctrl + Shift + `）：**

```bash
# 1. 进入前端目录
cd frontend

# 2. 安装依赖（首次需要约1-2分钟）
npm install

# 3. 启动开发服务器
npm run dev
```

**成功标志：** 看到
```
VITE v4.4.5 ready in XXX ms

➜  Local:   http://localhost:5173/
```

**访问前端：** http://localhost:5173

---

## 📋 数据库配置

### 方法一：修改配置文件

编辑 `backend/src/main/resources/application.yml`

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/blog_db?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
    username: root              # 改成你的MySQL用户名
    password: root123          # 改成你的MySQL密码
```

### 方法二：使用Navicat验证连接

1. 打开Navicat
2. 新建连接 → MySQL
3. 主机：`localhost`
4. 端口：`3306`
5. 用户名：`root`
6. 密码：`你的密码`
7. 点击"测试连接" ✓

---

## 🧪 测试API

### 使用Postman或VS Code REST Client

**1. 用户注册**
```http
POST http://localhost:8080/api/auth/register
Content-Type: application/json

{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123",
  "nickname": "测试用户"
}
```

**2. 用户登录**
```http
POST http://localhost:8080/api/auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "password123"
}
```

**3. 创建文章**
```http
POST http://localhost:8080/api/articles
Content-Type: application/json
Authorization: Bearer <token>

{
  "title": "我的第一篇文章",
  "content": "这是文章内容",
  "summary": "这是文章摘要",
  "category": "技术"
}
```

**4. 获取文章列表**
```http
GET http://localhost:8080/api/articles?page=0&pageSize=10
```

---

## 📂 VSCode 最佳实践

### 推荐插件

安装这些插件会很有帮助：

1. **Extension Pack for Java** - Java开发必备
2. **Maven for Java** - Maven支持
3. **REST Client** - 测试API（代替Postman）
4. **ES7+ React/Redux/React-Native snippets** - React开发
5. **Thunder Client** - API测试工具
6. **MySQL** - MySQL连接和查询
7. **GitLens** - Git增强

### 调试技巧

**Java后端调试：**

在VSCode中按 `F5` 启动调试（需要安装Extension Pack for Java）

**React前端调试：**

1. 打开Chrome DevTools（F12）
2. 切换到 React 标签页
3. 检查组件状态和Props

---

## ⚠️ 常见问题

### 问题 1：Maven 下载依赖很慢

**解决方案：** 配置阿里镜像源

创建或编辑 `~/.m2/settings.xml`：

```xml
<mirrors>
  <mirror>
    <id>alimaven</id>
    <name>aliyun maven</name>
    <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
    <mirrorOf>central</mirrorOf>
  </mirror>
</mirrors>
```

### 问题 2：Port 8080 已被占用

```bash
# Windows
netstat -ano | findstr :8080
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :8080
kill -9 <PID>
```

修改端口，编辑 `application.yml`：
```yaml
server:
  port: 8081  # 改成其他端口
```

### 问题 3：npm install 很慢

```bash
# 使用淘宝镜像
npm config set registry https://registry.npmmirror.com

# 清除缓存后重新安装
npm cache clean --force
npm install
```

### 问题 4：MySQL 连接失败

检查清单：
- [ ] MySQL 服务是否启动？ (`mysql -u root -p`)
- [ ] 用户名密码是否正确？（用Navicat测试）
- [ ] 数据库 `blog_db` 是否存在？
- [ ] 防火墙是否阻止3306端口？

### 问题 5：跨域请求被拒绝

后端已配置CORS，确保：
- [ ] 前端URL: `http://localhost:5173`
- [ ] 后端URL: `http://localhost:8080`
- [ ] 检查 `application.yml` 中的 `cors` 配置

---

## 📊 Navicat 数据库管理技巧

### 查看表结构

1. 右键 `blog_db` 数据库
2. 选择 "查询数据库..."
3. 查看自动创建的表：
   - `users` - 用户表
   - `articles` - 文章表
   - `comments` - 评论表

### 插入测试数据

```sql
-- 插入测试用户
INSERT INTO users (username, email, password, nickname, created_at)
VALUES ('admin', 'admin@example.com', '$2a$10$...', '管理员', NOW());

-- 插入测试文章
INSERT INTO articles (title, content, summary, author_id, category, published, created_at)
VALUES ('测试文章', '这是测试内容', '这是摘要', 1, '技术', true, NOW());
```

### 监控性能

Tools → Performance → Profiler 查看数据库性能

---

## 🎯 开发工作流

### 日常开发流程

```bash
# 1. 启动数据库（Navicat 确保连接）
# 2. 启动后端
cd backend && mvn spring-boot:run

# 3. 启动前端（新终端）
cd frontend && npm run dev

# 4. 打开浏览器
# http://localhost:5173

# 5. 做出代码修改
# 前端：自动热更新（Hot Module Replacement）
# 后端：修改后需要重启服务

# 6. 使用DevTools调试
# 前端：F12 打开浏览器开发者工具
# 后端：F5 在VSCode中启动Java调试
```

### 打包构建

```bash
# 前端构建
cd frontend
npm run build
# 生成 dist/ 文件夹

# 后端构建
cd backend
mvn clean package
# 生成 target/blog-platform-1.0.0.jar
```

---

## 🚀 生产部署

### 使用Docker部署

```bash
# 构建和启动
docker-compose up -d

# 查看日志
docker-compose logs -f backend
docker-compose logs -f frontend

# 停止服务
docker-compose down
```

### 手动部署到服务器

```bash
# 前提：服务器已安装 JDK17, Node.js, MySQL

# 1. 上传项目
scp -r blog-platform user@server:/home/

# 2. 后端部署
cd blog-platform/backend
mvn clean package
java -jar target/blog-platform-1.0.0.jar &

# 3. 前端部署
cd ../frontend
npm install
npm run build
# 上传 dist/ 到 Nginx
```

---

## 📞 需要帮助？

### 查看日志

**后端日志：**
```
backend/src/main/resources/application.yml
# 搜索 logging 配置
```

**前端日志：**
```
浏览器 F12 → Console 标签
VSCode 终端输出
```

### 启用详细日志

编辑 `application.yml`：
```yaml
logging:
  level:
    root: DEBUG
    com.blog: DEBUG
```

---

## ✅ 完成检查清单

启动时检查：

- [ ] MySQL 服务运行中
- [ ] 数据库 `blog_db` 创建成功
- [ ] 后端启动无错误（`Application started`）
- [ ] 前端启动无错误（`Vite ... ready`）
- [ ] 浏览器可访问 http://localhost:5173
- [ ] API 可访问 http://localhost:8080/api
- [ ] 能成功注册和登录

---

**祝你开发愉快！🎉**

有问题可以：
1. 查看上方 FAQ 部分
2. 检查应用日志
3. 在 GitHub Issues 提问
