import productos from "./storeProducts.js";

let cartHTML = `
  <h4 class="text-center my-3">MI CARRITO DE COMPRAS </h4>
  <hr>
  <div id="compraGracias" class="text-center">
    <div class="carrito-bg d-flex flex-column align-items-center text-start">
      <div id="carrito" class="w-75 text-center p-3" style="background-color: mediumseagreen; border-radius: 5px;">Tu carrito está vacío.</div><br>
      <h5 id="total" class="w-auto text-center p-3" style="background-color: mediumseagreen; border-radius: 5px;">Total: $ 0</h5>
      </div>
      <hr>
      <div id="ahorroContainer" style="display: none; margin-top: 15px;">
        <h4>¡Con este cupón estás ahorrando <b><span id="descuentoPorcentaje"></span></b>!</h4>
      </div>
      <div class="d-flex justify-content-center mt-3">
          <input type="text" id="cuponIngresar" class="form-control w-auto p-1" placeholder="¡Tengo un Cupón!">
          <button id="cuponValidar" class="button w-auto ms-1" style="background-color: goldenrod; font-weight: bold;">Aplicar</button>
      </div>
      <h5 id="cuponAlerta" class="text-center my-3"></h5>
      <hr>
      <div class="text-center">
        <button id="finalizarCompra" class="w-auto mt-1">FINALIZAR COMPRA</button>
        <button id="vaciarCarrito" class="w-auto mt-1" style="background-color: indianred"><i class="fa-solid fa-trash"></i></button>
      </div>
  </div>
    
`;

function cart() {
  let panel = document.getElementById("storeCartContainer");
  panel.innerHTML = cartHTML;
}

cart();

document.addEventListener("DOMContentLoaded", function () {
  const carrito = [];
  let cuponValido = false;
  const descuento = 0.2;
  const cuponIngresar = document.getElementById("cuponIngresar");
  const cuponBotonValidar = document.getElementById("cuponValidar");
  const cuponAlerta = document.getElementById("cuponAlerta");
  const verCarrito = document.getElementById("carrito");
  const totalCarrito = document.getElementById("total");
  const productosContainer = document.getElementById("productosContainer");
  const finalizarCompraBoton = document.getElementById("finalizarCompra");
  const compraGracias = document.getElementById("compraGracias");

  productos.forEach((producto, index) => {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("col-xl-3", "card-container");

    cardContainer.innerHTML = `
      <div class="card-img">
        <img src="${producto.imagen}" />
      </div>
      <div class="card-text">
        <h5>${producto.nombre}</h5>
        <small>x${producto.cantidad} unidades</small>
        <h3 class="pt-3">$ ${producto.precio}</h3>
      </div>
    `;

    cardContainer.addEventListener("click", () => {
      agregarProductoAlCarrito(index);
    });

    productosContainer.appendChild(cardContainer);
  });

  cuponBotonValidar.addEventListener("click", function () {
    const cuponAplicado = cuponIngresar.value.toLowerCase();
    cuponValido = cuponAplicado === "20descuento";
    actualizarCarrito();
    cuponAlerta.textContent = cuponValido
      ? "¡Cupón 20% de descuento aplicado correctamente!"
      : "Cupón inválido, revisa que esté bien escrito.";
    setTimeout(function () {
      cuponAlerta.textContent = "";
    }, 3000);
  });

  function agregarProductoAlCarrito(index) {
    const productoSeleccionado = productos[index];
    const indexEnCarrito = carrito.findIndex(
      (item) => item.producto.id === productoSeleccionado.id
    );
    if (indexEnCarrito !== -1) {
      carrito[indexEnCarrito].cantidad++;
    } else {
      carrito.push({ producto: productoSeleccionado, cantidad: 1 });
    }
    actualizarCarrito();
    const agregarProductoAlerta = document.getElementById("alerta");
    agregarProductoAlerta.innerHTML = `<b>${productoSeleccionado.nombre}</b> se agregó al carrito.`;
    agregarProductoAlerta.style.display = "block";
    setTimeout(function () {
      agregarProductoAlerta.style.display = "none";
    }, 3000);
  }

  function obtenerDetallesCarrito() {
    return carrito.map(
      (item) => `${item.producto.nombre} uds. - (x${item.cantidad})`
    );
  }

  function obtenerTotal() {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
      total += carrito[i].producto.precio * carrito[i].cantidad;
    }
    return total;
  }

  function obtenerTotalConDescuento() {
    return obtenerTotal() * (1 - descuento);
  }

  function actualizarCarrito() {
    verCarrito.innerHTML = "";
    const detallesCarrito = obtenerDetallesCarrito();
    if (detallesCarrito.length === 0) {
      verCarrito.innerHTML = "Tu carrito está vacío.";
      totalCarrito.textContent = "Total: $ 0";
    } else {
      detallesCarrito.forEach(function (detalle, index) {
        const idProducto = detalle.split(" x")[0];
        const detalleTexto = document.createElement("div");
        detalleTexto.classList.add("producto");
        const divRestar = document.createElement("div");
        divRestar.innerHTML = '<i class="fa-solid fa-minus fa-xs"></i>';
        divRestar.classList.add("btn-carrito");
        divRestar.addEventListener("click", function () {
          restarUnidadProducto(index);
        });

        const divSumar = document.createElement("div");
        divSumar.innerHTML = '<i class="fa-solid fa-plus fa-xs"></i>';
        divSumar.classList.add("btn-carrito");
        divSumar.addEventListener("click", function () {
          sumarUnidadProducto(index);
        });

        detalleTexto.appendChild(document.createTextNode(detalle));
        detalleTexto.appendChild(divRestar);
        detalleTexto.appendChild(divSumar);

        verCarrito.appendChild(detalleTexto);
      });
      totalCarrito.textContent = `Total: $ ${
        cuponValido ? obtenerTotalConDescuento() : obtenerTotal()
      }`;
    }

    const ahorroContainer = document.getElementById("ahorroContainer");
    const descuentoPorcentajeElemento = document.getElementById(
      "descuentoPorcentaje"
    );

    if (cuponValido) {
      const totalCarritoSinDescuento = obtenerTotal();
      const totalConDescuento = obtenerTotalConDescuento();
      const montoAhorro = totalCarritoSinDescuento - totalConDescuento;

      ahorroContainer.style.display = "block";

      descuentoPorcentajeElemento.textContent = `$ ${montoAhorro}`;
    } else {
      ahorroContainer.style.display = "none";
    }
  }

  function sumarUnidadProducto(index) {
    carrito[index].cantidad++;
    actualizarCarrito();
  }

  function restarUnidadProducto(index) {
    if (carrito[index].cantidad > 1) {
      carrito[index].cantidad--;
    } else {
      carrito.splice(index, 1);
    }
    actualizarCarrito();
  }

  function vaciarCarrito() {
    carrito.length = 0;
    actualizarCarrito();
  }

  const botonVaciarCarrito = document.getElementById("vaciarCarrito");
  if (botonVaciarCarrito) {
    botonVaciarCarrito.addEventListener("click", vaciarCarrito);
  }

  finalizarCompraBoton.addEventListener("click", function () {
    if (carrito.length === 0) {
      compraGracias.innerHTML = `<div style="padding: 50px 0 50px 0";><h4>Lo sentimos, no se puede finalizar la compra con el carrito vacío.</h4></div>`;
    } else {
      compraGracias.innerHTML = `<div style="padding: 50px 0 50px 0";><h4>¡Gracias por tu compra!</h4><br><h5>Enviaremos los detalles a tu correo.</h5></div>`;
    }
    finalizarCompraBoton.style.display = "none";
    setTimeout(function () {
      location.reload();
    }, 5000);
  });
});
