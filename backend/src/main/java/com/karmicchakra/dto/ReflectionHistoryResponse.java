package com.karmicchakra.dto;

import java.time.LocalDateTime;

public class ReflectionHistoryResponse {

    private String situation;
    private String emotion;
    private int karmaScore;
    private String gitaVerse;
    private String explanation;
    private String recommendation;
    private LocalDateTime createdAt;

    public ReflectionHistoryResponse() {
    }

    public ReflectionHistoryResponse(
            String situation,
            String emotion,
            int karmaScore,
            String gitaVerse,
            String explanation,
            String recommendation,
            LocalDateTime createdAt
    ) {
        this.situation = situation;
        this.emotion = emotion;
        this.karmaScore = karmaScore;
        this.gitaVerse = gitaVerse;
        this.explanation = explanation;
        this.recommendation = recommendation;
        this.createdAt = createdAt;
    }

    public String getSituation() {
        return situation;
    }

    public void setSituation(String situation) {
        this.situation = situation;
    }

    public String getEmotion() {
        return emotion;
    }

    public void setEmotion(String emotion) {
        this.emotion = emotion;
    }

    public int getKarmaScore() {
        return karmaScore;
    }

    public void setKarmaScore(int karmaScore) {
        this.karmaScore = karmaScore;
    }

    public String getGitaVerse() {
        return gitaVerse;
    }

    public void setGitaVerse(String gitaVerse) {
        this.gitaVerse = gitaVerse;
    }

    public String getExplanation() {
        return explanation;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }

    public String getRecommendation() {
        return recommendation;
    }

    public void setRecommendation(String recommendation) {
        this.recommendation = recommendation;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
