// =========================================================
// detalle.js — lógica de detalle.html
// La página se abre como: detalle.html?id=5
// =========================================================

// TODO: imports (api.js, storage.js, ui.js)


// TODO: agarrar los elementos del DOM (contenedor del detalle, contenedor de estado)


// ---------------------------------------------------------
// Lee el id de la URL
// ---------------------------------------------------------
function obtenerIdDeLaUrl() {
  // TODO: pista → new URLSearchParams(window.location.search) y .get('id')
  // ¿Qué pasa si alguien entra a detalle.html sin ?id= ? Contemplalo.
}


// ---------------------------------------------------------
// Dibuja el detalle completo del personaje
// ---------------------------------------------------------
function renderizarDetalle(personaje) {
  // TODO: campos sugeridos (MÁS que en la tarjeta):
  //   image, name, status, species, type (puede venir vacío ""), gender,
  //   origin.name, location.name, episode.length (cantidad de episodios)
  //
  // Incluí el botón "Agregar a favoritos" y registrale un addEventListener('click', ...)
  //   → llama a agregarFavorito(personaje)
  //   → si devuelve false: avisar "Ya está en favoritos" (sin duplicar)
  //   → si devuelve true:  avisar "Agregado"
  //   Bonus UX: si esFavorito(id) ya es true al cargar, mostrar el botón en otro estado.
}


// ---------------------------------------------------------
// Arranque de la página
// ---------------------------------------------------------
async function iniciar() {
  // TODO:
  // 1. obtener el id
  // 2. mostrar "Cargando..."
  // 3. try: pedir el personaje por id → renderizarDetalle → limpiar estado
  //    catch: mensaje de error visible
}


// TODO: llamar a iniciar()
