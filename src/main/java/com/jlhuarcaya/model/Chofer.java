package com.jlhuarcaya.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_personas")
public class Chofer {

	@Id
	//@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "idper")
	private Integer idper;
	
	@Column(name = "tipodoc")
	private String tipodoc;
	
	@Column(name = "dociden")
	private String dociden;
	
	@Column(name = "nombres")
	private String nombres;
	
	@Column(name = "apepaterno")
	private String apepaterno;
	
	@Column(name = "apematerno")
	private String apematerno;
	
	@ManyToOne
	@JoinColumn(name = "idveh")
	private Vehiculo vehiculo;
	
	public Integer getIdper() {
		return idper;
	}
	public void setIdper(Integer idper) {
		this.idper = idper;
	}
	public String getTipodoc() {
		return tipodoc;
	}
	public void setTipodoc(String tipodoc) {
		this.tipodoc = tipodoc;
	}
	public String getDociden() {
		return dociden;
	}
	public void setDociden(String dociden) {
		this.dociden = dociden;
	}
	public String getNombres() {
		return nombres;
	}
	public void setNombres(String nombres) {
		this.nombres = nombres;
	}
	public String getApepaterno() {
		return apepaterno;
	}
	public void setApepaterno(String apepaterno) {
		this.apepaterno = apepaterno;
	}
	public String getApematerno() {
		return apematerno;
	}
	public void setApematerno(String apematerno) {
		this.apematerno = apematerno;
	}
	public Vehiculo getVehiculo() {
		return vehiculo;
	}
	public void setVehiculo(Vehiculo vehiculo) {
		this.vehiculo = vehiculo;
	}

}
