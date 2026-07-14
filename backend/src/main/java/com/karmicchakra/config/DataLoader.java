package com.karmicchakra.config;

import com.karmicchakra.model.GitaVerse;
import com.karmicchakra.repository.GitaVerseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final GitaVerseRepository repository;

    public DataLoader(GitaVerseRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {

        if(repository.count() > 0)
            return;

        addVerse(
                "2",
                "47",
                "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.",
                "career",
                "career,duty,work,job,goal,purpose"
        );

        addVerse(
                "2",
                "48",
                "Perform your duty with equanimity, abandoning attachment to success and failure.",
                "career",
                "career,success,failure,balance"
        );

        addVerse(
                "2",
                "62",
                "From attachment arises desire, from desire anger develops.",
                "anger",
                "anger,attachment,emotion,conflict"
        );

        addVerse(
                "2",
                "63",
                "From anger comes delusion; from delusion, loss of memory; from loss of memory, destruction of intelligence.",
                "anger",
                "anger,rage,emotion"
        );

        addVerse(
                "3",
                "35",
                "It is better to perform one's own duty imperfectly than another's duty perfectly.",
                "career",
                "career,dharma,self,choice"
        );

        addVerse(
                "6",
                "5",
                "Elevate yourself through your own mind, not degrade yourself.",
                "motivation",
                "motivation,self confidence,discipline"
        );

        addVerse(
                "6",
                "26",
                "Whenever the restless mind wanders, bring it back under control.",
                "focus",
                "focus,study,mind,discipline"
        );

        addVerse(
                "16",
                "21",
                "Lust, anger and greed are the three gates leading to destruction.",
                "anger",
                "anger,greed,ego"
        );

        System.out.println("Gita verses loaded.");
    }

    private void addVerse(
            String chapter,
            String verse,
            String text,
            String category,
            String keywords
    ) {

        GitaVerse g = new GitaVerse();

        g.setChapter(chapter);
        g.setVerse(verse);
        g.setText(text);
        g.setCategory(category);
        g.setKeywords(keywords);

        repository.save(g);

    }

}
