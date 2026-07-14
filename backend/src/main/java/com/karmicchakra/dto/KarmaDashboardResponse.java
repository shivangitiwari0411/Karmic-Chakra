package com.karmicchakra.dto;

public class KarmaDashboardResponse {

    private long totalReflections;
    private double averageKarmaScore;
    private String mostCommonEmotion;

    public KarmaDashboardResponse() {
    }

    public KarmaDashboardResponse(
            long totalReflections,
            double averageKarmaScore,
            String mostCommonEmotion
    ) {
        this.totalReflections = totalReflections;
        this.averageKarmaScore = averageKarmaScore;
        this.mostCommonEmotion = mostCommonEmotion;
    }

    public long getTotalReflections() {
        return totalReflections;
    }

    public void setTotalReflections(long totalReflections) {
        this.totalReflections = totalReflections;
    }

    public double getAverageKarmaScore() {
        return averageKarmaScore;
    }

    public void setAverageKarmaScore(double averageKarmaScore) {
        this.averageKarmaScore = averageKarmaScore;
    }

    public String getMostCommonEmotion() {
        return mostCommonEmotion;
    }

    public void setMostCommonEmotion(String mostCommonEmotion) {
        this.mostCommonEmotion = mostCommonEmotion;
    }
}