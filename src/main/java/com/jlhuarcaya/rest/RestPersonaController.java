package com.jlhuarcaya.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jlhuarcaya.model.Persona;
import com.jlhuarcaya.repo.IPersonaRepo;

@RestController
@RequestMapping("api/personas")
public class RestPersonaController {

	@Autowired
	private IPersonaRepo repo;
	
	@GetMapping
	public List<Persona> getPersonas() {
		return repo.findAll();
	}
	
	@GetMapping(value = {"/{id}"})
	public Persona getPersona(@PathVariable("id") Integer id) {
		return repo.findById(id).get();
	}
	
	/*@GetMapping("/sinvehiculos")
	public List<Persona> getPersonaSinVehiculo() {
		return repo.getPersonaSinVehiculo();
	}*/
	
	@PostMapping
	public void insertar(@RequestBody Persona persona) {
		repo.save(persona);
	}
	
	@PutMapping
	public void modificar(@RequestBody Persona persona) {
		repo.save(persona);
	}
	
	@DeleteMapping(value = "/{idper}")
	public void eliminar(@PathVariable("idper") Integer idper) {
		repo.deleteById(idper);
	}
	
}
