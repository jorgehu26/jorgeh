let url = 'http://localhost:8080/';

let id = findGetParameter('idper');
cargarPersona(id)

async function cargarPersona(id) {
  const request = await fetch(url + 'api/personas/' + id, {
    method: 'GET'
  });
  const persona = await request.json();

  document.getElementById("txtTipoDocumento").value = persona.tipodoc;
  document.getElementById("txtNroDocumento").value = persona.dociden;
  document.getElementById("txtNombres").value = persona.nombres;
  document.getElementById("txtApePaterno").value = persona.apepaterno;
  document.getElementById("txtApeMaterno").value = persona.apematerno;
  
}

function findGetParameter(parameterName) {
    let result = null,
        tmp = [];
    let items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

async function actualizarPersona() {
  let persona = {};
  persona.idper = findGetParameter('idper');
  persona.tipodoc = document.getElementById('txtTipoDocumento').value;
  persona.dociden = document.getElementById('txtNroDocumento').value;
  persona.nombres = document.getElementById('txtNombres').value;
  persona.apepaterno = document.getElementById('txtApePaterno').value;
  persona.apematerno = document.getElementById('txtApeMaterno').value;

  const request = await fetch(url + 'api/personas', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(persona)
  });
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
  actualizarPersona();	
}

function alert(message) {
  document.getElementById('alert-msg').innerHTML = message; // set message text
  if (document.getElementById('alert').classList.contains('d-none')) document.getElementById('alert').classList.remove('d-none'); // Display alert-box
}

function closeAlert() {
  document.getElementById('alert').classList.add('d-none'); // hide alert-box
  document.getElementById('alert-msg').innerHTML = ''; // reset message
}

