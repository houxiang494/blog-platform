package com.blog.repository;

import com.blog.entity.Comment;
import com.blog.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

/**
 * 评论数据访问接口
 */
@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    
    Page<Comment> findByArticle(Article article, Pageable pageable);
    
}
