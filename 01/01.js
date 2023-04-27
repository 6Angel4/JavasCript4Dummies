/**
 * la funcion "cambio" (no resive argumentos)
 * el bloque de codigo indica que el elemento con el id="demo" se le va a insertar "Hello Jaavaa Script"
 */
function cambio() {
  document.getElementById("demo").innerHTML = "Hello JavaScript";
}

/**
 * Ejemplo del foco
 * la funcion encedido() cambia la imagen del foco apagado (pic_bulboff.gif) por la imagen que se le indica en la src (recursos)
 * La funcion apagado() vuelve a colocar el foco apagado (pic_bulboff.gif)
 */
function encendido() {
  document.getElementById("imgFoco").src = "src/pic_bulbon.gif";
}
function apagado() {
  document.getElementById("imgFoco").src = "src/pic_bulboff.gif";
}

/**
 * Ejemplo color del texto
 * Obtiene el elemento con el id="textoCssCambio" y le aplica estilo(style).color = "blue"
 */
function cambioCss() {
  document.getElementById("textoCssCambio").style.color = "blue";
}

/**
 *
 */
function esconder() {
  document.getElementById("textPrueba").style.display = "none";
}
function mostrar() {
  document.getElementById("textPrueba").style.display = "block";
}
