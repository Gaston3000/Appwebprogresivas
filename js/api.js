// =========================================================
// api.js — TODO lo que habla con la API vive acá.
// Ningún otro archivo hace fetch directamente.
//
// Endpoints de Rick and Morty (sin API key):
//   Listado:   https://rickandmortyapi.com/api/character          (20 por página)
//   Página N:  https://rickandmortyapi.com/api/character?page=2
//   Búsqueda:  https://rickandmortyapi.com/api/character?name=rick (búsqueda parcial)
//   Detalle:   https://rickandmortyapi.com/api/character/1
//
// ⚠️ DATO CLAVE (probado): si la búsqueda no encuentra nada,
//    la API responde HTTP 404 con {"error":"There is nothing here"}.
//    Entonces un 404 en la BÚSQUEDA no es un error de conexión: significa "sin resultados".
//    Tenés que distinguir los dos casos para mostrar el mensaje correcto.
//
// Recordá: fetch NO entra al catch con un 404/500. Solo falla si se cae la red.
//          Por eso hay que revisar response.ok a mano.
// =========================================================

// TODO: una constante con la URL base (así no la repetís en cada función)


// ---------------------------------------------------------
// Trae la primera página de personajes.
// Devuelve: el array de personajes (data.results)
// ---------------------------------------------------------
export async function obtenerPersonajes() {
  // TODO:
  // 1. (ADICIONAL cache) ¿Ya hay personajes guardados en localStorage? → devolvelos sin llamar a la API
  // 2. fetch a la URL del listado
  // 3. si !response.ok → lanzar un Error (throw) con un mensaje claro
  // 4. convertir con response.json()
  // 5. (ADICIONAL cache) guardar el resultado en localStorage
  // 6. devolver el array
  //
  // Pregunta para la defensa: ¿dónde se atrapa el error que lanzás acá?
}


// ---------------------------------------------------------
// Busca personajes por nombre.
// Devuelve: array de personajes, o array VACÍO si no hay resultados.
// ---------------------------------------------------------
export async function buscarPersonajes(texto) {
  // TODO:
  // 1. armar la URL con ?name= (pista: encodeURIComponent para espacios y caracteres raros)
  // 2. fetch
  // 3. si response.status es 404 → devolver [] (sin resultados, NO es error)
  // 4. si !response.ok por otra razón → throw
  // 5. json → devolver data.results
}


// ---------------------------------------------------------
// Trae UN personaje por id.
// Devuelve: el objeto del personaje
// ---------------------------------------------------------
export async function obtenerPersonajePorId(id) {
  // TODO: fetch a /character/{id}, validar response.ok, devolver el json
}
