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
console.log("Resta: ",a - b);
console.log("Multiplicación: ",a * b);
console.log("División: ",a / b);
console.log("Resto (Modulo): ",a % b);
console.log("Potencia: ",a ** b);
console.log("Parte entera: ",Math.trunc(a/b)); // Numero entero
console.log("Parte baja: ",Math.floor(a/b)); // Numero bajo
console.log("Parte superior: ",Math.ceil(a/b));  // Numero alto

// Tipo primitivos de manejo de String

const nombre = "Compi";
console.log("Hola" + nombre);
console.log(`Hola ${nombre}`);