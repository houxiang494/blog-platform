package com.blog.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * JWT Token响应DTO
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class JwtResponse {
    
    private String token;
    
    private String type = "Bearer";
    
    private Long id;
    
    private String username;
    
    private String email;
    
    private String nickname;
    
}
