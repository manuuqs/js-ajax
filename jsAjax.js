document.addEventListener("DOMContentLoaded", function() {
    // Obtener la URL actual
    var urlActual = window.location.href;

    // Actualizar el valor del cuadro de texto con la URL obtenida
    document.getElementById("recurso").value = urlActual;
});

document.getElementById('enviar').addEventListener('click', function() {
    descargarContenido();
  });

function descargarContenido() {
    // Obtener la URL introducida por el usuario
    var url = document.getElementById("recurso").value;

    // Realizar la solicitud AJAX
    $.ajax({
        url: url,
        method: 'GET',
        success: function(data) {
            // Mostrar el contenido en la página
            $("#resultado").html(data);
        },
        error: function(error) {
            alert("Error al cargar contenido: " + error.responseText);
        }
    });
}