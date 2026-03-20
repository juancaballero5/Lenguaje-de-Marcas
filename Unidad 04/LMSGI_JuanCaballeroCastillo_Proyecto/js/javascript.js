const ENDPOINT = "https://rickandmortyapi.com/api/";

const boton = document.getElementById("boton");
const imagenPersonaje = document.getElementById("juego");



document.addEventListener("DOMContentLoaded", function() {

    
});

const buscador = document.getElementById("buscador");
const sugerencias = document.getElementById("sugerencias");

const personajes = [
    "Juan Caballero",
    "Sergio Sánchez",
    "Soraya",
    "Alfredo Codes",
    "Burrito Sabanero"
];

buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase();
    sugerencias.innerHTML = "";

    if(texto === ""){
        return;
    }

    const filtrados = personajes.filter((nombre) => {
        return nombre.toLowerCase().startsWith(texto);
    });
    console.log(filtrados);

    filtrados.forEach((nombre) => {
        const div = document.createElement("div");
        div.textContent = nombre;
        div.className = "filtrado";
        div.addEventListener("click", () => {
            buscador.value = nombre;
            sugerencias.innerHTML = "";
        });
        sugerencias.appendChild(div);
    });
});

    boton.addEventListener("click", () => {

        // Mientras carga la foto del personaje 
        imagenPersonaje.innerHTML = `<p class="texto">Cargando imagen...</p>`;

        fetch(ENDPOINT)
        .then(response => {

            if (!response.ok) {
                throw new Error("Código de error HTTP: " + response.status);
            }

            return response.json();
        })
        .then(data => {

            // console.log(data);

            if (!typeof data === "object" && data === null && Array.isArray(data)) {
                throw new Error("Datos en formato inesperado: no se  encontró la imagen.")
            }

            const url = new URL(ENDPOINT + "character/avatar/" +  Math.floor(Math.random() * 827)+ ".jpeg");

            const img = document.createElement("img");
            img.src = url;
            img.alt = "Imagen";
            img.className = "imagen-personaje";

            // Reseteo el contenedor de la imagen 
            imagenPersonaje.innerHTML = "";
            imagenPersonaje.appendChild(img);

        })
        .catch (error => {
            imagenPersonaje.innerHTML = `<p class = "texto">Ha fallado la carga de imagen ${error.message}</p>`;
        })

    })

function buscarPersonaje(nombre) {
    
}