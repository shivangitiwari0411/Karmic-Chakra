package com.karmicchakra.dto;

public class ReflectionRequest {

    private String situation;

    public ReflectionRequest() {
    }

    public ReflectionRequest(String situation) {
        this.situation = situation;
    }

    public String getSituation() {
        return situation;
    }

    public void setSituation(String situation) {
        this.situation = situation;
    }
}
