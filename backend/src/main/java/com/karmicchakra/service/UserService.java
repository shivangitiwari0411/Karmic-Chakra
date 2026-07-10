package com.karmicchakra.service;
import com.karmicchakra.dto.LoginRequest;
import com.karmicchakra.dto.AuthResponse;
import com.karmicchakra.dto.RegisterRequest;
import com.karmicchakra.entity.User;
import com.karmicchakra.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.karmicchakra.security.JwtService;
@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    public UserService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder,
                       JwtService jwtService) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public AuthResponse register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            return new AuthResponse(false,"Email already exists.");
        }

        User user = new User();

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());

        user.setPassword(
                passwordEncoder.encode(request.getPassword())
        );

        userRepository.save(user);

        return new AuthResponse(true,"User registered successfully.");
    }
    public AuthResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail()).orElse(null);

        if (user == null) {
            return new AuthResponse(false, "User not found.");
        }

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            return new AuthResponse(false, "Invalid password.");
        }

        String token = jwtService.generateToken(user.getEmail());

        return new AuthResponse(
                true,
                "Login successful.",
                token
        );
    }
}