"use strict";

/**
 * Metoddos de busqueda
 * 
 * - .getElementsById(id) -> Busca elementos con su id.
 * - .getElementsByClassName(class) -> Busca por nombre de clase.
 * - .getElementsByName(value) -> Busca elemento con el atributo name y el valor que le corresponda.
 * - .getElementsByTagName(tag) -> Busca etiquetas HTML tag.
 * 
 * */

const app = document.querySelector("#app");

const name = "1º DAW";

app.textContent = `Hola ${name}`;
app.textContent = "<p>Hola Sergio</p>";

app.innerHTML = "<strong>Hola Sergio</strong>";
app.innerHTML = `
<section>
    <p>Espero que esteis aprendiendo algo
    <strong>Menos mal que empieza el finde.</strong>
    </p>
</section>`;

// Métodos modernos para modificar contenido

console.log(app.getHTML());