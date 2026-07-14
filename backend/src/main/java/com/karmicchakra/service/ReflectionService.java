package com.karmicchakra.service;
import java.util.List;
import com.karmicchakra.dto.ReflectionRequest;
import com.karmicchakra.dto.ReflectionResponse;
import com.karmicchakra.entity.Reflection;
import com.karmicchakra.entity.User;
import com.karmicchakra.repository.ReflectionRepository;
import com.karmicchakra.repository.UserRepository;
import org.springframework.stereotype.Service;
import com.karmicchakra.dto.ReflectionHistoryResponse;
import java.util.stream.Collectors;
import java.time.LocalDateTime;
import com.karmicchakra.dto.KarmaDashboardResponse;
import java.util.Map;
import java.util.function.Function;
import com.karmicchakra.dto.WeeklySummaryResponse;
import com.karmicchakra.model.GitaVerse;
import com.karmicchakra.dto.StreakResponse;
import java.time.LocalDate;
import java.util.Set;
import java.util.TreeSet;

import com.karmicchakra.dto.KarmaTrendResponse;


@Service
public class ReflectionService {

    private final ReflectionRepository reflectionRepository;
    private final UserRepository userRepository;
    private final AIService aiService;

    private final GitaRetriever gitaRetriever;

    public ReflectionService(
            ReflectionRepository reflectionRepository,
            UserRepository userRepository,
            AIService aiService,
            GitaRetriever gitaRetriever
    ) {
        this.reflectionRepository = reflectionRepository;
        this.userRepository = userRepository;
        this.aiService = aiService;
        this.gitaRetriever = gitaRetriever;
    }

    public ReflectionResponse analyzeReflection(
            ReflectionRequest request,
            String email
    ) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Reflection reflection = new Reflection();

        reflection.setSituation(request.getSituation());

        // Dummy AI Response (will be replaced by Gemini later)
        List<GitaVerse> verses =
                gitaRetriever.retrieveRelevantVerses(request.getSituation());

        System.out.println("\n===== Retrieved Gita Verses =====");

        for (GitaVerse verse : verses) {
            System.out.println(verse);
        }

        System.out.println("===============================\n");
        StringBuilder context = new StringBuilder();

        for (GitaVerse verse : verses) {

            context.append("Bhagavad Gita ")
                    .append(verse.getChapter())
                    .append(".")
                    .append(verse.getVerse())
                    .append(" : ")
                    .append(verse.getText())
                    .append("\n\n");
        }

// REPLACE THE OLD LINE WITH THIS
        ReflectionResponse aiResponse =
                aiService.analyzeSituation(
                        request.getSituation(),
                        context.toString()
                );


        reflection.setEmotion(aiResponse.getEmotion());

        reflection.setKarmaScore(aiResponse.getKarmaScore());

        reflection.setGitaVerse(aiResponse.getGitaVerse());

        reflection.setExplanation(aiResponse.getExplanation());

        reflection.setRecommendation(aiResponse.getRecommendation());

        reflection.setCreatedAt(LocalDateTime.now());

        reflection.setUser(user);

        reflectionRepository.save(reflection);

        return aiResponse;
    }
    public List<ReflectionHistoryResponse> getReflectionHistory(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<Reflection> reflections =
                reflectionRepository.findByUserIdOrderByCreatedAtDesc(user.getId());

        return reflections.stream()
                .map(reflection -> new ReflectionHistoryResponse(
                        reflection.getSituation(),
                        reflection.getEmotion(),
                        reflection.getKarmaScore(),
                        reflection.getGitaVerse(),
                        reflection.getExplanation(),
                        reflection.getRecommendation(),
                        reflection.getCreatedAt()
                ))
                .collect(Collectors.toList());
    }
    public KarmaDashboardResponse getDashboard(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<Reflection> reflections =
                reflectionRepository.findByUserIdOrderByCreatedAtDesc(user.getId());

        long totalReflections = reflections.size();

        double averageKarmaScore = reflections.stream()
                .mapToInt(Reflection::getKarmaScore)
                .average()
                .orElse(0);

        String mostCommonEmotion = reflections.stream()
                .map(Reflection::getEmotion)
                .filter(emotion -> emotion != null)
                .collect(Collectors.groupingBy(
                        Function.identity(),
                        Collectors.counting()
                ))
                .entrySet()
                .stream()
                .max(Map.Entry.comparingByValue())
                .map(Map.Entry::getKey)
                .orElse("None");

        return new KarmaDashboardResponse(
                totalReflections,
                averageKarmaScore,
                mostCommonEmotion
        );
    }
    public List<KarmaTrendResponse> getKarmaTrend(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<Reflection> reflections =
                reflectionRepository.findByUserIdOrderByCreatedAtDesc(user.getId());

        return reflections.stream()

                .map(reflection -> new KarmaTrendResponse(

                        reflection.getCreatedAt().toLocalDate(),

                        reflection.getKarmaScore()

                ))

                .collect(Collectors.toList());

    }
    public Map<String, Long> getEmotionAnalytics(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<Reflection> reflections =
                reflectionRepository.findByUserIdOrderByCreatedAtDesc(user.getId());

        return reflections.stream()
                .map(Reflection::getEmotion)
                .filter(emotion -> emotion != null && !emotion.isBlank())
                .collect(Collectors.groupingBy(
                        Function.identity(),
                        Collectors.counting()
                ));
    }
    public StreakResponse getStreak(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<Reflection> reflections =
                reflectionRepository.findByUserIdOrderByCreatedAtDesc(user.getId());

        if (reflections.isEmpty()) {
            return new StreakResponse(0, 0);
        }

        Set<LocalDate> reflectionDates = new TreeSet<>();

        for (Reflection reflection : reflections) {
            reflectionDates.add(reflection.getCreatedAt().toLocalDate());
        }

        int longestStreak = 1;
        int currentLongest = 1;

        LocalDate previous = null;

        for (LocalDate date : reflectionDates) {

            if (previous != null && previous.plusDays(1).equals(date)) {
                currentLongest++;
            } else {
                currentLongest = 1;
            }

            longestStreak = Math.max(longestStreak, currentLongest);
            previous = date;
        }

        int currentStreak = 0;
        LocalDate today = LocalDate.now();

        while (reflectionDates.contains(today.minusDays(currentStreak))) {
            currentStreak++;
        }

        return new StreakResponse(currentStreak, longestStreak);
    }
    public WeeklySummaryResponse getWeeklySummary(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<Reflection> reflections =
                reflectionRepository.findByUserIdOrderByCreatedAtDesc(user.getId());

        StringBuilder builder = new StringBuilder();

        for (Reflection reflection : reflections) {

            builder.append("Situation: ")
                    .append(reflection.getSituation())
                    .append("\n");

            builder.append("Emotion: ")
                    .append(reflection.getEmotion())
                    .append("\n");

            builder.append("Karma Score: ")
                    .append(reflection.getKarmaScore())
                    .append("\n\n");
        }

        return aiService.generateWeeklySummary(builder.toString());
    }


}
