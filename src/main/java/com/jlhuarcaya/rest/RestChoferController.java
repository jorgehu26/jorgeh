package com.jlhuarcaya.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jlhuarcaya.model.Chofer;
import com.jlhuarcaya.model.PersonaSinVehiculo;
import com.jlhuarcaya.repo.IChoferRepo;

@RestController
@RequestMapping("api/choferes")
public class RestChoferController {

	@Autowired
	private IChoferRepo repo;
	
	@GetMapping
	public List<Chofer> getPersonas() {
		return repo.findAll();
	}
	
	@GetMapping("/sinvehiculo")
	public List<PersonaSinVehiculo> getPersonaSinVehiculo() {
		return repo.getPersonaSinVehiculo();
	}
	
	@GetMapping(value = {"/{id}"})
	public Chofer getPersona(@PathVariable("id") Integer id) {
		return repo.findById(id).get();
	}
	
}
