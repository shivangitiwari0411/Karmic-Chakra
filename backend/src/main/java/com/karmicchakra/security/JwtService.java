package com.karmicchakra.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class JwtService {

    // Secret key (we'll move it to application.properties later)
    private static final String SECRET_KEY =
            "KarmicChakraSecretKeyForJwtAuthentication2026";

    // 24 hours
    private static final long EXPIRATION_TIME =
            1000 * 60 * 60 * 24;

    public String generateToken(String email) {

        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(
                        new Date(System.currentTimeMillis() + EXPIRATION_TIME)
                )
                .signWith(
                        SignatureAlgorithm.HS256,
                        SECRET_KEY
                )
                .compact();
    }

    public String extractEmail(String token) {

        Claims claims = Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }

    public boolean validateToken(String token, String email) {

        String extractedEmail = extractEmail(token);

        return extractedEmail.equals(email);
    }
}
