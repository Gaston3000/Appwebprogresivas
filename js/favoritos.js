// =========================================================
// favoritos.js — lógica de favoritos.html
// Esta página NO llama a la API: lee todo de localStorage.
// =========================================================

// TODO: imports (storage.js, ui.js)


// TODO: agarrar los elementos del DOM


// ---------------------------------------------------------
// Dibuja la lista de favoritos (o el estado vacío)
// ---------------------------------------------------------
function mostrarFavoritos() {
  // TODO:
  // 1. leer favoritos
  // 2. si el array está vacío → mensaje "Todavía no guardaste favoritos" + link al inicio
  // 3. si no → renderizar las tarjetas
  // 4. (ADICIONAL) cada tarjeta necesita un botón "Eliminar" con el id del personaje
  //    Pista: data-id="${personaje.id}" en el botón
}


// ---------------------------------------------------------
// (ADICIONAL) Eliminar un favorito
// ---------------------------------------------------------
// TODO: en vez de un listener por botón, usá DELEGACIÓN DE EVENTOS:
//   un solo addEventListener('click') en el contenedor, y adentro
//   chequeás si el click fue en un botón de eliminar (evento.target.closest(...)).
//   Leés el data-id, llamás a eliminarFavorito(id) y volvés a llamar a mostrarFavoritos().
//
//   Ojo: dataset devuelve STRING y el id del personaje es NÚMERO. ¿Cómo comparás?


// TODO: llamar a mostrarFavoritos()
