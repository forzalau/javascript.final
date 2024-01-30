function storeCheckAuthentication() {
  let storedUserData = JSON.parse(localStorage.getItem("userData"));
  if (!(storedUserData && storedUserData.username && storedUserData.password)) {
    window.location.href = "../index.html";
  }
}

let storeHeaderHTML = `
  <div class="container d-flex justify-content-between align-items-center">
    <div class="float-start d-flex align-items-center">
      <h1>DrinkStore</h1>
      <img src="../assets/favicon.png" style="height: 45px" />
    </div>
    <div class="float-end d-flex align-items-center">
      <div class="menu-nav">
        <button id="notificationButton" class="btn-menu me-1">
          <i class="fa-solid fa-bell fa-shake"></i>
        </button>
        <button id="cartButton" class="btn-menu me-1">
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
        <button id="logOut" class="btn-menu me-1" style="padding: 5px 10px">
          <i class="fa-solid fa-user me-1"></i>
          <i>username</i>
        </button>
      </div>
      <button id="menuMobile" class="btn-menu">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  </div>  
  
  <div class="menu-mobile-dropdown" id="menuDropdown">
  <hr>
    <div class="text-center">
      <p id="notificationButtonMobile" class="menu-mobile-button">Notificaciones</p>
      <p id="cartButtonMobile" class="menu-mobile-button">Ver Carrito</p>
      <p id="logOutMobile" class="menu-mobile-button">UserName</p>
    </div>
  </div>
`;

function storeHeader() {
  let panel = document.getElementById("storeHeaderContainer");
  panel.innerHTML = storeHeaderHTML;
}

function sessionClose() {
  function logout() {
    Swal.fire({
      title: "Cerrar sesión",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "goldenrod",
      cancelButtonColor: "indianred",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("userData");
        window.location.href = "../index.html";
      }
    });
  }

  document.getElementById("logOut").addEventListener("click", logout);
  document.getElementById("logOutMobile").addEventListener("click", logout);
}

storeCheckAuthentication();
storeHeader();
sessionClose();

function setupCartButton(buttonId) {
  const cartButton = document.getElementById(buttonId);
  const cartShow = document.getElementById("cartShow");

  cartButton.addEventListener("click", () => {
    cartShow.style.display =
      cartShow.style.display === "none" || cartShow.style.display === ""
        ? "block"
        : "none";

    if (cartButton.style.backgroundColor === "seagreen") {
      cartButton.style.backgroundColor = "";
    } else {
      cartButton.style.backgroundColor = "seagreen";
    }
  });
}

setupCartButton("cartButton");
setupCartButton("cartButtonMobile");

function setupDynamicButton(buttonId) {
  const button = document.getElementById(buttonId);

  button.addEventListener("click", () => {
    Swal.fire({
      text: 'Tenés un 20% de descuento en tu primera compra utilizando el código "20DESCUENTO"',
      confirmButtonText: "¡Gracias!",
      confirmButtonColor: "goldenrod",
    });
  });
}

setupDynamicButton("notificationButton");
setupDynamicButton("notificationButtonMobile");

const menuButton = document.getElementById("menuMobile");
const dropdownMenu = document.getElementById("menuDropdown");

menuButton.addEventListener("click", function () {
  dropdownMenu.classList.toggle("show");
});
