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
	private String arrival_time;
	
	@Column(name = "departure_time")
	private String departure_time;
	
	@Column(name = "gate_No")
	private long gateNo;
	
	public long getGateNo() {
		return gateNo;
	}

	public void setGateNo(long gateNo) {
		this.gateNo = gateNo;
	}

	//default Constructor
	public Flight() {
		
	}
	
	//parameterized Constructor
	public Flight(String destination, String arrival_time, String departure_time) {
			super();
			this.destination = destination;
			this.arrival_time = arrival_time;
			this.departure_time = departure_time;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getArrival_time() {
		return arrival_time;
	}

	public void setArrival_time(String arrival_time) {
		this.arrival_time = arrival_time;
	}

	public String getDeparture_time() {
		return departure_time;
	}

	public void setDeparture_time(String departure_time) {
		this.departure_time = departure_time;
	}	
	
}