// =========================================================
// ui.js — funciones que DIBUJAN cosas en el DOM.
// Se reutilizan en las 3 páginas (por eso están separadas).
// No hacen fetch ni tocan localStorage: solo reciben datos y los muestran.
// =========================================================


// ---------------------------------------------------------
// Crea el HTML de UNA tarjeta de personaje.
// Campos sugeridos para la tarjeta: image, name, status, species
// (el resto queda para el detalle, que tiene que mostrar MÁS campos)
// ---------------------------------------------------------
export function crearTarjeta(personaje) {
  // TODO: dos formas posibles (sabé explicar la diferencia):
  //   a) document.createElement + textContent + appendChild
  //   b) template literal (`...`) + innerHTML
  //
  // El link/botón "Ver detalle" lleva a: detalle.html?id=${personaje.id}
  // Acordate del alt en la imagen.
}


// ---------------------------------------------------------
// Recibe un array de personajes y un contenedor, y los dibuja todos.
// ---------------------------------------------------------
export function renderizarListado(personajes, contenedor) {
  // TODO:
  // 1. vaciar el contenedor (si no, se acumulan resultados de búsquedas anteriores)
  // 2. recorrer el array (forEach o map) y agregar cada tarjeta
}


// ---------------------------------------------------------
// Muestra un mensaje en el contenedor de estado.
// tipo: 'cargando' | 'error' | 'vacio'  → usalo para ponerle una clase CSS distinta
// ---------------------------------------------------------
export function mostrarEstado(contenedor, mensaje, tipo) {
  // TODO
}


// ---------------------------------------------------------
// Limpia el contenedor de estado (cuando todo salió bien)
// ---------------------------------------------------------
export function limpiarEstado(contenedor) {
  // TODO
}
