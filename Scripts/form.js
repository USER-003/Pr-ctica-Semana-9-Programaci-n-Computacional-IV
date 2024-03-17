$(document).ready(function () {
    $("#solicitar-btn").click(function () {
      // Obtener los valores del formulario
      const datos = {
        nombres: $("#nombres").val(),
        apellidos: $("#apellidos").val(),
        correo: $("#correo").val(),
        telefono: $("#telefono").val(),
        sede: $("#sede").val(),
        modalidad: $("#modalidad").val(),
        carrera: $("#carrera").val(),
        metodo_contacto: $("#metodo-contacto").val(),
      };

      // Crear tarjeta con los datos
      const tarjeta = $('<div class="tarjeta">').html(`
  <p><strong>Nombres:</strong> ${datos.nombres}</p>
  <p><strong>Apellidos:</strong> ${datos.apellidos}</p>
  <p><strong>Correo:</strong> ${datos.correo}</p>
  <p><strong>Teléfono/Celular:</strong> ${datos.telefono}</p>
  <p><strong>Sede:</strong> ${datos.sede}</p>
  <p><strong>Modalidad:</strong> ${datos.modalidad}</p>
  <p><strong>Carrera:</strong> ${datos.carrera}</p>
  <p><strong>Método de contacto:</strong> ${datos.metodo_contacto}</p>
`);

      // Agregar tarjeta al contenedor
      $("#tarjetas").append(tarjeta);
    });
  });
