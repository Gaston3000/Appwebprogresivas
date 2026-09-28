// pagina de favoritos, aca no se llama a la api, todo sale del localStorage

import { obtenerFavoritos, eliminarFavorito } from './storage.js';
import { renderizarListado, mostrarEstado, limpiarEstado } from './ui.js';


const lista = document.querySelector('#lista-favoritos');
const estado = document.querySelector('#estado');
const contador = document.querySelector('#contador');
const ilustracion = document.querySelector('#ilustracion-vacio');


// muestra los favoritos o el mensaje de que no hay ninguno
function mostrarFavoritos() {
  const favoritos = obtenerFavoritos();

  // el dibujo de rick y morty va solo cuando la lista esta vacia
  ilustracion.hidden = favoritos.length > 0;

  if (favoritos.length === 0) {
    lista.innerHTML = '';
    contador.textContent = '';
    mostrarEstado(
      estado,
      'Todavía no guardaste ningún personaje. Entrá a la ficha de alguno y tocá "Agregar a favoritos". <a href="./index.html">Ir al inicio</a>',
      'vacio'
    );
    return;
  }

  contador.textContent = favoritos.length === 1
    ? 'Tenés 1 personaje guardado.'
    : `Tenés ${favoritos.length} personajes guardados.`;

  limpiarEstado(estado);
  renderizarListado(favoritos, lista, true);
}


// eliminar: un solo listener en la lista y me fijo si tocaron un boton de quitar
// (asi no tengo que ponerle un listener a cada boton cada vez que redibujo)
lista.addEventListener('click', evento => {
  const boton = evento.target.closest('.tarjeta__quitar');
  if (!boton) return;

  // el data-id viene como string y el id guardado es numero
  eliminarFavorito(Number(boton.dataset.id));
  mostrarFavoritos();
});


mostrarFavoritos();
