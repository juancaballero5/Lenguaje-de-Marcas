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

const nombre = "Nicolas";
const apellidos = "Maduro Caca";
console.log("Hola " + nombre);
console.log(`Hola ${nombre} ${apellidos}`);

// Operadores de comparación

console.log(5>3);

// Operador de identidad (===) ---> Compara valor y tipo

console.log(5 == 5);
console.log(5 == "5");

console.log(5 === "5");  // Da false porque son de distinto tipo


const num = 5;
const palabra = "5";

console.log(num.constructor.name);
console.log(palabra.constructor.name);

console.log(num === palabra); //false por que son distinto tipo


const precio = 67;
const unidades = 4;

console.log(`Precio : ${precio}€`);
console.log(`Unidades: ${unidades}`);
console.log(`Total: ${unidades*precio}€`);

// Arrays 

const juegos = ["Zelda","Counter-Strike","Minecraft"];
console.log("Array completo:",juegos.toString());

console.log("Cantidad: ",juegos.length);
console.log("Primer elemento: ",juegos[0]);

// Añadir elementos
juegos.push("Fortnite");
console.log("Array completo: ",juegos.toString());

// Eliminar elementos
const eliminado = juegos.pop();
console.log("Array completo: ",eliminado.toString());

// Arrays mixtos

const mixto = ["hola", 42 , true, {nombre : "Ana"},[1, 2, 3]];

console.log("Mixtos: ", mixto);
console.log(`Elemento 0 (${mixto[0].constructor.name}): ${mixto[0]}`);
console.log(`Elemento 1 (${mixto[1].constructor.name}): ${mixto[1]}`);
console.log(`Elemento 2 (${mixto[2].constructor.name}): ${mixto[2]}`);
console.log(`Elemento 3 (${mixto[3].constructor.name}): ${mixto[3]}`);
console.log(`Elemento 4 (${mixto[4].constructor.name}): ${mixto[4]}`);

// Objetos

const alumno = {nombre: "Ana",
    curso : "1º DAW",
    edad :16,
    repetidor: false
};

console.log("Alumno: ",alumno);
console.log("Nombre: ",alumno.nombre);
console.log("Curso: ",alumno.curso);
console.log("Edad: ",alumno.edad);
console.log("Repetidor: ",alumno.repetidor);

alumno.nombre = "Ana María";

console.log("Nuevo nombre: ",alumno.nombre);

// Ejercicio objeto

const producto = { nombre:"Caca",
    precio:67,
    Stock:6
};

console.log(`Producto : ${producto.nombre} - Precio: ${producto.precio}€ - Stock: ${producto.Stock}`);


// Funciones

function total(precio,unidades) {
    return precio * unidades; // Si no hubiera return, devuelve undefined.
};

console.log("Total 9.99 x 3 = ",total(9.99,3));


// Función declarada como expresión (Como valor de una variable).
let saludar = function (nombre) {
    return `Hola ${nombre}`;
};

console.log(saludar("Caca"));


// Función Arrow o flecha: En JavaScript modero

const func = function () {
    return "Función Tradicional.";
};

const func2 = () => {
    // cuerpo de la función
    return "Función flecha";
};

const suma = (a,b) => {
    return a+b;
};

const total2 = (precio,unidades) => precio + unidades;

console.log("Función Tradicional:",func);
console.log("Función Flecha:",func2);
console.log("Suma:",suma(4,10));
console.log("Total:",total2(21.12,5));

// Mini reto: función que recibe un objeto y devuelve un template string

function etiquetaProducto(prod) {
    return `${prod.nombre} - ${prod.precio}€`;
};

console.log(etiquetaProducto({nombre:"Ratón", precio:12.99}));

// Crea un array de 3 objetos productos (nombre/precio)
// y una función que devuelva el precio total sumado
//  (aqui puedes hacerlo simple: sumar 3 elementos a MutationObserver, sin bucles si no quieres entrar).

function total (conjunto) {
    return `${objeto1.precio + objeto2.precio + objeto3.precio} €`;
}

const conjunto = [objeto1 = {nombre: "Cubo Rubic", precio : 12}, objeto2 = {nombre : "Cascos Gamer" , precio : 87}, objeto3 = {nombre: "Kebab", precio: 7}];

console.log(total ({objeto1 = {nombre: "Cubo Rubic", precio : 12}, objeto2 = {nombre : "Cascos Gamer" , precio : 87}, objeto3 = {nombre: "Kebab", precio: 7}}));

