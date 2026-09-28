const botonCargar = document.querySelector("#cargar");
const contenedorPeliculas = document.querySelector("#peliculas");
function cargarPeliculas() {
  fetch("js/datos.json")
    .then(respuesta => respuesta.json())
.then(peliculas => {
  contenedorPeliculas.innerHTML = "";

  for (const pelicula of peliculas) {
    contenedorPeliculas.innerHTML += `
      <div class="tarjeta">
        <h3>${pelicula.titulo}</h3>
        <p>${pelicula.genero}</p>
        <p>${pelicula.descripcion}</p>
      </div>
    `;
  }
});
}
botonCargar.addEventListener("click", cargarPeliculas);
const botonTema = document.querySelector("#tema");

botonTema.addEventListener("click", function() {
  document.body.classList.toggle("claro");
});