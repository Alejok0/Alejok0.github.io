$(document).ready(function () {
  var frase = ["Hago programas", "Soluciono problemas", "Hago programas y soluciono problemas"];
  var elemento = $("#frase");
  var that = $(this);
  var contenido = that.find("#seccionPrincipal");

  animacionInicial(elemento, frase);

  $("#inicio").click(function () {
    limpiarPaginaActual(contenido);
    $("#estiloActual").attr("href", "css/inicio.css");
    $(contenido).addClass("titulo");
    cargarPaginaInicio(contenido);
  });

  $("#proyectos").click(function () {
    limpiarPaginaActual(contenido);
    $("#estiloActual").attr("href", "css/proyectos.css");
    $(contenido).addClass("contenedor");
    $(contenido).load("https://alejok0.github.io/proyectos.html");
  })

  $("#acercaDe").click(function () {
    limpiarPaginaActual(contenido);
    $("#estiloActual").attr("href", "css/acercaDe.css");
    $(contenido).addClass("contenedor");
    $(contenido).load("https://alejok0.github.io/acercaDe.html");
  });

});

function limpiarPaginaActual(elemento) {
  $(elemento).empty();
  $(elemento).removeClass();
}

function animacionInicial(elemento, frase) {
  setTimeout(function () {
    animacionIncercionTexto(elemento, frase[0]);
  }, 1000);
  setTimeout(function () {
    animacionExtraccionTexto(elemento, frase[0]);
  }, 2800);
  setTimeout(function () {
    animacionIncercionTexto(elemento, frase[1]);
  }, 5600);
  setTimeout(function () {
    animacionExtraccionTexto(elemento, frase[1]);
  }, 8400);
  setTimeout(function () {
    animacionIncercionTexto(elemento, frase[2]);
  }, 11200);
}

function animacionIncercionTexto(elemento, contenido) {
  //Se rellena el elemento
  for (let iterador = 0; iterador < contenido.length; iterador++) {
    setTimeout(function () {
      insertarTexto(elemento, contenido[iterador]);
    }, 100 + (100 * iterador));
  }
}

function animacionExtraccionTexto(elemento, contenido) {
  //Se vacia el elemento
  for (let iterador = 0; iterador < contenido.length; iterador++) {
    setTimeout(function () {
      quitarUnCaracter(elemento);
    }, 100 + (100 * iterador));
  }
}

function cargarPaginaInicio(elemento) {
  $(elemento).append('<h1>Hola, soy Alejandro ;)</h1>');
$(elemento).append('<h2 id="frase">Hago programas y soluciono problemas</h2>');
}

function insertarTexto(elemento, contenido) {
  $(elemento).text($(elemento).text() + contenido);
}
function quitarUnCaracter(elemento) {
  $(elemento).text($(elemento).text().slice(0, $(elemento).length - 2));
}