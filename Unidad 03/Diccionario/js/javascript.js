// Elementos HTML del DOM
const selectProduct = document.getElementById("selectProducto");
const infoProduct = document.getElementById("infoProducto");
const tablaMenu = document.getElementById("tablaMenu");

// Objetos como DICCIONARIO (clave -> valor)

const carta = {
    cafe: { precio: 1.2, emoji: "☕", texto: "Café", alergenos: [] },
    te: { precio: 1.1, emoji: "🍵", texto: "Té chai", alergenos: [] },
    pitufo: { precio: 1.8, emoji: "🥪", texto: "Pitufo mixto", alergenos: ["gluten"] },
    donut: { precio: 2, emoji: "🍩", texto: "Donut", alergenos: ["gluten", "huevo"] }
};

// Como acceder a valor de una variable usando claves. Notacion preferida -> con corchetes [] y sin puntos

const producto = "pitufo";
// console.log(`Notacion con punto -> El precio del ${producto} es : ${carta.producto.precio}`); // ❌ NO puedo usar variable
console.log(`Notacion con punto -> El precio del ${producto} es : ${carta.pitufo.precio}`); // 👍 SI sin usar variable


console.log(`Notacion con punto -> El precio del ${producto} es : ${carta[producto].precio}`); // 👍 SI USANDO usar variable

// Método para obtener las claves de un objeto
const claves = Object.keys(carta);

console.log(claves[1]);