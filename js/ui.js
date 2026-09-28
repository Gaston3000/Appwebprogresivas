// funciones que dibujan cosas en pantalla, las uso en las 3 paginas
// afuera solo sale el objeto Ui con sus funciones

const Ui = (() => {

  // la api devuelve todo en ingles, esto es para mostrarlo en castellano
  const ESTADOS = {
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

  function traducirEstado(estado) {
    return ESTADOS[estado];
  }

  function traducirEspecie(especie) {
    return ESPECIES[especie] || especie;
  }


  // cambia el boton de favorito de la tarjeta segun si ya esta guardado o no
  function marcarBotonFavorito(boton, guardado) {
    boton.textContent = guardado ? 'En favoritos' : 'Agregar a favoritos';
    boton.classList.toggle('tarjeta__favorito--guardado', guardado);
  }


  // arma la tarjeta de un personaje (foto, nombre, estado, especie y link al detalle)
  // en el listado lleva el boton de agregar a favoritos,
  // en la pagina de favoritos le paso conEliminar = true y lleva el de quitar
  function crearTarjeta(personaje, conEliminar = false) {
    const li = document.createElement('li');

    // la clase del estado la uso en el css para el color del puntito
    const claseEstado = personaje.status.toLowerCase();

    let boton;
    if (conEliminar) {
      boton = `<button type="button" class="tarjeta__quitar" data-id="${personaje.id}" aria-label="Quitar a ${personaje.name} de favoritos">Quitar</button>`;
    } else {
      const guardado = Almacen.esFavorito(personaje.id);
      boton = `<button type="button" class="tarjeta__favorito${guardado ? ' tarjeta__favorito--guardado' : ''}" data-id="${personaje.id}">${guardado ? 'En favoritos' : 'Agregar a favoritos'}</button>`;
    }

    li.innerHTML = `
      <article class="tarjeta">
        <img class="tarjeta__foto" src="${personaje.image}" alt="${personaje.name}" width="300" height="300" loading="lazy">
        <div class="tarjeta__cuerpo">
          <h3 class="tarjeta__nombre">${personaje.name}</h3>
          <p class="tarjeta__estado">
            <span class="punto punto--${claseEstado}"></span>
            ${traducirEstado(personaje.status)} · ${traducirEspecie(personaje.species)}
          </p>
          <div class="tarjeta__acciones">
            <a class="tarjeta__link" href="./detalle.html?id=${personaje.id}">Ver ficha</a>
            ${boton}
          </div>
        </div>
      </article>
    `;

    return li;
  }


  // dibuja todas las tarjetas en el contenedor
  function renderizarListado(personajes, contenedor, conEliminar = false) {
    // lo vacio primero asi no se acumulan las busquedas
    contenedor.innerHTML = '';

    personajes.forEach(personaje => {
      contenedor.appendChild(crearTarjeta(personaje, conEliminar));
    });
  }


  // muestra un mensaje. tipo puede ser 'cargando', 'error' o 'vacio' (para la clase css)
  // si le paso una funcion en alReintentar, agrega un boton para volver a probar
  function mostrarEstado(contenedor, mensaje, tipo, alReintentar) {
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


  function limpiarEstado(contenedor) {
    contenedor.className = 'estado';
    contenedor.innerHTML = '';
  }


  return {
    traducirEstado,
    traducirEspecie,
    marcarBotonFavorito,
    renderizarListado,
    mostrarEstado,
    limpiarEstado
  };
})();
