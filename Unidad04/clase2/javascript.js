const btnCargar = document.querySelector("#btnCargar");
const estado = document.querySelector("#estado");
const lista = document.querySelector("#lista");

btnCargar.addEventListener("click", () => {

    // 1) Estado inicial para informar al usuario 
    estado.textContent = "Cargando...";
    estado.className = "";
    lista.innerHTML = "";

    // 2) Lanzamos la petición HTTP: fetch devuelve una Promise<Response>
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            // 3) Proceso la respuesta y comprobamos si es correcto
            if (!response.ok) {
                // Esto nos mandara al catch
                throw new Error(`No se pudo cargar el código JSON. Código HTTPS${response.status}`);
            }

            // 4) Convertimos el body de la response en JSON: esto devolvera una nueva Promise<any>
            return response.json();

        })
        .then(data => {
            // 5) data es un array de objetos JS (ya parseados)
            estado.textContent = `Recibidos ${data.lenght} usuarios`;

            // ==== Manera mala ====

            // const card = document.createElement("div");
            // card.className = "card";
            // card.innerHTML = `
            //     <strong>${data[0].name}</strong><br>
            //     <span>${data[0].email} </span><br>
            //     <small>${data[0].phone} </small>
            // `

            
            for (const user of data) {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
                <strong>${user.name}</strong><br>
                <span>${user.email} </span><br>
                <small>${user.phone} </small>
                `
                lista.appendChild(card);
            }
        })
        .catch((err) => {
            // 7) Si hay error de red o un throw anterior, acabamos aqui
            estado.textContent = "Error cargando usuarios";
            estado.className = "error";
            console.error(err);
        })

});