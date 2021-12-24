package com.project.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.springboot.model.Login;


public interface LoginRepository extends JpaRepository<Login, String>{
	
	Login findByUsernameAndPassword(String username,String password);
	Login findByUsername(String username);
	
	

}

	
	


