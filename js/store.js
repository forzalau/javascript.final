function storeCheckAuthentication() {
  let storedUserData = JSON.parse(localStorage.getItem("userData"));
  if (!(storedUserData && storedUserData.username && storedUserData.password)) {
    window.location.href = "../index.html";
  }
}

function sessionClose() {
  function logout() {
    localStorage.removeItem("userData");
    window.location.href = "../index.html";
  }
  document.getElementById("logOut").addEventListener("click", logout);
}

let storeHeaderHTML = `
  <div class="container d-flex justify-content-between align-items-center">
    <div class="float-start d-flex align-items-center">
      <h1>DrinkStore</h1>
      <img src="../assets/favicon.png" style="height: 45px" />
    </div>
    <div class="float-end d-flex align-items-center">
      <button id="notificationButton" class="btn-menu me-1">
        <i class="fa-solid fa-bell fa-shake"></i>
      </button>
      <button id="cartButton" class="btn-menu me-1">
        <i class="fa-solid fa-cart-shopping"></i>
      </button>
      <button id="logOut" class="btn-menu me-1">
        <i class="fa-solid fa-user"></i>
        <i>username</i>
      </button>
    </div>
  </div>     
`;

function storeHeader() {
  let panel = document.getElementById("storeHeaderContainer");
  panel.innerHTML = storeHeaderHTML;
}

storeHeader();
storeCheckAuthentication();
sessionClose();

const cartButton = document.getElementById("cartButton");
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

const notificationButton = document.getElementById("notificationButton");
const notificationShow = document.getElementById("notificationShow");

notificationButton.addEventListener("click", () => {
  notificationShow.style.display =
    notificationShow.style.display === "none" ||
    notificationShow.style.display === ""
      ? "block"
      : "none";

  if (notificationButton.style.backgroundColor === "goldenrod") {
    notificationButton.style.backgroundColor = "";
  } else {
    notificationButton.style.backgroundColor = "goldenrod";
  }
});
