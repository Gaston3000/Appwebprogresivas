// pagina de inicio: listado + buscador

import { obtenerPersonajes } from './api.js';
import { renderizarListado, mostrarEstado, limpiarEstado } from './ui.js';


const form = document.querySelector('#form-busqueda');
const input = document.querySelector('#input-busqueda');
const lista = document.querySelector('#lista-personajes');
const estado = document.querySelector('#estado');


// carga los personajes al entrar
async function cargarListadoInicial() {
  mostrarEstado(estado, 'Abriendo el portal…', 'cargando');

  try {
    const personajes = await obtenerPersonajes();
    renderizarListado(personajes, lista);
    limpiarEstado(estado);
  } catch (error) {
    console.error(error);
    lista.innerHTML = '';
    mostrarEstado(
      estado,
      'No se pudo conectar con la API de Rick and Morty. Revisá tu conexión y volvé a intentarlo.',
      'error',
      cargarListadoInicial
    );
  }
}


// cuando se manda el buscador
async function manejarBusqueda(evento) {
  // TODO: preventDefault, leer el input con trim, buscar y si viene vacio avisar que no hay resultados
}


// TODO: addEventListener('submit') en el form

cargarListadoInicial();
