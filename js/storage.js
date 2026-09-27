// =========================================================
// storage.js — TODO lo que toca localStorage vive acá.
//
// Recordá:
// - localStorage solo guarda STRINGS
//   → para guardar un array: JSON.stringify
//   → para leerlo:          JSON.parse
// - Si la clave no existe, getItem devuelve null (tenés que contemplarlo)
// - Lo ves en DevTools → Application → Local Storage
//
// Pregunta para la defensa: ¿por qué localStorage y no sessionStorage?
// =========================================================

// TODO: constante con el nombre de la clave (ej: 'favoritos'), para no escribir el string a mano en varios lados


// ---------------------------------------------------------
// Devuelve el array de favoritos (o [] si no hay nada guardado)
// ---------------------------------------------------------
export function obtenerFavoritos() {
  // TODO
}


// ---------------------------------------------------------
// Agrega un personaje a favoritos SIN DUPLICADOS.
// Devuelve: true si lo agregó, false si ya estaba
// (así la interfaz puede avisarle al usuario qué pasó)
// ---------------------------------------------------------
export function agregarFavorito(personaje) {
  // TODO:
  // 1. leer los favoritos actuales
  // 2. ¿ya existe uno con el mismo id? (pista: .some())  → return false
  // 3. si no, agregarlo y guardar el array actualizado
  // 4. return true
  //
  // Pensá: ¿guardás el personaje COMPLETO o solo algunos campos (id, name, image, status)?
}


// ---------------------------------------------------------
// (ADICIONAL) Elimina un favorito por id
// ---------------------------------------------------------
export function eliminarFavorito(id) {
  // TODO: pista → .filter() para quedarte con todos MENOS ese id, y guardar
}


// ---------------------------------------------------------
// ¿Este personaje ya está en favoritos? (útil para mostrar el botón como "Ya en favoritos")
// ---------------------------------------------------------
export function esFavorito(id) {
  // TODO
}
