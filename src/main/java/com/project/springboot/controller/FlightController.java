package com.project.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.project.springboot.model.Flight;

import com.project.springboot.repository.FlightsRepository;

import java.util.List;


@RestController
@RequestMapping("/api/v1/")
public class FlightController {

	@Autowired
	private FlightsRepository flightsRepository;
	
	//get all flights
	@GetMapping("/flights")
	public List<Flight> getAllFlights(){
		
		return flightsRepository.findAll();
		
	}
}
