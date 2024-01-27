import { loginFormHTML, signupFormHTML } from "./form.js";

function checkAuthentication() {
  let storedUserData = JSON.parse(localStorage.getItem("userData"));
  if (storedUserData && storedUserData.username && storedUserData.password) {
    window.location.href = "page/store.html";
  }
}

function login() {
  checkAuthentication();

  let panel = document.getElementById("loginFormContainer");
  panel.innerHTML = loginFormHTML;

  let loginForm = document.querySelector("#loginForm");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let userName = document.querySelector("#userName").value.toLowerCase();
    let password = document.querySelector("#password").value;
    let storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (
      storedUserData &&
      userName === storedUserData.username.toLowerCase() &&
      password === storedUserData.password
    ) {
      window.location.href = "page/store.html";
    } else {
      Swal.fire({
        title: "Error en el inicio de sesión",
        text: "Los datos son incorrectos.",
        icon: "error",
        heightAuto: false,
      });
    }
  });

  document
    .getElementById("forgotPassword")
    .addEventListener("click", function () {
      Swal.fire({
        title: "Lo sentimos",
        text: "Esta función no se encuentra disponible.",
        icon: "error",
        heightAuto: false,
      });
    });
}

function signup() {
  checkAuthentication();

  let panel = document.getElementById("signupFormContainer");
  panel.innerHTML = signupFormHTML;

  let signupForm = document.querySelector("#signupForm");

  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newUserName = document.querySelector("#newUserName").value;
    let email = document.querySelector("#email").value;
    let newPassword = document.querySelector("#newPassword").value;
    let confirmPassword = document.querySelector("#confirmPassword").value;

    if (newPassword === confirmPassword) {
      let userData = {
        username: newUserName,
        email: email,
        password: newPassword,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      panel.innerHTML =
        '<div class="text-center"><h1><i class="fa-solid fa-circle-notch fa-spin" style="color: goldenrod;"></i></h1></div>';
      setTimeout(() => {
        panel.innerHTML =
          '<div class="text-center"><h1 class="py-3" style="color: seagreen;">¡Cuenta creada con éxito!</h1><br><h3 class="py-2">Te enviaremos los detalles del registro a tu correo.</h3></div>';
      }, 3000);
    } else {
      Swal.fire({
        title: "Error",
        text: "Las contraseñas no coinciden.",
        icon: "error",
        heightAuto: false,
      });
    }
  });
}

login();
signup();
