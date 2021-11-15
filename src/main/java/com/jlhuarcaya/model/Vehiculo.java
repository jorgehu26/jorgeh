package com.jlhuarcaya.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_vehiculos")
public class Vehiculo {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "idveh")
	private Integer idveh;
	
	@Column(name = "numero")
	private String numero;
	
	@Column(name = "matricula")
    private String matricula;
	
	@Column(name = "chasis")
	private String chasis;
	
	@Column(name = "carroceria")
    private String carroceria;
	
	@Column(name = "anio")
    private String anio;
	
	@OneToMany(targetEntity = Persona.class, cascade = CascadeType.ALL)
	@JoinColumn(name ="idveh", referencedColumnName = "idveh")
	private List<Persona> personas;

	public Integer getIdveh() {
		return idveh;
	}

	public void setIdveh(Integer idveh) {
		this.idveh = idveh;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getMatricula() {
		return matricula;
	}

	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}

	public String getChasis() {
		return chasis;
	}

	public void setChasis(String chasis) {
		this.chasis = chasis;
	}

	public String getCarroceria() {
		return carroceria;
	}

	public void setCarroceria(String carroceria) {
		this.carroceria = carroceria;
	}

	public String getAnio() {
		return anio;
	}

	public void setAnio(String anio) {
		this.anio = anio;
	}

	public List<Persona> getPersonas() {
		return personas;
	}
	
	public void setPersonas(List<Persona> personas) {
		this.personas = personas;
	}
	
}
