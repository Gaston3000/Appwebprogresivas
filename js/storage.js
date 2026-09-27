// todo lo que se guarda en localStorage esta aca (favoritos y cache del listado)
// localStorage guarda solo strings, por eso JSON.stringify para guardar y JSON.parse para leer

const CLAVE_FAVORITOS = 'favoritos';
const CLAVE_CACHE = 'personajes-cache';


// lee una clave y la devuelve ya convertida. si no existe o esta rota devuelve null
function leer(clave) {
  try {
    return JSON.parse(localStorage.getItem(clave));
  } catch (error) {
    return null;
  }
}

function guardar(clave, valor) {
  localStorage.setItem(clave, JSON.stringify(valor));
}


// ---------- favoritos ----------

// devuelve los favoritos o [] si no hay nada
export function obtenerFavoritos() {
  return leer(CLAVE_FAVORITOS) || [];
}


// agrega sin repetir. devuelve true si lo agrego, false si ya estaba
export function agregarFavorito(personaje) {
  const favoritos = obtenerFavoritos();

  if (favoritos.some(fav => fav.id === personaje.id)) {
    return false;
  }

  // guardo solo lo que necesito para dibujar la tarjeta, no el personaje entero
  const { id, name, image, status, species } = personaje;
  favoritos.push({ id, name, image, status, species });
  guardar(CLAVE_FAVORITOS, favoritos);
  return true;
}


// saca un favorito por id
export function eliminarFavorito(id) {
  const favoritos = obtenerFavoritos().filter(fav => fav.id !== id);
  guardar(CLAVE_FAVORITOS, favoritos);
}


// para saber si ya esta guardado (y mostrar el boton distinto)
export function esFavorito(id) {
  return obtenerFavoritos().some(fav => fav.id === id);
}


// ---------- cache del listado ----------
// la primera vez guardo lo que trae la api, las siguientes lo leo de aca sin llamarla

export function leerCache() {
  return leer(CLAVE_CACHE);
}

export function guardarCache(personajes) {
  guardar(CLAVE_CACHE, personajes);
}
