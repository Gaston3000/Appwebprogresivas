// pagina de inicio: listado + buscador

import { obtenerPersonajes, buscarPersonajes } from './api.js';
import { renderizarListado, mostrarEstado, limpiarEstado } from './ui.js';


const form = document.querySelector('#form-busqueda');
const input = document.querySelector('#input-busqueda');
const lista = document.querySelector('#lista-personajes');
const estado = document.querySelector('#estado');
const titulo = document.querySelector('#titulo-listado');
const botonVerTodos = document.querySelector('#ver-todos');


// carga los personajes al entrar (y cuando se limpia la busqueda)
async function cargarListadoInicial() {
  titulo.textContent = 'Personajes';
  botonVerTodos.hidden = true;
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


// busca en la api y muestra los resultados
async function buscar(texto) {
  titulo.textContent = `Resultados para "${texto}"`;
  botonVerTodos.hidden = false;
  lista.innerHTML = '';
  mostrarEstado(estado, 'Buscando en todas las dimensiones…', 'cargando');

  try {
    const resultados = await buscarPersonajes(texto);

    if (resultados.length === 0) {
      mostrarEstado(estado, `No encontramos ningún personaje que se llame "${texto}". Probá con otro nombre.`, 'vacio');
      return;
    }

    renderizarListado(resultados, lista);
    limpiarEstado(estado);
  } catch (error) {
    console.error(error);
    mostrarEstado(
      estado,
      'No se pudo hacer la búsqueda porque falló la conexión con la API. Volvé a intentarlo.',
      'error',
      () => buscar(texto)
    );
  }
}


// cuando se manda el buscador
function manejarBusqueda(evento) {
  // sin esto el form recarga la pagina
  evento.preventDefault();

  const texto = input.value.trim();

  // si lo mandan vacio vuelvo al listado de siempre
  if (texto === '') {
    cargarListadoInicial();
    return;
  }

  buscar(texto);
}


// uso submit y no click asi tambien funciona apretando enter
form.addEventListener('submit', manejarBusqueda);

botonVerTodos.addEventListener('click', () => {
  input.value = '';
  cargarListadoInicial();
});

cargarListadoInicial();
