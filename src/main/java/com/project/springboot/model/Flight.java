package com.project.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "flights")
public class Flight {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "destination")
	private String destination;
	
	@Column(name = "arrival_time")
	private double arrival_time;
	
	@Column(name = "departure_time")
	private double departure_time;
	
	public Flight() {
		
	}
	public Flight(double arrival_time, double departure_time, String destination) {
		super();
		this.arrival_time = arrival_time;
		this.departure_time = departure_time;
		this.destination = destination;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public double getArrival_time() {
		return arrival_time;
	}
	public void setArrival_time(double arrival_time) {
		this.arrival_time = arrival_time;
	}
	public double getDeparture_time() {
		return departure_time;
	}
	public void setDeparture_time(double departure_time) {
		this.departure_time = departure_time;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}

	
}
