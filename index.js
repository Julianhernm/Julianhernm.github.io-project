document.addEventListener("DOMContentLoaded", () => {
  // Verificar si hay un usuario logueado
  const usuario = localStorage.getItem("loggedInUser");
  if (!usuario) {
    window.location.href = "login.html";
  } else {
    document.getElementById("saludoUsuario").textContent = `Bienvenido, ${usuario}`;
  }
});

// Función para cambiar contenido según botón
function cambiarVista(vista) {
  const contenido = document.getElementById("vista");

  switch (vista) {
    case "alumnos":
        document.getElementById("saludoUsuario").textContent =  "Alumnos"
      contenido.innerHTML = "<h3>Listado de alumnos</h3><p>Acá aparecerán los alumnos.</p>";
      break;
    case "inscribir":
        document.getElementById("saludoUsuario").textContent =  "Inscribir"
      contenido.innerHTML = "<h3>Formulario de inscripción</h3><p>Acá irá el formulario.</p>";
      break;
    case "remover":
        document.getElementById("saludoUsuario").textContent =  "Remover";
      contenido.innerHTML = "<h3>Remover alumno</h3><p>Selecciona un alumno a remover.</p>";
      break;
    case "calificaciones":
        document.getElementById("saludoUsuario").textContent =  "Calificaciones";
      contenido.innerHTML = "<h3>Calificaciones</h3><p>Listado de notas por alumno.</p>";
      break;
    case "maestros":
        document.getElementById("saludoUsuario").textContent =  "Maestros";
      contenido.innerHTML = "<h3>Maestros</h3><p>Información de maestros y asignaturas.</p>";
      break;
    case "pagos":
        document.getElementById("saludoUsuario").textContent =  "Pagos";
      contenido.innerHTML = "<h3>Pagos</h3><p>Registro de colegiaturas pagadas.</p>";
      break;
  }
}

const btnCerrarSesion = document.getElementById("btnCerrarSesion");
const cancelar = document.getElementById("cancelarCerrar");
const confirmar = document.getElementById("confirmarCerrar");
const modal = document.getElementById("modalCerrarSesion");

btnCerrarSesion.addEventListener("click", ()=>{
    modal.style.display = "flex";
});

cancelar.addEventListener("click", () =>{
    modal.style.display = "none";
});

confirmar.addEventListener("click", () =>{
    modal.style.display = "none";
    localStorage.removeItem("loggedInUser");
    setTimeout(() =>{
        window.location.href = "login.html";
    },100);
})