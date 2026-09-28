// todo lo que pide datos a la api esta aca

// endpoints:
// listado  -> https://rickandmortyapi.com/api/character
// busqueda -> https://rickandmortyapi.com/api/character?name=rick
// detalle  -> https://rickandmortyapi.com/api/character/1

// igual que en storage.js: afuera solo sale el objeto Api con sus funciones
const Api = (() => {

  const URL_BASE = 'https://rickandmortyapi.com/api/character';


  // trae la primera pagina de personajes
  async function obtenerPersonajes() {
    // si ya los traje antes los saco del localStorage y no llamo a la api
    const cache = Almacen.leerCache();
    if (cache) {
      return cache;
    }

    const response = await fetch(URL_BASE);

    // si la api responde mal (500, 404, etc) fetch no tira error solo, lo tiro yo
    if (!response.ok) {
      throw new Error(`Error ${response.status} al traer los personajes`);
    }

    const data = await response.json();
    Almacen.guardarCache(data.results);
    return data.results; // results es el array de 20 personajes, lo demas es info de paginas
  }


  // busca por nombre, si no encuentra devuelve []
  // ojo: si no hay resultados la api tira 404, eso no es error de conexion
  async function buscarPersonajes(texto) {
    // encodeURIComponent por si escriben espacios o caracteres raros
    const response = await fetch(`${URL_BASE}/?name=${encodeURIComponent(texto)}`);

    if (response.status === 404) {
      return [];
    }

    if (!response.ok) {
      throw new Error(`Error ${response.status} al buscar`);
    }

    const data = await response.json();
    return data.results;
  }


  // trae un personaje por id. si no existe devuelve null
  async function obtenerPersonajePorId(id) {
    const response = await fetch(`${URL_BASE}/${id}`);

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error(`Error ${response.status} al traer el personaje`);
    }

    return response.json();
  }


  return { obtenerPersonajes, buscarPersonajes, obtenerPersonajePorId };
})();
