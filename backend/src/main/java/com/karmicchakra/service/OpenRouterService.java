package com.karmicchakra.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.karmicchakra.dto.ReflectionResponse;
import com.karmicchakra.dto.openrouter.OpenRouterRequest;
import com.karmicchakra.dto.openrouter.OpenRouterResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.karmicchakra.dto.WeeklySummaryResponse;
import java.util.List;

@Service
public class OpenRouterService implements AIService {

    @Value("${openrouter.api.key}")
    private String apiKey;

    @Value("${openrouter.api.url}")
    private String apiUrl;

    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public OpenRouterService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Override
    public ReflectionResponse analyzeSituation(
            String situation,
            String gitaContext
    ) {


        try {
            System.out.println("API KEY = " + apiKey);

            String prompt = """
You are Karmic Chakra AI, an expert spiritual mentor inspired by the Bhagavad Gita.

Analyze the user's situation ONLY using the verses provided below.

==============================
USER SITUATION
%s
==============================

RETRIEVED BHAGAVAD GITA VERSES

%s

==============================

Instructions:

1. Read ALL the retrieved verses.

2. Select ONLY the verse (or maximum two verses) that best match the user's situation.

3. Never invent a verse that is not provided.

4. Identify the user's dominant emotion.

5. Give a karma score between 0 and 100.

6. Explain WHY the selected verse applies.

7. Give practical advice that the user can apply today.

8. Keep the explanation compassionate and personalized.

9. Return ONLY valid JSON.

{
  "emotion":"",
  "karmaScore":0,
  "gitaVerse":"",
  "explanation":"",
  "recommendation":""
}
""".formatted(
                    situation,
                    gitaContext
            );

            OpenRouterRequest.Message message =
                    new OpenRouterRequest.Message(
                            "user",
                            prompt
                    );

            OpenRouterRequest request =
                    new OpenRouterRequest(
                            "poolside/laguna-xs-2.1:free",
                            List.of(message)
                    );

            HttpHeaders headers = new HttpHeaders();

            headers.setContentType(MediaType.APPLICATION_JSON);

            headers.setBearerAuth(apiKey);

            headers.set("HTTP-Referer", "http://localhost:8080");

            headers.set("X-Title", "Karmic Chakra");

            HttpEntity<OpenRouterRequest> entity =
                    new HttpEntity<>(request, headers);

            ResponseEntity<OpenRouterResponse> response =
                    restTemplate.exchange(
                            apiUrl,
                            HttpMethod.POST,
                            entity,
                            OpenRouterResponse.class
                    );

            String text =
                    response.getBody()
                            .getChoices()
                            .get(0)
                            .getMessage()
                            .getContent();

            JsonNode json =
                    objectMapper.readTree(text);

            return new ReflectionResponse(
                    json.get("emotion").asText(),
                    json.get("karmaScore").asInt(),
                    json.get("gitaVerse").asText(),
                    json.get("explanation").asText(),
                    json.get("recommendation").asText()

            );

        } catch (Exception e) {

            e.printStackTrace();

            if (e instanceof org.springframework.web.client.HttpStatusCodeException ex) {
                System.out.println("Status Code: " + ex.getStatusCode());
                System.out.println("Response Body:");
                System.out.println(ex.getResponseBodyAsString());
            }

            throw new RuntimeException("OpenRouter Error", e);
        }

    }
    @Override
    public WeeklySummaryResponse generateWeeklySummary(String reflections) {
        try {

            String prompt = """
You are an AI spiritual coach.

Analyze the user's reflections from the past week.

Reflections:
%s

Provide a concise summary (150-200 words).

Mention:
1. Overall emotional pattern
2. Positive improvements
3. Recurring struggles
4. Relevant Bhagavad Gita guidance
5. One practical suggestion

Return ONLY plain text.
""".formatted(reflections);

            OpenRouterRequest.Message message =
                    new OpenRouterRequest.Message(
                            "user",
                            prompt
                    );

            OpenRouterRequest request =
                    new OpenRouterRequest(
                            "poolside/laguna-xs-2.1:free",
                            List.of(message)
                    );

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.setBearerAuth(apiKey);
            headers.set("HTTP-Referer", "http://localhost:8080");
            headers.set("X-Title", "Karmic Chakra");

            HttpEntity<OpenRouterRequest> entity =
                    new HttpEntity<>(request, headers);

            ResponseEntity<OpenRouterResponse> response =
                    restTemplate.exchange(
                            apiUrl,
                            HttpMethod.POST,
                            entity,
                            OpenRouterResponse.class
                    );

            String summary =
                    response.getBody()
                            .getChoices()
                            .get(0)
                            .getMessage()
                            .getContent();

            return new WeeklySummaryResponse(summary);

        } catch (Exception e) {

            e.printStackTrace();

            throw new RuntimeException("Weekly Summary Error", e);
        }
    }



}
