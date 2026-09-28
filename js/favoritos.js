// pagina de favoritos, aca no se llama a la api, todo sale del localStorage

import { obtenerFavoritos, eliminarFavorito } from './storage.js';
import { renderizarListado } from './ui.js';


const lista = document.querySelector('#lista-favoritos');
const contador = document.querySelector('#contador');
const vacio = document.querySelector('#vacio');


// muestra los favoritos o el cuadro de que no hay ninguno
function mostrarFavoritos() {
  const favoritos = obtenerFavoritos();

  // el cuadro con rick y morty va solo cuando la lista esta vacia
  vacio.hidden = favoritos.length > 0;

  if (favoritos.length === 0) {
    lista.innerHTML = '';
    contador.textContent = '';
    return;
  }

  contador.textContent = favoritos.length === 1
    ? 'Tenés 1 personaje guardado.'
    : `Tenés ${favoritos.length} personajes guardados.`;

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
