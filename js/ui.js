// funciones que dibujan cosas en pantalla, las uso en las 3 paginas


// la api devuelve todo en ingles, esto es para mostrarlo en castellano
export const ESTADOS = {
  Alive: 'Vivo',
  Dead: 'Muerto',
  unknown: 'Desconocido'
};

// traduzco las especies mas comunes, las demas quedan como vienen
const ESPECIES = {
  Human: 'Humano',
  Humanoid: 'Humanoide',
  Robot: 'Robot',
  Animal: 'Animal',
  unknown: 'Desconocida'
};

export function traducirEspecie(especie) {
  return ESPECIES[especie] || especie;
}


// arma la tarjeta de un personaje (foto, nombre, estado, especie y link al detalle)
// en favoritos le paso conEliminar = true para que tenga el boton de quitar
export function crearTarjeta(personaje, conEliminar = false) {
  const li = document.createElement('li');

  // la clase del estado la uso en el css para el color del puntito
  const claseEstado = personaje.status.toLowerCase();

  const botonEliminar = conEliminar
    ? `<button type="button" class="tarjeta__quitar" data-id="${personaje.id}" aria-label="Quitar a ${personaje.name} de favoritos">Quitar</button>`
    : '';

  li.innerHTML = `
    <article class="tarjeta">
      <img class="tarjeta__foto" src="${personaje.image}" alt="${personaje.name}" width="300" height="300" loading="lazy">
      <div class="tarjeta__cuerpo">
        <h3 class="tarjeta__nombre">${personaje.name}</h3>
        <p class="tarjeta__estado">
          <span class="punto punto--${claseEstado}"></span>
          ${ESTADOS[personaje.status]} · ${traducirEspecie(personaje.species)}
        </p>
        <div class="tarjeta__acciones">
          <a class="tarjeta__link" href="./detalle.html?id=${personaje.id}">Ver ficha</a>
          ${botonEliminar}
        </div>
      </div>
    </article>
  `;

  return li;
}


// dibuja todas las tarjetas en el contenedor
export function renderizarListado(personajes, contenedor, conEliminar = false) {
  // lo vacio primero asi no se acumulan las busquedas
  contenedor.innerHTML = '';

  personajes.forEach(personaje => {
    contenedor.appendChild(crearTarjeta(personaje, conEliminar));
  });
}


// muestra un mensaje. tipo puede ser 'cargando', 'error' o 'vacio' (para la clase css)
// si le paso una funcion en alReintentar, agrega un boton para volver a probar
export function mostrarEstado(contenedor, mensaje, tipo, alReintentar) {
  contenedor.className = `estado estado--${tipo}`;
  contenedor.innerHTML = `<p>${mensaje}</p>`;

  if (alReintentar) {
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'boton';
    boton.textContent = 'Reintentar';
    boton.addEventListener('click', alReintentar);
    contenedor.appendChild(boton);
  }
}


export function limpiarEstado(contenedor) {
  contenedor.className = 'estado';
  contenedor.innerHTML = '';
}
