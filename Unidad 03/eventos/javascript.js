"use strict";
const nombre = "Sergio";

// Gestión de eventos
// 1ª forma: atributo HTML (❌ no recomendable)

// function saludar() {
//     const texto = document.querySelector(".salida");
//     texto.textContent = `Salida: Hola ${nombre}`;
// }

// 2º forma: API JS setAttribute - Añadimos el atributo HTML
// const boton = document.getElementById("btn");

// boton.setAttribute("onclick","saludar()");
// function saludar() {
//     const texto = document.querySelector(".salida");
//     texto.textContent = `Salida: Hola ${nombre}`;
// }

// 3ª forma: addEventListener ✅ (la mejor)
// const boton = document.getElementById("btn");
// const texto = document.querySelector(".salida");

// boton.addEventListener("click", () => {
//     texto.textContent = `Salida: Hola ${nombre}`;
// });

// Formas de pasar la función a addEventListener
// A) Función definida aparte y pasar referencia (la “clásica”)
// const boton = document.getElementById("btn");
// const texto = document.querySelector(".salida");

// function saludar() {
//     texto.textContent = `Salida: Hola ${nombre}`;
// }

// boton.addEventListener("click", saludar);

// B) El error típico: poner () (se ejecuta al cargar, no al click)
// boton.addEventListener("click", saludar());  //❌ MAL
// boton.addEventListener("click", saludar);    //✅ BIEN

// C) Función anónima (muy común)
// boton.addEventListener("click", function () {
//     texto.textContent = `Salida: Hola ${nombre}`;
// });

// D) Función flecha (de las más usadas actualmente)
// boton.addEventListener("click", () => {
//     texto.textContent = `Salida: Hola ${nombre}`;
// });

// ¿Y si hace falta pasarle parámetros?
// function suma(num1, num2) {
//     texto.textContent = num1+num2;
// }
// boton.addEventListener("click", () => suma(4,6));

// Variante con función anónima
// boton.addEventListener("click", function () {
//     suma(7,8);
// });