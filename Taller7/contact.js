// JS
function enviar() {
        const email = document.getElementById('email');
        const name = document.getElementById('name');
        const msg = document.getElementById('msg');
    
        if (!email.checkValidity() || !name.value.trim() || !msg.value.trim()) {
            alert("Por favor, completa todos los campos correctamente.");
            return;
        }
    
        alert("Gracias por contactarnos, " + name.value);
        msg.textContent = "Mensaje enviado correctamente.";
    }
    