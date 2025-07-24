document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const user = document.getElementById("loginUser").value;
      const pass = document.getElementById("loginPass").value;

      try {
        const response = await fetch("user.json");
        const users = await response.json();

        const found = users.find((u) => u.user === user && u.pass === pass);

        if (found) {
          localStorage.setItem("loggedInUser", JSON.stringify(found));
          window.location.href = "index.html";
        } else {
          let error = document.getElementById("incorrecto");
          error.style.paddingTop = "10px";
          error.style.paddingBottom = "10px";
          error.textContent = "Usuario o contraseña incorrecta.";
        }
      } catch (err) {
        console.error("Error al leer usuarios.json", err);
      }
    });
  }
});
