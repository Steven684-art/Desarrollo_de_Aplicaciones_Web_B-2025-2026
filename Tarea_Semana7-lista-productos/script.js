let productos = []; // Lista vacía al inicio

function renderizarProductos() {
    const lista = document.getElementById('lista-productos');
    if (productos.length === 0) {
        lista.innerHTML = '<li class="empty-list">Agrega tu primer producto...</li>';
        return;
    }
    
    lista.innerHTML = '';
    productos.forEach(producto => {
        const li = document.createElement('li');
        
        // Info del producto siempre a la izquierda
        const info = document.createElement('div');
        info.className = 'producto-info';
        info.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p class="precio">${producto.precio}</p>
            <p>${producto.desc}</p>
        `;
        li.appendChild(info);
        
        // Imagen solo si hay URL, a la derecha
        if (producto.imagen) {
            const img = document.createElement('img');
            img.src = producto.imagen;
            img.alt = producto.nombre;
            img.className = 'producto-img';
            img.onerror = function() {
                this.src = 'https://picsum.photos/300?random=99'; // Fallback
            };
            li.appendChild(img);
        }
        
        lista.appendChild(li);
    });
}

function agregarProducto() {
    const nombre = document.getElementById('nombre').value.trim();
    const precio = document.getElementById('precio').value.trim();
    const desc = document.getElementById('desc').value.trim();
    const imagen = document.getElementById('imagen').value.trim();

    if (nombre && precio) {
        productos.push({ nombre, precio, desc, imagen });
        renderizarProductos();
        // Limpiar inputs
        document.getElementById('nombre').value = '';
        document.getElementById('precio').value = '';
        document.getElementById('desc').value = '';
        document.getElementById('imagen').value = '';
        document.getElementById('nombre').focus();
    } else {
        alert('Por favor, ingresa al menos nombre y precio.');
    }
}

// Render inicial (vacío)
document.addEventListener('DOMContentLoaded', renderizarProductos);
