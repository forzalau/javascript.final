let cartHTML = `
      <h2 class="text-center pt-3"><b>UserName</b> tu carrito esta vacío.</h2>
      <h2 class="text-center pb-3">¡Empecemos a llenarlo!</h2>      
`;

function cart() {
  let panel = document.getElementById("cartContainer");
  panel.innerHTML = cartHTML;
}

cart();
