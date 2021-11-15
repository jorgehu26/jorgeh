let url = 'http://localhost:8080/';

$(document).ready(function() {	
    cargarVehiculos();
  $('#vehiculos').DataTable();
});

async function cargarVehiculos() {
  const request = await fetch(url + 'api/vehiculos', {
    method: 'GET'
  });
  const vehiculos = await request.json();

  let listadoHtml = '';
  for (let vehiculo of vehiculos) {
    let botonEliminar = '<a href="#" onclick="validarEliminacion(' + vehiculo.idveh + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
    let botonModificar = '<a href="actualizarvehiculo.html?idveh=' + vehiculo.idveh + '" class="btn btn-success btn-circle btn-sm"><i class="fas fa-check"></i></a>';

	let choferes = '';
	for (let persona of vehiculo.personas) {
		choferes = choferes + persona.apepaterno + ' ' + persona.nombres + '<br>';
	}
    let vehiculoHtml = '<tr><td>' 
    				+ vehiculo.idveh + '</td><td>' 
    				+ vehiculo.numero + '</td><td>' 
    				+ vehiculo.matricula + '</td><td>'
                    + vehiculo.chasis + '</td><td>'
                    + vehiculo.carroceria + '</td><td>' 
                    + vehiculo.anio + '</td><td>' 
                    + choferes + '</td><td>' 
                    + botonEliminar + ' ' + botonModificar 
                    + '<input type="hidden" id="txt'+ vehiculo.idveh + '" value="' + choferes + '"></td></tr>';
    listadoHtml += vehiculoHtml;
  }

	document.querySelector('#vehiculos tbody').outerHTML = listadoHtml;

}

function validarEliminacion(idveh) {
  document.getElementById('txtModal').value = idveh; 
  if (document.getElementById('txt'+ idveh).value != '') {
	alert('No se puede eliminar este bus, primero desvincule todos los choferes');
	return;
  }
  $('#exampleModal').modal('show');
}

async function eliminarVehiculo() {
  let idveh = document.getElementById('txtModal').value;
  const request1 = await fetch('api/vehiculos/' + idveh, {
    method: 'DELETE'
  });

  location.reload();
}

function alert(message) {
  document.getElementById('alert-msg').innerHTML = message; // set message text
  if (document.getElementById('alert').classList.contains('d-none')) document.getElementById('alert').classList.remove('d-none'); // Display alert-box
}

function closeAlert() {
  document.getElementById('alert').classList.add('d-none'); // hide alert-box
  document.getElementById('alert-msg').innerHTML = ''; // reset message
}

function salir() {
	return;
}