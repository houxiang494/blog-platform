package com.blog.service;

import com.blog.entity.Comment;
import com.blog.entity.Article;
import com.blog.entity.User;
import com.blog.repository.CommentRepository;
import com.blog.repository.ArticleRepository;
import com.blog.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * 评论服务
 */
@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private UserRepository userRepository;

    // 获取评论列表
    public Page<Comment> getCommentList(Long articleId, Pageable pageable) {
        Article article = articleRepository.findById(articleId)
                .orElseThrow(() -> new RuntimeException("文章不存在"));
        return commentRepository.findByArticle(article, pageable);
    }

    // 创建评论
    public Comment createComment(Long articleId, Long userId, Comment comment) {
        Article article = articleRepository.findById(articleId)
                .orElseThrow(() -> new RuntimeException("文章不存在"));
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("用户不存在"));
        comment.setArticle(article);
        comment.setAuthor(user);
        return commentRepository.save(comment);
    }

    // 删除评论
    public void deleteComment(Long id) {
        commentRepository.deleteById(id);
    }

}
