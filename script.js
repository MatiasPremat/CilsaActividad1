function enableHighContrast() {
    // Cambia la clase del contenedor del formulario para activar el estilo de alto contraste
    document.getElementById('form-container').classList.add('high-contrast');
    
    // Oculta el botón "estilo de alto contraste" y muestra el botón "estilo 1"
    document.getElementById('high-contrast-btn').style.display = 'none';
    document.getElementById('style1-btn').style.display = 'inline-block';
}

function disableHighContrast() {
    // Remueve la clase del contenedor del formulario para desactivar el estilo de alto contraste
    document.getElementById('form-container').classList.remove('high-contrast');
    
    // Oculta el botón "estilo 1" y muestra el botón "estilo de alto contraste"
    document.getElementById('high-contrast-btn').style.display = 'inline-block';
    document.getElementById('style1-btn').style.display = 'none';
}

function validateForm() {
    let isValid = true;
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value.trim();
    const paisResidencia = document.getElementById('pais-residencia').value.trim();
    
    // Limpiar mensajes de error previos
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(el => el.remove());

    // Validar campos vacíos
    if (!nombre) {
        showError('nombre', 'El campo Nombre es obligatorio.');
        isValid = false;
    } else if (!validateOnlyLetters(nombre)) {
        showError('nombre', 'El campo Nombre solo puede contener letras.');
        isValid = false;
    }
    if (!apellido) {
        showError('apellido', 'El campo Apellido es obligatorio.');
        isValid = false;
    } else if (!validateOnlyLetters(apellido)) {
        showError('apellido', 'El campo Apellido solo puede contener letras.');
        isValid = false;
    }
    if (!email) {
        showError('email', 'El campo Email es obligatorio.');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('email', 'El formato del Email no es válido.');
        isValid = false;
    }
    if (!fechaNacimiento) {
        showError('fecha-nacimiento', 'El campo Fecha de Nacimiento es obligatorio.');
        isValid = false;
    } else if (!validateFechaNacimiento(fechaNacimiento)) {
        showError('fecha-nacimiento', 'La Fecha de Nacimiento no puede ser posterior a la fecha actual.');
        isValid = false;
    }
    if (!paisResidencia) {
        showError('pais-residencia', 'El campo País de Residencia es obligatorio.');
        isValid = false;
    } else if (!validateOnlyLetters(paisResidencia)) {
        showError('pais-residencia', 'El campo País de Residencia solo puede contener letras.');
        isValid = false;
    }

    if (isValid) {
        alert('¡Formulario enviado correctamente!');
    }

    return isValid; // Si es falso, el formulario no se enviará
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.style.marginTop = '5px';
    error.textContent = message;
    field.parentNode.appendChild(error);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateFechaNacimiento(fecha) {
    const fechaNacimiento = new Date(fecha);
    const fechaActual = new Date();
    return fechaNacimiento <= fechaActual; // Retorna verdadero si la fecha de nacimiento no es posterior a la actual
}

function validateOnlyLetters(value) {
    const re = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return re.test(value);
}