package com.jlhuarcaya.model;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

public class VehXPer {

	@JsonIgnoreProperties(ignoreUnknown = true)
	@JsonInclude(JsonInclude.Include.NON_DEFAULT)
	private Integer idper;
	private String tipodoc;
	private String dociden;
	private String nombres;
	private String apepaterno;
	private String apematerno;
	private Integer idveh;
	private String numero;
	private String matricula;
	private String chasis;
	private String carroceria;
	private String anio;
	
	public VehXPer(Integer idper, String tipodoc, String dociden, String nombres, String apepaterno, String apematerno, Integer idveh, String numero, String matricula, String chasis, String carroceria, String anio) {
		this.idper = idper;
		this.tipodoc = tipodoc;
		this.dociden = dociden;
		this.nombres = nombres;
		this.apepaterno = apepaterno;
		this.apematerno = apematerno;
		this.idveh = idveh;
		this.numero = numero;
		this.matricula = matricula;
		this.chasis = chasis;
		this.carroceria = carroceria;
		this.anio = anio;		
	}
	
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
		
}
