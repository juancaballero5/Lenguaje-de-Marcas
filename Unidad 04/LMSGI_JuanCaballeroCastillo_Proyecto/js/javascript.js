document.addEventListener("DOMContentLoaded", function() {

    const ENDPOINT = "https://rickandmortyapi.com/api/";

    const boton = document.getElementById("boton");
    const imagenPersonaje = document.getElementById("juego");

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

            //=============== APUNTES ========================
            // LA PROPIEDAD ARRAY COMPRUEBA SI LO QUE ESTA EN PARENTESIS ES UN ARRAY O NO

            if (!typeof data === "object" && data === null && Array.isArray(data)) {
                throw new Error("Datos en formato inesperado: no se  encontró la imagen.")
            }

            const urlImagen = data;

            const img = document.createElement("img");
            img.src = urlImagen;
            img.alt = "Imagen de un perrete";
            img.className = "imagenanimal";

            // Reseteo el contenedor de la imagen 
            imagen.innerHTML = "";
            imagen.appendChild(img);

        })
        .catch (error => {
            imagenPersonaje.innerHTML = `<p class = "texto">Ha fallado la carga de imagen ${error.message}</p>`;
        })

    })

});