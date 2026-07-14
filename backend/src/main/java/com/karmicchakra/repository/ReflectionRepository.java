package com.karmicchakra.repository;

import com.karmicchakra.entity.Reflection;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReflectionRepository extends JpaRepository<Reflection, Long> {

    List<Reflection> findByUserIdOrderByCreatedAtDesc(Long userId);

}