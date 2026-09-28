// pagina de inicio: listado + buscador
// usa Api, Almacen y Ui, que se cargan antes en el html

// todo va adentro de una funcion que se ejecuta sola, asi estas variables no quedan globales
(() => {

  const form = document.querySelector('#form-busqueda');
  const input = document.querySelector('#input-busqueda');
  const lista = document.querySelector('#lista-personajes');
  const estado = document.querySelector('#estado');
  const titulo = document.querySelector('#titulo-listado');
  const botonVerTodos = document.querySelector('#ver-todos');

  // los personajes que estan en pantalla, los necesito para guardar el completo en favoritos
  let personajesMostrados = [];


  function mostrarPersonajes(personajes) {
    personajesMostrados = personajes;
    Ui.renderizarListado(personajes, lista);
  }


  // carga los personajes al entrar (y cuando se limpia la busqueda)
  async function cargarListadoInicial() {
    titulo.textContent = 'Personajes';
    botonVerTodos.hidden = true;
    Ui.mostrarEstado(estado, 'Abriendo el portal…', 'cargando');

    try {
      const personajes = await Api.obtenerPersonajes();
      mostrarPersonajes(personajes);
      Ui.limpiarEstado(estado);
    } catch (error) {
      console.error(error);
      lista.innerHTML = '';
      Ui.mostrarEstado(
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
    Ui.mostrarEstado(estado, 'Buscando en todas las dimensiones…', 'cargando');

    try {
      const resultados = await Api.buscarPersonajes(texto);

      if (resultados.length === 0) {
        Ui.mostrarEstado(estado, `No encontramos ningún personaje que se llame "${texto}". Probá con otro nombre.`, 'vacio');
        return;
      }

      mostrarPersonajes(resultados);
      Ui.limpiarEstado(estado);
    } catch (error) {
      console.error(error);
      Ui.mostrarEstado(
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

  // agregar a favoritos desde la tarjeta: un solo listener en la lista (delegacion)
  lista.addEventListener('click', evento => {
    const boton = evento.target.closest('.tarjeta__favorito');
    if (!boton) return;

    const id = Number(boton.dataset.id);
    const personaje = personajesMostrados.find(p => p.id === id);

    // agregarFavorito ya se fija que no este repetido
    Almacen.agregarFavorito(personaje);
    Ui.marcarBotonFavorito(boton, true);
  });

  cargarListadoInicial();
})();
