function enviar() {
    const email = document.getElementById('email');
    const name = document.getElementById('name');
    const msg = document.getElementById('msg');
    const status = document.getElementById('status');

    if (!email.checkValidity() || !name.value.trim() || !msg.value.trim()) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }

    alert("Gracias por contactarnos, " + name.value);

    // Limpiar campos
    msg.value = "";
    name.value = "";
    email.value = "";

    // Mostrar mensaje de confirmación
    status.textContent = "Mensaje enviado correctamente.";
}
