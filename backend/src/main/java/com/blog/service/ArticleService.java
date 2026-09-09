package com.blog.service;

import com.blog.entity.Article;
import com.blog.entity.User;
import com.blog.repository.ArticleRepository;
import com.blog.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * 文章服务
 */
@Service
public class ArticleService {

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private UserRepository userRepository;

    // 获取文章列表
    public Page<Article> getArticleList(Pageable pageable) {
        return articleRepository.findByPublishedTrue(pageable);
    }

    // 获取文章详情
    public Article getArticleDetail(Long id) {
        return articleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("文章不存在"));
    }

    // 创建文章
    public Article createArticle(Long userId, Article article) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("用户不存在"));
        article.setAuthor(user);
        return articleRepository.save(article);
    }

    // 更新文章
    public Article updateArticle(Long id, Article article) {
        Article existing = articleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("文章不存在"));
        existing.setTitle(article.getTitle());
        existing.setContent(article.getContent());
        existing.setCategory(article.getCategory());
        existing.setSummary(article.getSummary());
        return articleRepository.save(existing);
    }

    // 删除文章
    public void deleteArticle(Long id) {
        articleRepository.deleteById(id);
    }

    // 搜索文章
    public Page<Article> searchArticles(String keyword, Pageable pageable) {
        return articleRepository.findByTitleContainingIgnoreCase(keyword, pageable);
    }

}
