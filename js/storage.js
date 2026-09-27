// favoritos en localStorage
// localStorage guarda solo strings, por eso JSON.stringify para guardar y JSON.parse para leer

// TODO: constante con el nombre de la clave


// devuelve los favoritos o [] si no hay nada
export function obtenerFavoritos() {
  // TODO
}


// agrega sin repetir. devuelve true si lo agrego, false si ya estaba
export function agregarFavorito(personaje) {
  // TODO: con .some() me fijo si ya existe ese id
}


// saca un favorito por id
export function eliminarFavorito(id) {
  // TODO: .filter()
}


// para saber si ya esta guardado (y mostrar el boton distinto)
export function esFavorito(id) {
  // TODO
}
