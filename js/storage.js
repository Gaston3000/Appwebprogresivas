// localStorage guarda solo strings, por eso JSON.stringify para guardar y JSON.parse para leer

// funcion que se ejecuta sola, afuera solo sale el objeto Almacen (sin globales sueltas)
const Almacen = (() => {

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

  // guarda un valor ya convertido a texto
  function guardar(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
  }


  // ---------- favoritos ----------

  // devuelve los favoritos o [] si no hay nada
  function obtenerFavoritos() {
    return leer(CLAVE_FAVORITOS) || [];
  }


  // agrega sin repetir. devuelve true si lo agrego, false si ya estaba
  function agregarFavorito(personaje) {
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
  function eliminarFavorito(id) {
    const favoritos = obtenerFavoritos().filter(fav => fav.id !== id);
    guardar(CLAVE_FAVORITOS, favoritos);
  }


  // para saber si ya esta guardado (y mostrar el boton distinto)
  function esFavorito(id) {
    return obtenerFavoritos().some(fav => fav.id === id);
  }


  // ---------- cache del listado (guarda lo que trae la api para no volver a llamarla) ----------

  function leerCache() {
    return leer(CLAVE_CACHE);
  }

  function guardarCache(personajes) {
    guardar(CLAVE_CACHE, personajes);
  }


  return { obtenerFavoritos, agregarFavorito, eliminarFavorito, esFavorito, leerCache, guardarCache };
})();
