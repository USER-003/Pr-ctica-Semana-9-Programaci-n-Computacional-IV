//Ejercicio 1
$(document).ready(function () {
    $("p").css("color", "blue"); // Cambia el color de texto de todos los párrafos a azul
});

//Ejercicio 2
$(document).ready(function () {
    $("#elemento-a-ocultar").hide(); // Oculta el elemento específico al cargar la página

    $("#boton-mostrar").click(function () {
      $("#elemento-a-ocultar").show(); // Muestra el elemento específico cuando se hace clic en el botón
    });
  });

//Ejercicio 3
$(document).ready(function () {
    $("#boton-cambiar").click(function () {
      $("#texto-a-cambiar").text("Nuevo texto"); // Cambia el texto del elemento de párrafo cuando se hace clic en el botón
    });
  });

//Ejercicio 4
$(document).ready(function () {
    $(".lista-desordenada li").hover(
      function () {
        $(this).css("background-color", "lightblue"); // Cambia el color de fondo al pasar el mouse sobre cada elemento de lista
      },
      function () {
        $(this).css("background-color", ""); // Restaura el color de fondo cuando se retira el mouse
      }
    );
  });

//Ejercicio 5
$(document).ready(function () {
    $("#boton-deslizar").click(function () {
      $("#contenido-oculto").slideDown(); // Desliza hacia abajo para revelar el contenido oculto al hacer clic en el botón
    });
  });
