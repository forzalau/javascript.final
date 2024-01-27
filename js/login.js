import { loginFormHTML, signupFormHTML } from "./form.js";

function login() {
  let panel = document.getElementById("loginFormContainer");
  panel.innerHTML = loginFormHTML;

  let loginForm = document.querySelector("#loginForm");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let userName = document.querySelector("#userName").value;
    let password = document.querySelector("#password").value;
    let storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (
      storedUserData &&
      userName === storedUserData.username &&
      password === storedUserData.password
    ) {
      window.location.href = "page/store.html";
    } else {
      Swal.fire({
        title: "Error de inicio de sesión",
        text: "El usuario o la contraseña son incorrectas.",
        icon: "error",
        heightAuto: false,
      });
    }
  });
}

function signup() {
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

      Swal.fire({
        title: "",
        text: "Cuenta creada con éxito. ¡Ya podés iniciar sesión!",
        icon: "success",
        heightAuto: false,
      });
      panel.innerHTML =
        '<div class="text-center mb-1"><h4 style="color: seagreen;">¡Cuenta creada con éxito!</h4><br><h3>Enviamos los datos de registro a tu correo.</h3><br><h2 style="color: seagreen;">Ya podés iniciar sesión</h2></div>';
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
