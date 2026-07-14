package com.karmicchakra.dto;

import java.time.LocalDate;

public class KarmaTrendResponse {

    private LocalDate date;
    private int karmaScore;

    public KarmaTrendResponse() {
    }

    public KarmaTrendResponse(LocalDate date, int karmaScore) {
        this.date = date;
        this.karmaScore = karmaScore;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public int getKarmaScore() {
        return karmaScore;
    }

    public void setKarmaScore(int karmaScore) {
        this.karmaScore = karmaScore;
    }
}
