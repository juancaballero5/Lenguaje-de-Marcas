
const ENDPOINT = "https://api.thedogapi.com/v1/images/search";

const imagen = document.getElementById("resultado");
const boton = document.getElementById("btnPerro");
const mensaje = document.getElementById(".mensaje");

boton.addEventListener("click", () => {
    // Mientras carga...
    imagen.innerHTML = `<p class = "mensaje"> Cargando imagen...</p>` 

    fetch(ENDPOINT)
        .then(response => {
        // 

            // Manejamos la respuesta
            if (!response.ok) {
                throw new Error("Respuesta no OK. Código de error HTTP: " + response.status);
            }
            
            // Transformamos el cuerpo en formato JSON
            return response.json();
        })
        .then(data => {
            // Depuramos en consola
            console.log("Datos:", data);

            //=============== APUNTES ========================
            // LA PROPIEDAD ARRAY COMPRUEBA SI LO QUE ESTA EN PARENTESIS ES UN ARRAY O NO

            if (Array.isArray(data) ||data.length=== 0 || !data[0].url) {
                throw new Error("Datos en formato inesperado: no se  encontró la imagen.")
            }

            const urlImagen = data[0].url;

            const img = document.createElement("img");
            img.src = urlImagen;
            img.alt = "Imagen de un perrete";
            img.className = "imgaenanimal";

            // Reseteo el contenedor de la imagen 
            imagen.innerHTML = "";
            imagen.appendChild(img);

        })
        .catch (error => {
            mensaje.innerHTMLt = `<p class = "mensaje">Ha fallado la carga de imagen ${error.message} </p>`
        })
})
