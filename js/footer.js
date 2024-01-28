let footerHTML = `
  <div class="container">
    <div class="d-flex justify-content-between footer-mobile align-items-center">
      <div class="d-flex">
        <a href="#empty">
          <p class="me-3">Ayuda</p>
        </a>
        <a href="#empty">
          <p class="me-3">Contacto</p>
        </a>
        <a href="#empty">
          <p>Legales</p>
        </a>
      </div>
      <div class="d-flex font-end">
        <p class="me-1" style="color: goldenrod">DrinkStore</p>
        <p>&copy; 2024</p>
      </div>
    </div>
  </div>        
`;

function footer() {
  let panel = document.getElementById("footerContainer");
  panel.innerHTML = footerHTML;
}

footer();
