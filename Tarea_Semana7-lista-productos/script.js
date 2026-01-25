// Arreglo inicial de productos
const productosIniciales = [
    { nombre: 'Laptop Gamer', precio: '$1200', descripcion: 'Potente para juegos y edición.' },
    { nombre: 'Smartphone', precio: '$800', descripcion: 'Cámara 108MP y batería larga.' },
    { nombre: 'Auriculares', precio: '$150', descripcion: 'Cancelación de ruido activa.' },
];

// Función para renderizar lista
function renderizarLista(productos) {
    const lista = document.getElementById('lista-productos');
    lista.innerHTML = '';  // Limpiar lista

    productos.forEach((producto, index) => {
        // Plantilla dinámica con colores alternos via CSS nth-child
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p class="precio">${producto.precio}</p>
            <p>${producto.descripcion}</p>
        `;
        lista.appendChild(li);
    });
}

// Cargar productos al inicio
document.addEventListener('DOMContentLoaded', () => {
    renderizarLista(productosIniciales);
});

// Función agregar producto (mejorada)
function agregarProducto() {
    const nombreInput = document.getElementById('nombre');
    const precioInput = document.getElementById('precio');
    const descInput = document.getElementById('desc');

    const nombre = nombreInput.value.trim();
    const precio = precioInput.value.trim();
    const desc = descInput.value.trim();

    if (nombre && precio && desc) {
        const nuevoProducto = { 
            nombre: nombre.charAt(0).toUpperCase() + nombre.slice(1),  // Capitalizar
            precio, 
            descripcion: desc 
        };
        productosIniciales.push(nuevoProducto);
        renderizarLista(productosIniciales);  // Re-renderiza con colores alternos

        // Limpiar inputs
        nombreInput.value = '';
        precioInput.value = '';
        descInput.value = '';
        nombreInput.focus();  // Foco en primer input
    } else {
        alert('Por favor, completa todos los campos.');
    }
}
