package com.karmicchakra.controller;
import com.karmicchakra.dto.WeeklySummaryResponse;
import com.karmicchakra.dto.ReflectionRequest;
import com.karmicchakra.dto.ReflectionResponse;
import com.karmicchakra.service.ReflectionService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import com.karmicchakra.dto.ReflectionHistoryResponse;
import java.util.List;
import com.karmicchakra.dto.KarmaTrendResponse;
import java.util.List;
import java.util.Map;
import com.karmicchakra.dto.StreakResponse;
import com.karmicchakra.dto.KarmaDashboardResponse;
@RestController
@RequestMapping("/api/reflection")
@CrossOrigin(origins = "http://localhost:5173")
public class ReflectionController {

    private final ReflectionService reflectionService;

    public ReflectionController(ReflectionService reflectionService) {
        this.reflectionService = reflectionService;
    }

    @PostMapping("/analyze")
    public ResponseEntity<ReflectionResponse> analyze(
            @RequestBody ReflectionRequest request,
            Authentication authentication
    ) {
        System.out.println("===== Reflection Controller Hit =====");

        String email = authentication.getName();

        ReflectionResponse response =
                reflectionService.analyzeReflection(request, email);

        return ResponseEntity.ok(response);
    }
    @GetMapping("/history")
    public ResponseEntity<List<ReflectionHistoryResponse>> getHistory(
            Authentication authentication
    ) {

        String email = authentication.getName();

        List<ReflectionHistoryResponse> history =
                reflectionService.getReflectionHistory(email);

        return ResponseEntity.ok(history);
    }
    @GetMapping("/dashboard")
    public ResponseEntity<KarmaDashboardResponse> getDashboard(
            Authentication authentication
    ) {

        String email = authentication.getName();

        KarmaDashboardResponse dashboard =
                reflectionService.getDashboard(email);

        return ResponseEntity.ok(dashboard);
    }
    @GetMapping("/trend")
    public ResponseEntity<List<KarmaTrendResponse>> getKarmaTrend(
            Authentication authentication
    ) {

        String email = authentication.getName();

        List<KarmaTrendResponse> trend =
                reflectionService.getKarmaTrend(email);

        return ResponseEntity.ok(trend);
    }
    @GetMapping("/emotions")
    public ResponseEntity<Map<String, Long>> getEmotionAnalytics(
            Authentication authentication
    ) {

        String email = authentication.getName();

        Map<String, Long> emotions =
                reflectionService.getEmotionAnalytics(email);

        return ResponseEntity.ok(emotions);
    }
    @GetMapping("/streak")
    public ResponseEntity<StreakResponse> getStreak(
            Authentication authentication
    ) {

        String email = authentication.getName();

        StreakResponse streak =
                reflectionService.getStreak(email);

        return ResponseEntity.ok(streak);
    }
    @GetMapping("/weekly-summary")
    public ResponseEntity<WeeklySummaryResponse> getWeeklySummary(
            Authentication authentication
    ) {

        String email = authentication.getName();

        WeeklySummaryResponse response =
                reflectionService.getWeeklySummary(email);

        return ResponseEntity.ok(response);
    }

}
