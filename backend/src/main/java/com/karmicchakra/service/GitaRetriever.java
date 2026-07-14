package com.karmicchakra.service;

import com.karmicchakra.model.GitaVerse;
import com.karmicchakra.repository.GitaVerseRepository;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class GitaRetriever {

    private final GitaVerseRepository repository;
    private final KeywordNormalizer keywordNormalizer;

    public GitaRetriever(
            GitaVerseRepository repository,
            KeywordNormalizer keywordNormalizer
    ) {
        this.repository = repository;
        this.keywordNormalizer = keywordNormalizer;
    }

    public List<GitaVerse> retrieveRelevantVerses(String situation) {

        String input = keywordNormalizer.normalize(situation);

        List<GitaVerse> allVerses = repository.findAll();

        Map<GitaVerse,Integer> scores = new HashMap<>();

        for(GitaVerse verse : allVerses){

            int score = 0;

            String[] keywords = verse.getKeywords().split(",");

            for(String keyword : keywords){

                keyword = keyword.trim().toLowerCase();

                if(input.contains(keyword)){
                    score++;
                }
            }

            if(score>0){
                scores.put(verse,score);
            }
        }

        if(scores.isEmpty()){
            return allVerses.stream()
                    .limit(5)
                    .toList();
        }

        return scores.entrySet()
                .stream()
                .sorted((a,b)->b.getValue()-a.getValue())
                .limit(5)
                .map(Map.Entry::getKey)
                .toList();
    }

}