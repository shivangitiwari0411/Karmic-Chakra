package com.karmicchakra.service;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class KeywordNormalizer {

    private final Map<String,String> synonyms = new HashMap<>();

    public KeywordNormalizer(){

        synonyms.put("job","career");
        synonyms.put("profession","career");
        synonyms.put("future","career");
        synonyms.put("passion","career");
        synonyms.put("dream","career");

        synonyms.put("father","parents");
        synonyms.put("mother","parents");
        synonyms.put("mom","parents");
        synonyms.put("dad","parents");

        synonyms.put("angry","anger");
        synonyms.put("furious","anger");
        synonyms.put("rage","anger");

        synonyms.put("sad","sadness");
        synonyms.put("depressed","sadness");
        synonyms.put("upset","sadness");

        synonyms.put("study","focus");
        synonyms.put("exam","focus");
        synonyms.put("college","study");

    }

    public String normalize(String text){

        String lower=text.toLowerCase();

        for(Map.Entry<String,String> entry : synonyms.entrySet()){

            lower=lower.replace(
                    entry.getKey(),
                    entry.getValue()
            );

        }

        return lower;

    }

}
