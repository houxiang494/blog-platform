package com.blog.controller;

import com.blog.entity.Comment;
import com.blog.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * 评论控制器
 */
@RestController
@RequestMapping("/articles/{articleId}/comments")
@CrossOrigin(origins = "*")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @GetMapping
    public ResponseEntity<Page<Comment>> getComments(
            @PathVariable Long articleId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int pageSize) {
        Pageable pageable = PageRequest.of(page, pageSize);
        return ResponseEntity.ok(commentService.getCommentList(articleId, pageable));
    }

    @PostMapping
    public ResponseEntity<Comment> createComment(
            @PathVariable Long articleId,
            @RequestBody Comment comment) {
        // 从认证用户获取ID (这里简化处理)
        return ResponseEntity.ok(commentService.createComment(articleId, 1L, comment));
    }

}

@RestController
@RequestMapping("/comments")
@CrossOrigin(origins = "*")
class CommentDeleteController {

    @Autowired
    private CommentService commentService;

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteComment(@PathVariable Long id) {
        commentService.deleteComment(id);
        return ResponseEntity.ok().build();
    }

}
