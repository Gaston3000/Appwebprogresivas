// =========================================================
// inicio.js — lógica de index.html
// Conecta: api.js (datos) + ui.js (dibujar)
// =========================================================

// TODO: importar lo que necesites de './api.js' y './ui.js'
//   import { ... } from './api.js';


// TODO: agarrar los elementos del DOM (form, input, contenedor del listado, contenedor de estado)
//   Pista: document.querySelector('#...')
//   Como es un módulo, estas constantes NO son globales de la página (bien para la rúbrica).


// ---------------------------------------------------------
// Carga el listado inicial
// ---------------------------------------------------------
async function cargarListadoInicial() {
  // TODO:
  // 1. mostrar "Cargando..."
  // 2. try {
  //      pedir los personajes (await)
  //      renderizarlos
  //      limpiar el estado
  //    } catch (error) {
  //      mostrar mensaje de ERROR claro: qué pasó + "volvé a intentarlo"
  //      (la consigna exige feedback VISIBLE, no alcanza con console.error)
  //    }
  //
  // Probalo: DevTools → Network → "Offline" → recargar. ¿Aparece tu mensaje?
}


// ---------------------------------------------------------
// Maneja el envío del buscador
// ---------------------------------------------------------
async function manejarBusqueda(evento) {
  // TODO:
  // 1. evento.preventDefault()   ← ¿qué pasa si no lo ponés?
  // 2. leer el texto del input (.value) y sacarle espacios (.trim())
  // 3. si está vacío → ¿qué hacés? (¿volver al listado inicial? ¿avisar?)
  // 4. mostrar "Buscando..."
  // 5. try: buscar → si el array viene vacío mostrar "No se encontraron personajes para '...'"
  //         si no, renderizar
  //    catch: mensaje de error de conexión
}


// TODO: registrar el listener del form ('submit') con addEventListener
//   Pregunta: ¿por qué 'submit' en el form y no 'click' en el botón? (pista: tecla Enter)


// TODO: llamar a cargarListadoInicial() para que arranque al abrir la página
