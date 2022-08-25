$(document).ready(function () {
  var frase = ["Hago programas y soluciono problemas"];
  var elemento = $("#frase");
  
  insertarTexto(elemento,frase[0]);
});

function insertarTexto(elemento, contenido) {
  $(elemento).text($(elemento).text() + contenido);
}  
