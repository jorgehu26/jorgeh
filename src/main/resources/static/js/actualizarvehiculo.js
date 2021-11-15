let url = 'http://localhost:8080/';

let id = findGetParameter('idveh');
cargarVehiculo(id);

async function cargarVehiculo(id) {
  const request = await fetch(url + 'api/vehiculos/' + id, {
    method: 'GET'
  });
  const vehiculo = await request.json();

  document.getElementById("txtNumero").value = vehiculo.numero;
  document.getElementById("txtMatricula").value = vehiculo.matricula;
  document.getElementById("txtChasis").value = vehiculo.chasis;
  document.getElementById("txtCarroceria").value = vehiculo.carroceria;
  document.getElementById("txtAnio").value = vehiculo.anio;
  
  let listaHtml = '';
  for (let persona of vehiculo.personas) {
	let checkbox1 = '<div class="form-check"><input class="form-check-input" type="checkbox" value="1" id="chkActivo' + persona.idper + '" checked></div>';
    let personHtml = '<tr><td>' 
                    + checkbox1 + '</td><td>' 
    				+ persona.idper + '</td><td>' 
    				+ persona.tipodoc + '</td><td>' 
    				+ persona.dociden + '</td><td>'
                    + persona.apepaterno + '</td><td>'
                    + persona.apematerno + '</td><td>' 
    				+ persona.nombres + '</td><td>'
                    + vehiculo.matricula + '</td></tr>';
    listaHtml += personHtml;
  }

  const request2 = await fetch(url + 'api/choferes/sinvehiculo', {
    method: 'GET'
  });
  const choferes = await request2.json();

  let listadoHtml = '';
  for (let chofer of choferes) {
	let checkbox2 = '<div class="form-check"><input class="form-check-input" type="checkbox" value="1" id="chkActivo' + chofer.idper + '"></div>';
    let personaHtml2 = '<tr><td>' 
                    + checkbox2 + '</td><td>' 
    				+ chofer.idper + '</td><td>' 
    				+ chofer.tipodoc + '</td><td>' 
    				+ chofer.dociden + '</td><td>'
                    + chofer.apepaterno + '</td><td>'
                    + chofer.apematerno + '</td><td>' 
    				+ chofer.nombres + '</td><td>'
                    + ' ' + '</td></tr>';
    listadoHtml += personaHtml2;
  }

	document.querySelector('#personas tbody').outerHTML = listaHtml + listadoHtml;

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

async function actualizarVehiculo() {
  let vehiculo = {};
  vehiculo.idveh = findGetParameter('idveh');
  vehiculo.numero = document.getElementById('txtNumero').value;
  vehiculo.matricula = document.getElementById('txtMatricula').value;
  vehiculo.chasis = document.getElementById('txtChasis').value;
  vehiculo.carroceria = document.getElementById('txtCarroceria').value;
  vehiculo.anio = document.getElementById('txtAnio').value;
  let personas = new Array();

  for (i=0; i<document.getElementById('personas').tBodies[0].rows.length; i++) {
  	let persona = {};
  	persona.idper = document.getElementById('personas').tBodies[0].rows[i].cells[1].innerText;
  	if (document.getElementById('chkActivo' + persona.idper).checked) {
	  	persona.idper = document.getElementById('personas').tBodies[0].rows[i].cells[1].innerText;
	  	persona.tipodoc = document.getElementById('personas').tBodies[0].rows[i].cells[2].innerText;
	  	persona.dociden = document.getElementById('personas').tBodies[0].rows[i].cells[3].innerText;
	  	persona.apepaterno = document.getElementById('personas').tBodies[0].rows[i].cells[4].innerText;
	  	persona.apematerno = document.getElementById('personas').tBodies[0].rows[i].cells[5].innerText;
	  	persona.nombres = document.getElementById('personas').tBodies[0].rows[i].cells[6].innerText;
	  	personas.push(persona);
	}
  }
  vehiculo.personas = personas;

  const request = await fetch(url + 'api/vehiculos', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(vehiculo)
  });

  window.location.href = 'vehiculos.html'

}

function validarCampos() {
  if (document.getElementById('txtNumero').value == '') {
	alert('Debe ingresar un número');
	return;
  }
  if (document.getElementById('txtMatricula').value == '') {
	alert('Debe ingresar una matrícula');
	return;
  }
  if (document.getElementById('txtChasis').value == '') {
	alert('Debe ingresar un chasis');
	return;
  }
  if (document.getElementById('txtCarroceria').value == '') {
	alert('Debe ingresar una carrocería');
	return;
  }
  if (document.getElementById('txtAnio').value == '') {
	alert('Debe ingresar el año');
	return;
  }
  actualizarVehiculo();	
}

function alert(message) {
  document.getElementById('alert-msg').innerHTML = message; // set message text
  if (document.getElementById('alert').classList.contains('d-none')) document.getElementById('alert').classList.remove('d-none'); // Display alert-box
}

function closeAlert() {
  document.getElementById('alert').classList.add('d-none'); // hide alert-box
  document.getElementById('alert-msg').innerHTML = ''; // reset message
}
