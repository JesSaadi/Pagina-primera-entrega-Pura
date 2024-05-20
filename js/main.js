
<script>
document.getElementById("registroForm").addEventListener("submit", function(event) {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;
    let nombreError = document.getElementById("nombreError");
    let emailError = document.getElementById("emailError");
    let mensajeError = document.getElementById("mensajeError");
    let isValid = true;

    nombreError.textContent = "";
    emailError.textContent = "";
    mensajeError.textContent = "";

    if (nombre === "") {
        nombreError.textContent = "Por favor, ingresa tu nombre.";
        isValid = false;
    }

    if (email === "") {
        emailError.textContent = "Por favor, ingresa tu correo electrónico.";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Por favor, ingresa un correo electrónico válido.";
        isValid = false;
    }

    if (mensaje === "") {
        mensajeError.textContent = "Por favor, ingresa tu mensaje.";
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
</script>