function iniciarSesion(event) {
  event.preventDefault(); // Evita que se recargue la página

  // Tomar los valores del formulario
  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;

  // Validación sencilla (puedes cambiar estos datos)
  if (usuario === "admin" && password === "1234") {
    alert("Inicio de sesión exitoso ");
    window.location.href = "menu.html"; // Redirige al menú
  } else {
    alert("Usuario o contraseña incorrectos ");
  }
}
