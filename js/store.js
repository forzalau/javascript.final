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

storeCheckAuthentication();
sessionClose();
