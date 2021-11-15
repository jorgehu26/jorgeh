let url = 'http://localhost:8080/';

$(document).ready(function() {	
    cargarPersonas();
  $('#dataTable').DataTable();
});

async function cargarPersonas() {
  const request = await fetch(url + 'api/personas', {
    method: 'GET'
  });
  const personas = await request.json();

  const request2 = await fetch(url + 'api/vehiculos/todos', {
    method: 'GET'
  });
  const vehiculos = await request2.json();

  let listadoHtml = '';
  for (let persona of personas) {
    let botonEliminar = '<a href="#" onclick="validarEliminacion(' + persona.idper + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
    let botonModificar = '<a href="actualizarpersona.html?idper=' + persona.idper + '" class="btn btn-success btn-circle btn-sm"><i class="fas fa-check"></i></a>';
  	let placa = '';

	for (let vehiculo of vehiculos) {
		if (vehiculo.idper == persona.idper) {
			placa = vehiculo.matricula 
		}
	}
    let personaHtml = '<tr><td>' 
    				+ persona.idper + '</td><td>' 
    				+ persona.tipodoc + '</td><td>' 
    				+ persona.dociden + '</td><td>'
                    + persona.apepaterno + ' '
                    + persona.apematerno + ', ' 
                    + persona.nombres + '</td><td>' 
                    + placa + '</td><td>' 
                    + botonEliminar + ' ' + botonModificar + '</td></tr>';
    listadoHtml += personaHtml;
  }

	document.querySelector('#dataTable tbody').outerHTML = listadoHtml;

}

function validarEliminacion(idper) {
  document.getElementById('txtModal').value = idper; 
  $('#exampleModal').modal('show');
}

async function eliminarPersona() {
  let idper = document.getElementById('txtModal').value;

 const request = await fetch(url + 'api/personas/' + idper, {
    method: 'DELETE'
  });

  location.reload()
}
