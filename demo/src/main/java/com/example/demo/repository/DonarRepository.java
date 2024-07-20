package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Donar;

public interface DonarRepository extends JpaRepository<Donar, Long> {
}
