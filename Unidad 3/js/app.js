"use strict"
// console.log("JS cargado correctamente");

// Variables: let y const
// 
// let = Modificable
// const = Constante

let edad = 18 ;
console.log("Edad: ", edad);
console.log(edad,edad.constructor.name);

edad = "27";
console.log("Nueva edad: " + edad);

const centro = "CPIFP Alan Turing";
console.log("Centro: ",centro);

// CASO DE ERROR
// centro = "CPIFP Otro"
// console.log("Nuevo centro: ",centro);

// ========================
// CLASE
// ========================

let puntos = 0;
puntos += 10;

console.log("Puntos: ",puntos);

// TIPOS DE VARIABLES PRIMITIVAS
const a = 10;
const b = 3;
console.log("Suma: ",a + b);
