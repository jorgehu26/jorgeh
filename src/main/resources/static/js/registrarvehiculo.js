cargarPersonas();

async function cargarPersonas() {
  const request2 = await fetch('api/choferes/sinvehiculo', {
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
    				+ chofer.nombres + '</td></tr>';
    listadoHtml += personaHtml2;
  }

	document.querySelector('#personas tbody').outerHTML = listadoHtml;

}

async function registrarVehiculo() {
  //validarCampos();
  let vehiculo = {};
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

  const request = await fetch('api/vehiculos', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(vehiculo)
  });
  const bus = await request.json();
  let busActualizado = {};
  busActualizado.idveh = bus.idveh; 
  busActualizado.numero = bus.numero; 
  busActualizado.matricula = bus.matricula; 
  busActualizado.chasis = bus.chasis; 
  busActualizado.carroceria = bus.carroceria; 
  busActualizado.anio = bus.anio; 
  busActualizado.personas = personas; 

  const request3 = await fetch('api/vehiculos', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(busActualizado)
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
  registrarVehiculo();	
}

function alert(message) {
  document.getElementById('alert-msg').innerHTML = message; // set message text
  if (document.getElementById('alert').classList.contains('d-none')) document.getElementById('alert').classList.remove('d-none'); // Display alert-box
}

function closeAlert() {
  document.getElementById('alert').classList.add('d-none'); // hide alert-box
  document.getElementById('alert-msg').innerHTML = ''; // reset message
}
