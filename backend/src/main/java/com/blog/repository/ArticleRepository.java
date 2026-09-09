package com.blog.repository;

import com.blog.entity.Article;
import com.blog.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

/**
 * 文章数据访问接口
 */
@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {
    
    Page<Article> findByAuthor(User author, Pageable pageable);
    
    Page<Article> findByPublishedTrue(Pageable pageable);
    
    Page<Article> findByTitleContainingIgnoreCase(String title, Pageable pageable);
    
    Page<Article> findByCategory(String category, Pageable pageable);
    
}
