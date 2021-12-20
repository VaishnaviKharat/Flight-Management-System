package com.project.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.springboot.model.Flight;

@Repository

public interface FlightsRepository extends JpaRepository<Flight, Long>{

}
