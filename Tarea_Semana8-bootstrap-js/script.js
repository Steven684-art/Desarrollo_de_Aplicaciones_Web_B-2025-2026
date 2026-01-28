// Validación dinámica del formulario (Bootstrap nativo + custom)
(() => {
    'use strict';
    const form = document.querySelector('.needs-validation');
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);
})();

// Botón de alerta personalizada
document.getElementById('btnAlerta').addEventListener('click', () => {
    alert('¡Hola! Gracias por visitar mi página interactiva con Bootstrap y JavaScript. 😊');
});

// Smooth scroll para navbar (opcional, mejora UX)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
