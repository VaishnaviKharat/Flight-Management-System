package com.project.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.springboot.exception.ResourceNotFoundException;
import com.project.springboot.model.Flight;
import com.project.springboot.model.Login;
import com.project.springboot.repository.FlightsRepository;
import com.project.springboot.repository.LoginRepository;


@CrossOrigin
@RestController
@RequestMapping("/api/v1/")
public class FlightController {

	@Autowired
	private FlightsRepository flightsRepository;
	
	@Autowired
	private LoginRepository loginRepository;
	
	@GetMapping("/login")
	public List<Login> getAllLogin(){
		return loginRepository.findAll();
	}
	
	@PostMapping("/login")
	public String login(@RequestBody Login login) {
//		 loginrepo.findByUsernameAndPassword(login.getUsername(), login.getPassword());
		Login oathuser=loginRepository.findByUsernameAndPassword(login.getUsername(), login.getPassword());
		if(Objects.nonNull(oathuser)) {
			return "redirect:/flights";
		}
		else {
			return "redirect:/";
		}
	}
	
	//get all flights
	@GetMapping("/flights")
	public List<Flight> getAllFlights(){
		
		return flightsRepository.findAll();
		
	}
	
	//create flight rest api
	@PostMapping("/flights")
	public Flight createFlight(@RequestBody Flight flight) {
		return flightsRepository.save(flight);
	}
	
	//get Employee by id rest api
	@GetMapping("/flights/{id}")
	public ResponseEntity<Flight> getFlightId(@PathVariable Long id) {
		
		Flight flight = flightsRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Flight not exist with id :"+id));
		return ResponseEntity.ok(flight);
		
	}
	
	//update flight rest api
	@PutMapping("/flights/{id}")
	public ResponseEntity<Flight> updateFlight(@PathVariable Long id, @RequestBody Flight flightDetails){
		Flight flight = flightsRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Flight not exist with id :"+id));
		
		flight.setArrival_time(flightDetails.getArrival_time());
		flight.setDeparture_time(flightDetails.getDeparture_time());
		flight.setDestination(flightDetails.getDestination());
		flight.setGateNo(flightDetails.getGateNo());
		
		Flight updatedFlight = flightsRepository.save(flight);
		return ResponseEntity.ok(updatedFlight);
		
	}
	
	//delete employee rest api
	@DeleteMapping("/flights/{id}")
	public ResponseEntity<Map<String , Boolean>> deleteFlight(@PathVariable Long id){
		Flight flight = flightsRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Flight not exist with id :"+id));
		
		flightsRepository.delete(flight);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
