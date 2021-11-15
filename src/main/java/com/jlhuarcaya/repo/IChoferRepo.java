package com.jlhuarcaya.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.jlhuarcaya.model.Chofer;
import com.jlhuarcaya.model.PersonaSinVehiculo;

public interface IChoferRepo extends JpaRepository<Chofer,Integer> {

	@Query("SELECT new com.jlhuarcaya.model.PersonaSinVehiculo(p.idper,p.tipodoc,p.dociden,p.nombres,p.apepaterno,p.apematerno) FROM Chofer p LEFT OUTER JOIN p.vehiculo v WHERE v.idveh IS NULL")
	public List<PersonaSinVehiculo> getPersonaSinVehiculo();
}
