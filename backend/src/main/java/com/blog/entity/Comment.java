package com.blog.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

/**
 * 评论实体类
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "comments")
public class Comment {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;
    
    @ManyToOne
    @JoinColumn(name = "article_id", nullable = false)
    private Article article;
    
    @ManyToOne
    @JoinColumn(name = "author_id", nullable = false)
    private User author;
    
    private Long replyToId;  // 回复的评论ID
    
    @CreationTimestamp
    private LocalDateTime createdAt;
    
}
