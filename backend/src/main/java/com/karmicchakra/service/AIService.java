package com.karmicchakra.service;

import com.karmicchakra.dto.ReflectionResponse;
import com.karmicchakra.dto.WeeklySummaryResponse;
public interface AIService {

    ReflectionResponse analyzeSituation(
            String situation,
            String gitaContext
    );
    WeeklySummaryResponse generateWeeklySummary(
            String reflections
    );


}