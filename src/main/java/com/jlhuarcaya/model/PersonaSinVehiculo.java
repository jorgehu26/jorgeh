package com.jlhuarcaya.model;

public class PersonaSinVehiculo {

	private Integer idper;
	private String tipodoc;
	private String dociden;
	private String nombres;
	private String apepaterno;
	private String apematerno;

	public PersonaSinVehiculo(Integer idper, String tipodoc, String dociden, String nombres, String apepaterno, String apematerno) {
		this.idper = idper;
		this.tipodoc = tipodoc;
		this.dociden = dociden;
		this.nombres = nombres;
		this.apepaterno = apepaterno;
		this.apematerno = apematerno;
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
	
}
