$(document).ready(function () {
  var frase = ["Hago programas","Soluciono problemas","Hago programas y soluciono problemas"];
  var elemento = $("#frase");
  var that = $(this);

  animacionInicial(elemento, frase);
});


function animacionInicial(elemento, frase){
  setTimeout(function () {
    animacionIncercionTexto(elemento, frase[0]);
  },1000);
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

function insertarTexto(elemento, contenido) {
  $(elemento).text($(elemento).text() + contenido);
}
function quitarUnCaracter(elemento) {
  $(elemento).text($(elemento).text().slice(0, $(elemento).length - 2));
}