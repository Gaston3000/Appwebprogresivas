// pagina de detalle, se abre como detalle.html?id=5

import { obtenerPersonajePorId } from './api.js';
import { agregarFavorito, esFavorito } from './storage.js';
import { ESTADOS, traducirEspecie, mostrarEstado, limpiarEstado } from './ui.js';


const contenedor = document.querySelector('#detalle');
const estado = document.querySelector('#estado');

const GENEROS = {
  Male: 'Masculino',
  Female: 'Femenino',
  Genderless: 'Sin género',
  unknown: 'Desconocido'
};


// origen y ubicacion a veces vienen como "unknown"
function lugar(nombre) {
  return nombre === 'unknown' ? 'Desconocido' : nombre;
}


// saca el id de la url. si no hay o no es un numero devuelve null
function obtenerIdDeLaUrl() {
  const parametros = new URLSearchParams(window.location.search);
  const id = Number(parametros.get('id'));
  return Number.isInteger(id) && id > 0 ? id : null;
}


// cambia el boton segun si ya esta en favoritos o no
function actualizarBoton(boton, guardado) {
  boton.textContent = guardado ? 'En tus favoritos' : 'Agregar a favoritos';
  boton.classList.toggle('boton--guardado', guardado);
}


// dibuja el detalle con todos los datos + boton de favoritos
function renderizarDetalle(personaje) {
  const claseEstado = personaje.status.toLowerCase();
  const cantidadEpisodios = personaje.episode.length;

  // type muchas veces viene vacio, en ese caso no muestro la fila
  const filaTipo = personaje.type
    ? `<div><dt>Tipo</dt><dd>${personaje.type}</dd></div>`
    : '';

  contenedor.innerHTML = `
    <img class="detalle__foto" src="${personaje.image}" alt="${personaje.name}" width="300" height="300">

    <div class="detalle__info">
      <h1 class="detalle__nombre">${personaje.name}</h1>
      <p class="detalle__estado">
        <span class="punto punto--${claseEstado}"></span>
        ${ESTADOS[personaje.status]}
      </p>

      <dl class="datos">
        <div><dt>Especie</dt><dd>${traducirEspecie(personaje.species)}</dd></div>
        ${filaTipo}
        <div><dt>Género</dt><dd>${GENEROS[personaje.gender]}</dd></div>
        <div><dt>Origen</dt><dd>${lugar(personaje.origin.name)}</dd></div>
        <div><dt>Última ubicación</dt><dd>${lugar(personaje.location.name)}</dd></div>
        <div><dt>Episodios</dt><dd>Aparece en ${cantidadEpisodios} ${cantidadEpisodios === 1 ? 'episodio' : 'episodios'}</dd></div>
      </dl>

      <button type="button" class="boton boton--verde detalle__favorito"></button>
      <p class="detalle__aviso" aria-live="polite"></p>
    </div>
  `;

  const boton = contenedor.querySelector('.detalle__favorito');
  const aviso = contenedor.querySelector('.detalle__aviso');

  actualizarBoton(boton, esFavorito(personaje.id));

  boton.addEventListener('click', () => {
    const seAgrego = agregarFavorito(personaje);

    // si ya estaba no lo agrego de nuevo, solo aviso
    aviso.textContent = seAgrego
      ? 'Listo, lo guardaste en favoritos.'
      : 'Este personaje ya estaba en tus favoritos.';

    actualizarBoton(boton, true);
  });
}


async function iniciar() {
  const id = obtenerIdDeLaUrl();

  if (!id) {
    mostrarEstado(estado, 'No se indicó qué personaje mostrar. Volvé al inicio y elegí uno.', 'vacio');
    return;
  }

  mostrarEstado(estado, 'Abriendo el portal…', 'cargando');

  try {
    const personaje = await obtenerPersonajePorId(id);

    if (!personaje) {
      mostrarEstado(estado, `No existe ningún personaje con el número ${id}. Volvé al inicio y elegí otro.`, 'vacio');
      return;
    }

    renderizarDetalle(personaje);
    limpiarEstado(estado);
  } catch (error) {
    console.error(error);
    mostrarEstado(
      estado,
      'No se pudo cargar la ficha porque falló la conexión con la API. Volvé a intentarlo.',
      'error',
      iniciar
    );
  }
}


iniciar();
