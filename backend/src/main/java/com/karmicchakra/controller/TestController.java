package com.karmicchakra.controller;

import com.karmicchakra.model.GitaVerse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.karmicchakra.service.GitaRetriever;
import java.util.List;

@RestController
public class TestController {

    private final GitaRetriever retriever;
    public TestController(GitaRetriever retriever) {
        this.retriever = retriever;
    }

    @GetMapping("/api/test")
    public String test() {
        return "JWT Authentication Successful!";
    }

    @GetMapping("/api/test/retrieve")
    public List<GitaVerse> retrieve(
            @RequestParam String situation
    ) {
        return retriever.retrieveRelevantVerses(situation);
    }

}