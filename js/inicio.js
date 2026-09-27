// pagina de inicio: listado + buscador

// TODO: imports de api.js y ui.js
import { obtenerPersonajes } from './api.js';

// prueba rapida para ver que llegan los datos, despues lo saco
obtenerPersonajes()
  .then(personajes => console.log(personajes))
  .catch(error => console.error(error));


// TODO: agarrar form, input, lista y div de estado


// carga los personajes al entrar
async function cargarListadoInicial() {
  // TODO: mostrar cargando, try/catch, si falla mensaje de error en pantalla (no solo consola)
}


// cuando se manda el buscador
async function manejarBusqueda(evento) {
  // TODO: preventDefault, leer el input con trim, buscar y si viene vacio avisar que no hay resultados
}


// TODO: addEventListener('submit') en el form

// TODO: llamar a cargarListadoInicial()
