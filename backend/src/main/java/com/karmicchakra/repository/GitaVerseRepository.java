package com.karmicchakra.repository;

import com.karmicchakra.model.GitaVerse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GitaVerseRepository extends JpaRepository<GitaVerse,Long> {

    List<GitaVerse> findByCategoryContainingIgnoreCase(String category);

}
