package com.jlhuarcaya.rest;

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

import com.jlhuarcaya.model.VehXPer;
import com.jlhuarcaya.model.Vehiculo;
import com.jlhuarcaya.repo.IVehiculoRepo;

@RestController
@RequestMapping("api/vehiculos")
public class RestVehiculoController {

	@Autowired
	private IVehiculoRepo repo;
	
	@GetMapping
	public List<Vehiculo> getVehiculos() {
		return repo.findAll();
	}
	
	@GetMapping(value = {"/{id}"})
	public Vehiculo getVehiculo(@PathVariable("id") Integer id) {
		return repo.findById(id).get();
	}
	
	@GetMapping("/todos")
	public List<VehXPer> getVehiculoXPersona() {
		return repo.getVehiculoXPersona();
	}
	
	@PostMapping
	public Vehiculo insertar(@RequestBody Vehiculo vehiculo) {
		return repo.save(vehiculo);
	}
	
	@PutMapping
	public void modificar(@RequestBody Vehiculo vehiculo) {
		repo.save(vehiculo);
	}
	
	@DeleteMapping(value = "/{idveh}")
	public void eliminar(@PathVariable("idveh") Integer idveh) {
		repo.deleteById(idveh);
	}
	
}
