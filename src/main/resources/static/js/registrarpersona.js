async function registrarPersona() {
  let persona = {};
  persona.tipodoc = document.getElementById('txtTipoDocumento').value;
  persona.dociden = document.getElementById('txtNroDocumento').value;
  persona.nombres = document.getElementById('txtNombres').value;
  persona.apepaterno = document.getElementById('txtApePaterno').value;
  persona.apematerno = document.getElementById('txtApeMaterno').value;

  const request = await fetch('api/personas', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(persona)
  });
  //alert("La persona fue creada con exito!");
  window.location.href = 'personas.html'

}

function validarCampos() {
  if (document.getElementById('txtNombres').value == '') {
	alert('Debe ingresar el nombre');
	return;
  }
  if (document.getElementById('txtApePaterno').value == '') {
	alert('Debe ingresar el apellido paterno');
	return;
  }
  if (document.getElementById('txtApeMaterno').value == '') {
	alert('Debe ingresar el apellido materno');
	return;
  }
  registrarPersona();	
}

function alert(message) {
  document.getElementById('alert-msg').innerHTML = message; // set message text
  if (document.getElementById('alert').classList.contains('d-none')) document.getElementById('alert').classList.remove('d-none'); // Display alert-box
}

function closeAlert() {
  document.getElementById('alert').classList.add('d-none'); // hide alert-box
  document.getElementById('alert-msg').innerHTML = ''; // reset message
}
