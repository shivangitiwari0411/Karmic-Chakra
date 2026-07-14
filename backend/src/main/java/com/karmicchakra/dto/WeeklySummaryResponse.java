package com.karmicchakra.dto;

public class WeeklySummaryResponse {

    private String summary;

    public WeeklySummaryResponse() {
    }

    public WeeklySummaryResponse(String summary) {
        this.summary = summary;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }
}