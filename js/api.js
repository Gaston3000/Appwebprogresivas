// todo lo que pide datos a la api esta aca

// endpoints:
// listado  -> https://rickandmortyapi.com/api/character
// busqueda -> https://rickandmortyapi.com/api/character?name=rick
// detalle  -> https://rickandmortyapi.com/api/character/1

// ojo: si la busqueda no encuentra nada la api tira 404, eso no es error de conexion,
// es que no hay resultados. y fetch no cae en el catch con un 404, hay que mirar response.ok

const URL_BASE = 'https://rickandmortyapi.com/api/character';


// trae la primera pagina de personajes
export async function obtenerPersonajes() {
  // TODO (extra): antes fijarse si ya estan guardados en localStorage

  const response = await fetch(URL_BASE);

  // si la api responde mal (500, 404, etc) fetch no tira error solo, lo tiro yo
  if (!response.ok) {
    throw new Error(`Error ${response.status} al traer los personajes`);
  }

  const data = await response.json();
  return data.results; // results es el array de 20 personajes, lo demas es info de paginas
}


// busca por nombre, si no encuentra devuelve []
export async function buscarPersonajes(texto) {
  // TODO: armar url con ?name= (usar encodeURIComponent), si da 404 devolver []
}


// trae un personaje por id
export async function obtenerPersonajePorId(id) {
  // TODO
}
