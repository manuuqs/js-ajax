
window.onload = function() {

    var urlActual = window.location.href;
    document.getElementById("recurso").value = urlActual;
    document.getElementById('enviar').addEventListener('click', function() {
        descargarContenido();
   });
} 

function descargarContenido() {

    let source = document.getElementById("recurso").value;
	// elemento a modificar del DOM
    document.getElementById('contenidos').innerHTML = "";

    request = new XMLHttpRequest();
		
     request.open('GET', source, true);

	 request.onreadystatechange = showContent;

	 request.send(null);

}

function showContent() {

    switch (request.readyState) {
        case 0:
            actualizarEstado('Estado: No iniciada');
            break;
        case 1:
            actualizarEstado('Estado: Conexión establecida');
            break;
        case 2:
            actualizarEstado('Estado: Petición recibida');
            break;
        case 3:
            actualizarEstado('Estado: Procesando petición');
            break;
        case 4:
            if (request.status === 200) {
                actualizarEstado('Estado: Completada con éxito');
                // Puedes manejar la respuesta aquí
            } else {
                actualizarEstado('Estado: Error en la petición');
            }
            break;
    }

    if(request.readyState == 4 && request.status == 200) {
      let contents = document.getElementById('contenidos');
        contents.innerHTML = request.responseText
    }

    if(request.readyState == 4 && request.status == 200) {
        let contents = document.getElementById('cabeceras');
          contents.innerHTML = request.getAllResponseHeaders();
      }

    let contents = document.getElementById('codigo');
    contents.innerHTML = 'código: ' + request.readyState + " , estado: " + request.status;
      
  }
  

  

  function actualizarEstado(estado) {
    document.getElementById('estados').innerHTML += estado + '\n';
    }