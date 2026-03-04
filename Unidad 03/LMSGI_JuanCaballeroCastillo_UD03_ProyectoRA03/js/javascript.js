// Efecto de carga inicial suave
setTimeout(() => {
    const contenedor = document.querySelector('main');
    if (contenedor) contenedor.style.opacity = '1';
}, 100);