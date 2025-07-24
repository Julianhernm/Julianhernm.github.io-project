document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const user = document.getElementById("loginUser").value;
      const pass = document.getElementById("loginPass").value;

      const users = JSON.parse(localStorage.getItem("users")) || [];

      const found = users.find((u) => u.user === user && u.pass === pass);

      if (found) {
        localStorage.setItem("loggedInUser", user);
        window.location.href = "index.html";
      } else {
        let Error = document.getElementById("incorrecto");
        Error.style.paddingTop = "10px";
        Error.style.paddingBottom = "10px";
        Error.textContent = "Usuario o contraseña incorrecta."
      }
    });
  }
});
