package com.jlhuarcaya.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.jlhuarcaya.model.Persona;

public interface IPersonaRepo extends JpaRepository<Persona,Integer> {
	
	//@Query("SELECT new com.jlhuarcaya.model.Persona(p.idper,p.tipodoc,p.dociden,p.nombres,p.apepaterno,p.apematerno) FROM Persona p LEFT OUTER JOIN p.vehiculo v WHERE v.idveh IS NULL")
	//public List<Persona> getPersonaSinVehiculo();
}
