function enviar() {
    const email = document.getElementById('email');
    const name = document.getElementById('name');
    const msg = document.getElementById('msg');
    const status = document.getElementById('status');

    // Limpiar mensajes previos
    status.textContent = "";

    // Validaciones
    if (!email.checkValidity()) {
        status.textContent = "Por favor, introduce un correo válido.";
        return;
    }
    
    if (!name.value.trim()) {
        status.textContent = "El campo de nombre no puede estar vacío.";
        return;
    }
    
    if (msg.value.trim().length < 10) {
        status.textContent = "El mensaje debe tener al menos 10 caracteres.";
        return;
    }

    // Confirmación
    status.textContent = `Gracias por contactarnos, ${name.value}. Tu mensaje ha sido enviado correctamente.`;

    // Limpiar campos después de la confirmación
    msg.value = "";
    name.value = "";
    email.value = "";
}