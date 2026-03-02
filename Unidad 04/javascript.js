const texto = '{"nombre":"Ana","edad":30}';

// TEXTO JSON <- -> Objeto JS
const persona = JSON.parse(texto);

// Objeto JS <- -> JSON
const usuario = {
    nombre: "Antonio",
    edad: 20,
    repetidor: false
};

// Pasar de objeto JS a JSON
const textoJSON = JSON.stringify(alumno);