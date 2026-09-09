package com.blog.service;

import com.blog.dto.LoginRequest;
import com.blog.dto.RegisterRequest;
import com.blog.dto.JwtResponse;
import com.blog.entity.User;
import com.blog.repository.UserRepository;
import com.blog.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 * 认证服务
 */
@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    // 用户注册
    public JwtResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("邮箱已被使用");
        }
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new RuntimeException("用户名已被使用");
        }

        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .nickname(request.getNickname())
                .build();

        userRepository.save(user);

        String token = jwtTokenProvider.generateToken(user.getId().toString());
        return JwtResponse.builder()
                .token(token)
                .id(user.getId())
                .username(user.getUsername())
                .email(user.getEmail())
                .nickname(user.getNickname())
                .build();
    }

    // 用户登录
    public JwtResponse login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("用户不存在或密码错误"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("用户不存在或密码错误");
        }

        String token = jwtTokenProvider.generateToken(user.getId().toString());
        return JwtResponse.builder()
                .token(token)
                .id(user.getId())
                .username(user.getUsername())
                .email(user.getEmail())
                .nickname(user.getNickname())
                .build();
    }

}
