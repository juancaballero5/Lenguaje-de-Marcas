document.addEventListener("DOMContentLoaded", function() {

    const jugadas = ["piedra","papel","tijera","lagarto", "spock"];

    // Variables
    let eleccion; 
    let resultado; 
    let victorias = 0; 
    let derrotas = 0;
    let empates = 0;
    
    const Gana = {
        piedra:["tijeras", "lagarto"],
        papel:["piedra","spock"],
        tijeras:["papel","lagarto"],
        lagarto:["spock","papel"],
        spock:["tijeras","piedra"]
    }
    
    const jugador = document.getElementById("eleccion-jugador"); 
    const cpu = document.getElementById("eleccion-CPU");

    const contadorVictorias = document.getElementById("victorias");
    const contadorDerrotas = document.getElementById("derrotas");
    const contadorEmpates = document.getElementById("empates");
    
    const botones = [...document.querySelectorAll(".boton-eleccion-jugada")];
    
    jugar();


    /**
    * @brief Ejecuta una ronda del juego con la elección del usuario.
    *
    * Esta función realiza los siguientes pasos:
    * 1. Reinicia los displays del juego.
    * 2. Genera la elección de la CPU de forma aleatoria.
    * 3. Muestra la elección del usuario y de la CPU con animaciones.
    * 4. Calcula el resultado de la ronda.
    * 5. Muestra el resultado y actualiza los contadores correspondientes.
    *
    * @return {void} No devuelve ningún valor.
    */
    function jugar() {

        for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", function () {
            mostrarEleccion(jugadas[i])
            eleccion = obtenerEleccionCPU();

            if (Object.values(Gana[jugadas[i]]).includes(eleccion)) {
                resultado = "victoria";
            } else if (Object.values(Gana[eleccion]).includes(jugadas[i])) {
                resultado = "derrota";;
            } else {
                resultado = "empate";
            }

            mostrarResultadoJugada(resultado);
        });
}

    }

    /**
    * @brief Genera aleatoriamente la elección de la CPU.
    *
    * Esta función selecciona una opción al azar entre las disponibles y la devuelve.
    *
    * @return {string} La elección de la CPU (por ejemplo: "piedra", "papel" o "tijera"...).
    */
    function obtenerEleccionCPU() {

        let jugada;
        const eleccionCPU = Math.floor(Math.random() * 6 );

        switch (eleccionCPU) {
            case 1:
            
                jugada = "piedra";
                cpu.textContent = "🪨"

                break;
            case 2:
                
                jugada = "papel";
                cpu.textContent = "📋"

                break;
            case 3:
                
                jugada = "tijera";
                cpu.textContent = "✂️"

                break;
            case 4:
                
                jugada = "lagarto";
                cpu.textContent = "🦎"

                break;
            case 5:
                
                jugada = "spock";
                cpu.textContent = "🖖"

            break;
        
        }

        return jugada;
    }

    /**
    * @brief Muestra la elección de un jugador (jugador humano o CPU) en un display con icono y texto.
    *
    * Esta función limpia el contenido del display, aplica la clase
    * para animación/estilo y agrega los elementos que representan
    * la jugada seleccionada (emoji y texto) del jugador indicado.
    *
    * @param {string} eleccion - La clave de la elección (por ejemplo: "piedra", "papel", "tijera"...).
    * @return {void} No devuelve ningún valor.
    */
    function mostrarEleccion(eleccion) {

            
        switch (eleccion) {
            case "piedra":
                jugador.textContent = "🪨"
                break;
            case "papel":
                jugador.textContent = "📋"
                break;
            case "tijera":
                jugador.textContent = "✂️"
                break;
            case "lagarto":
                jugador.textContent = "🦎"
                break;
            case "spock":
                jugador.textContent = "🖖"
                break;

            }

    }

    /**
    * @brief Muestra el resultado de una ronda en la interfaz del juego.
    *
    * Esta función actualiza el mensaje de resultado según si el usuario ganó,
    * perdió o empató, aplica la clase correspondiente para estilos y
    * actualiza los contadores de victorias, derrotas o empates.
    *
    * @param {string} resultado - Resultado de la ronda: "victoria", "derrota" o "empate".
    * @param {string} usuario - Elección del usuario (por ejemplo: "piedra", "papel", "tijera"...).
    * @param {string} cpu - Elección de la CPU (por ejemplo: "piedra", "papel", "tijera"...).
    * @return {void} No devuelve ningún valor.
    */
    function mostrarResultadoJugada(resultado) {

        if(resultado == "victoria") {
            victorias++;
        } else if (resultado == "derrota") {
            derrotas++;
        } else if (resultado == "empate") {
            empates++;
        }

        contadorVictorias.textContent = victorias;
        contadorDerrotas.textContent = derrotas;
        contadorEmpates.textContent = empates;

    }

    // Efecto de carga inicial suave
    setTimeout(() => {
        const contenedor = document.querySelector('main');
        if (contenedor) contenedor.style.opacity = '1';
    }, 100);

});