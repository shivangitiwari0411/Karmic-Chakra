package com.karmicchakra.dto;

public class ReflectionResponse {

    private String emotion;

    private Integer karmaScore;

    private String gitaVerse;
    private String explanation;

    private String recommendation;

    public ReflectionResponse() {
    }

    public ReflectionResponse(
            String emotion,
            Integer karmaScore,
            String gitaVerse,
            String explanation,
            String recommendation) {

        this.emotion = emotion;
        this.karmaScore = karmaScore;
        this.gitaVerse = gitaVerse;
        this.recommendation = recommendation;
        this.explanation = explanation;
    }

    public String getEmotion() {
        return emotion;
    }

    public void setEmotion(String emotion) {
        this.emotion = emotion;
    }

    public Integer getKarmaScore() {
        return karmaScore;
    }

    public void setKarmaScore(Integer karmaScore) {
        this.karmaScore = karmaScore;
    }

    public String getGitaVerse() {
        return gitaVerse;
    }

    public void setGitaVerse(String gitaVerse) {
        this.gitaVerse = gitaVerse;
    }

    public String getRecommendation() {
        return recommendation;
    }

    public void setRecommendation(String recommendation) {
        this.recommendation = recommendation;
    }
    public String getExplanation() {
        return explanation;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }
}