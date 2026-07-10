package com.karmicchakra.controller;

import com.karmicchakra.dto.AuthResponse;
import com.karmicchakra.dto.RegisterRequest;
import com.karmicchakra.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(
            @RequestBody RegisterRequest request) {

        AuthResponse response = userService.register(request);

        return ResponseEntity.ok(response);
    }
}