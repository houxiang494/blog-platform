-- Blog Platform 数据库初始化脚本
-- 创建日期: 2026-09-09
-- 说明: 一键创建所有必需的表和初始数据

-- ============================================
-- 1. 创建数据库
-- ============================================
CREATE DATABASE IF NOT EXISTS blog_db 
  DEFAULT CHARACTER SET utf8mb4 
  DEFAULT COLLATE utf8mb4_unicode_ci;

USE blog_db;

-- ============================================
-- 2. 创建用户表
-- ============================================
CREATE TABLE IF NOT EXISTS users (
  id BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT '用户ID',
  username VARCHAR(255) UNIQUE NOT NULL COMMENT '用户名',
  email VARCHAR(255) UNIQUE NOT NULL COMMENT '邮箱',
  password VARCHAR(255) NOT NULL COMMENT '密码（加密存储）',
  nickname VARCHAR(255) COMMENT '昵称',
  bio TEXT COMMENT '个人简介',
  avatar_url VARCHAR(255) COMMENT '头像URL',
  followers_count INT DEFAULT 0 COMMENT '粉丝数',
  following_count INT DEFAULT 0 COMMENT '关注数',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  INDEX idx_email (email),
  INDEX idx_username (username),
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户表';

-- ============================================
-- 3. 创建文章表
-- ============================================
CREATE TABLE IF NOT EXISTS articles (
  id BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT '文章ID',
  title VARCHAR(255) NOT NULL COMMENT '文章标题',
  content LONGTEXT COMMENT '文章内容',
  summary TEXT COMMENT '文章摘要',
  author_id BIGINT NOT NULL COMMENT '作者ID',
  category VARCHAR(255) COMMENT '分类',
  view_count INT DEFAULT 0 COMMENT '浏览次数',
  like_count INT DEFAULT 0 COMMENT '点赞次数',
  comment_count INT DEFAULT 0 COMMENT '评论数',
  published BOOLEAN DEFAULT false COMMENT '是否发布',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_author_id (author_id),
  INDEX idx_published (published),
  INDEX idx_category (category),
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='文章表';

-- ============================================
-- 4. 创建评论表
-- ============================================
CREATE TABLE IF NOT EXISTS comments (
  id BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT '评论ID',
  content TEXT NOT NULL COMMENT '评论内容',
  article_id BIGINT NOT NULL COMMENT '文章ID',
  author_id BIGINT NOT NULL COMMENT '评论者ID',
  reply_to_id BIGINT COMMENT '回复的评论ID',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE,
  FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_article_id (article_id),
  INDEX idx_author_id (author_id),
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='评论表';

-- ============================================
-- 5. 创建初始数据
-- ============================================

-- 插入测试用户
-- 注意: 密码需要使用 BCrypt 加密
-- 以下是一些示例用户（实际使用时需要用真实的加密密码替换）

INSERT INTO users (username, email, password, nickname, bio, created_at) VALUES
('admin', 'admin@example.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/nP6', '管理员', '这是管理员', NOW()),
('testuser', 'test@example.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/nP6', '测试用户', '这是测试用户', NOW()),
('blogger', 'blogger@example.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/nP6', '博主', '我是专业博主', NOW());

-- 插入测试文章
INSERT INTO articles (title, content, summary, author_id, category, published, view_count, like_count, created_at) VALUES
('欢迎来到博客平台', '这是一篇示例文章。\n这是博客平台的欢迎文章，展示了所有的功能特性。\n你可以在这个平台上：\n- 发布你的文章\n- 与其他用户交互\n- 阅读有趣的内容\n\n祝你使用愉快！', '这是一篇欢迎文章，介绍了博客平台的基本功能。', 1, '公告', true, 100, 5, NOW()),
('Spring Boot 快速入门指南', 'Spring Boot 是一个开源的Java框架，用于创建独立的、生产级别的Spring应用程序。\n\n本文介绍了:\n1. Spring Boot 的基本概念\n2. 如何快速创建项目\n3. 常用的配置和注解\n4. 最佳实践\n\n适合初学者学习！', 'Spring Boot 是构建现代Java应用的绝佳选择，本文为你快速入门。', 3, '技术', true, 250, 20, DATE_SUB(NOW(), INTERVAL 7 DAY)),
('React 18 新特性详解', 'React 18 带来了许多令人兴奋的新特性和改进...\n\n主要包括:\n- Concurrent 渲染\n- 自动批处理\n- startTransition API\n- useId Hook\n\n本文将深入讲解每个新特性的用法和最佳实践。', 'React 18 的新特性让前端开发变得更加高效，让我们一起来了解！', 3, '技术', true, 180, 15, DATE_SUB(NOW(), INTERVAL 14 DAY)),
('数据库设计最佳实践', '良好的数据库设计是任何应用的基础...\n\n本文涵盖:\n1. 范式理论\n2. 索引优化\n3. 查询性能\n4. 表设计规范\n\n通过实例深入讲解如何设计高效的数据库。', '数据库设计关乎系统的性能和可维护性，这些最佳实践值得学习。', 2, '技术', true, 150, 12, DATE_SUB(NOW(), INTERVAL 30 DAY)),
('全栈开发学习路线图', '想要成为全栈开发工程师？这份学习路线图会帮助你...\n\n前端技能:\n- HTML/CSS/JavaScript\n- React/Vue/Angular\n- 状态管理\n\n后端技能:\n- Java/Python/Node.js\n- 数据库\n- API设计\n\n还有更多的内容等待你去探索！', '这是一份完整的全栈开发学习路线，助你成为专业的全栈工程师。', 3, '学习', true, 300, 25, DATE_SUB(NOW(), INTERVAL 60 DAY));

-- 插入测试评论
INSERT INTO comments (content, article_id, author_id, created_at) VALUES
('很棒的文章！', 1, 2, NOW()),
('非常有帮助，感谢分享！', 1, 3, NOW()),
('期待更多的内容', 2, 1, NOW()),
('代码示例很清楚', 2, 2, NOW()),
('深入浅出的讲解', 3, 1, NOW());

-- ============================================
-- 6. 验证数据
-- ============================================

-- 查看用户数
SELECT '用户总数' as 项目, COUNT(*) as 数量 FROM users
UNION ALL
SELECT '文章总数', COUNT(*) FROM articles
UNION ALL
SELECT '评论总数', COUNT(*) FROM comments;

-- ============================================
-- 7. 索引信息
-- ============================================
SHOW INDEX FROM users;
SHOW INDEX FROM articles;
SHOW INDEX FROM comments;

-- ============================================
-- 初始化完成！
-- ============================================
-- 现在你可以:
-- 1. 启动后端应用（Spring Boot 会自动同步表结构）
-- 2. 用上面的用户账号登录
-- 3. 浏览示例文章和评论
-- 4. 发布你自己的文章
--
-- 测试账户:
-- - 用户名: admin, 密码: password123, 邮箱: admin@example.com
-- - 用户名: testuser, 密码: password123, 邮箱: test@example.com  
-- - 用户名: blogger, 密码: password123, 邮箱: blogger@example.com
-- ============================================
