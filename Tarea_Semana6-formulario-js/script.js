document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const submitBtn = document.getElementById('submitBtn');
    const resetBtn = document.getElementById('resetBtn');

    // Expresión regular para email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Regex para contraseña: min 8 chars, 1 número, 1 especial
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    const fields = [
        { id: 'nombre', minLength: 3, errorId: 'nombreError', validate: (val) => val.length >= 3 },
        { id: 'email', errorId: 'emailError', validate: (val) => emailRegex.test(val) },
        { id: 'password', errorId: 'passwordError', validate: (val) => passwordRegex.test(val) },
        { id: 'confirmPassword', errorId: 'confirmPasswordError', validate: (val, formData) => val === formData.password.value },
        { id: 'edad', min: 18, errorId: 'edadError', validate: (val) => parseInt(val) >= 18 }
    ];

    // Función para validar campo individual
    function validateField(fieldId, formData = new FormData(form)) {
        const field = document.getElementById(fieldId);
        const errorEl = document.getElementById(fields.find(f => f.id === fieldId).errorId);
        const value = field.value.trim();
        let isValid = true;
        let errorMsg = '';

        const fieldConfig = fields.find(f => f.id === fieldId);
        if (fieldId === 'confirmPassword') {
            isValid = fieldConfig.validate(value, formData);
            errorMsg = isValid ? '' : 'Las contraseñas no coinciden';
        } else {
            isValid = fieldConfig.validate(value);
            if (!isValid) {
                if (fieldId === 'nombre') errorMsg = 'Mínimo 3 caracteres';
                else if (fieldId === 'email') errorMsg = 'Formato de email inválido';
                else if (fieldId === 'password') errorMsg = 'Mín. 8 chars, 1 número, 1 especial';
                else if (fieldId === 'edad') errorMsg = 'Debe ser mayor o igual a 18 años';
            }
        }

        field.className = isValid ? 'valid' : 'invalid';
        errorEl.textContent = errorMsg;
        return isValid;
    }

    // Validar todos los campos
    function validateForm() {
        const formData = new FormData(form);
        let allValid = true;
        fields.forEach(field => {
            if (!validateField(field.id, formData)) {
                allValid = false;
            }
        });
        submitBtn.disabled = !allValid;
        return allValid;
    }

    // Event listeners para validación en tiempo real
    fields.forEach(field => {
        const input = document.getElementById(field.id);
        input.addEventListener('input', validateForm);
        input.addEventListener('blur', validateForm);
    });

    // Submit
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            alert('¡Formulario enviado correctamente! Validaciones completadas.');
            // Aquí podrías enviar datos reales
        }
    });

    // Reset
    resetBtn.addEventListener('click', function() {
        form.reset();
        fields.forEach(field => {
            const input = document.getElementById(field.id);
            const errorEl = document.getElementById(field.errorId);
            input.className = '';
            errorEl.textContent = '';
        });
        submitBtn.disabled = true;
    });
});
