import { loginFormHTML, signupFormHTML } from "./loginForm.js";

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
        confirmButtonText: "Ok",
        confirmButtonColor: "goldenrod",
        heightAuto: false,
      });
    }
  });

  document
    .getElementById("forgotPassword")
    .addEventListener("click", async function () {
      const { value: email } = await Swal.fire({
        showCancelButton: true,
        title: "Olvidé mi contraseña",
        input: "email",
        inputPlaceholder: "Ingresa tu correo electrónico",
        confirmButtonText: "Enviar",
        confirmButtonColor: "goldenrod",
        cancelButtonText: "Cancelar",
        cancelButtonColor: "indianred",
      });

      if (email) {
        Swal.fire(
          "Correo enviado, sigue los pasos para recuperar la contraseña."
        );
      }
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
          '<div class="text-center" style="padding: 4.45%;"><h1 style="color: goldenrod; font-weight: bold">¡Cuenta creada con éxito!</h1><br><h6>Enviaremos los detalles a tu correo.</h6></div>';
      }, 1500);
    } else {
      Swal.fire({
        title: "Error",
        text: "Las contraseñas no coinciden.",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "goldenrod",
        heightAuto: false,
      });
    }
  });
}

login();
signup();
