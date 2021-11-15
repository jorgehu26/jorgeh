package com.jlhuarcaya.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.jlhuarcaya.model.VehXPer;
import com.jlhuarcaya.model.Vehiculo;

public interface IVehiculoRepo extends JpaRepository<Vehiculo,Integer>{
	
	@Query("SELECT new com.jlhuarcaya.model.VehXPer(p.idper,p.tipodoc,p.dociden,p.nombres,p.apepaterno,p.apematerno,v.idveh,v.numero,v.matricula,v.chasis,v.carroceria,v.anio) FROM Vehiculo v JOIN v.personas p")
	public List<VehXPer> getVehiculoXPersona();
}
