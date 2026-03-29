const ENDPOINT = "https://rickandmortyapi.com/api/";
const ENDPOINT_PERSONAJES = "https://rickandmortyapi.com/api/character";

const boton = document.getElementById("boton");
const imagenPersonaje = document.getElementById("juego");
const buscador = document.getElementById("buscador");
const sugerencias = document.getElementById("sugerencias");
const contenedor_botones = document.getElementById("contenedor_botones");
const boton_adivinar = document.getElementById("adivinar");
let nombrePersonajeActual = "";
let personajes = [];

document.addEventListener("DOMContentLoaded", function() {
    guardarPersonajes();
});

buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase();
    sugerencias.innerHTML = "";

    if(texto === ""){
        return;
    }

    const filtrados = personajes.filter((nombre) => {
        return nombre.toLowerCase().startsWith(texto);
    });
    // console.log(filtrados);

    filtrados.forEach((nombre) => {
        const div = document.createElement("div");
        div.textContent = nombre;
        div.className = "filtrado tabla_sugerencias";
        div.addEventListener("click", () => {
            buscador.value = nombre;
            sugerencias.innerHTML = "";
        });
        sugerencias.appendChild(div);
    });
});

boton.addEventListener("click",iniciarJuego);

function iniciarJuego() {

    // Mientras carga la foto del personaje 
    imagenPersonaje.innerHTML = `<p class="texto">Cargando imagen...</p>`;
    contenedor_botones.innerHTML=`<button id="boton" class="boton rojo"><strong>REINICIAR</strong></button>
                                <button id="adivinar" class="boton verde"><strong>ADIVINAR</strong></button>`;

    let random = Math.floor(Math.random() * 826) + 1;

    document.getElementById("adivinar").addEventListener("click", adivinarPersonaje);

    document.getElementById("boton").addEventListener("click", iniciarJuego);

    fetch(ENDPOINT_PERSONAJES + "/" + random)
    .then(response => {

        if (!response.ok) {
            throw new Error("Código de error HTTP: " + response.status);
        }

        return response.json();
    })
    .then(data => {

        if (!typeof data === "object" && data === null && Array.isArray(data)) {
            throw new Error("Datos en formato inesperado: no se  encontró la imagen.")
        }

        nombrePersonajeActual = data.name;

        const img = document.createElement("img");
        img.src = data.image;
        img.alt = "Imagen";
        img.className = "imagen-personaje";

        // Reseteo el contenedor de la imagen 
        imagenPersonaje.innerHTML = "";
        imagenPersonaje.appendChild(img);

    })
    .catch (error => {
        imagenPersonaje.innerHTML = `<p class = "texto">Ha fallado la carga de imagen ${error.message}</p>`;
    });
}

function guardarPersonajes() {

    let urlPersonaje = ENDPOINT_PERSONAJES;
    
    function fetchPagina(url) {
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Código de error HTTP: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            const nombresPersonajes = data.results.map(character => character.name);
            personajes.push(...nombresPersonajes);

            if (data.info.next) {
                fetchPagina(data.info.next);
            }
        })
        .catch(error => {
            console.error("Error cargando personajes: " + error.message);
        });
    }

    fetchPagina(urlPersonaje);

}

function adivinarPersonaje() {
    const nombreEscrito = buscador.value.toLowerCase();
    const nombreCorrecto = nombrePersonajeActual.toLowerCase();

    if (nombreEscrito === nombreCorrecto) {
        contenedor_botones.innerHTML=`<div class="victoria"> ¡ADIVINASTE EL PERSONAJE! </div>
                                        <button id="boton" class="boton verde"><strong>¿REPETIR?</strong></button>`
        document.getElementById("boton").addEventListener("click", iniciarJuego);
    }
}