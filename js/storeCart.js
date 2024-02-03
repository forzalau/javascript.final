let cartHTML = `
  <div class="container">
    <h4 class="text-center mt-1">MI CARRITO DE COMPRAS</h4>
    <hr>
    <div id="compraGracias" class="text-center">
      <div class="carrito-bg d-flex flex-column align-items-center text-start my-3 p-2" style="background-color: mediumseagreen; border-radius: 5px;">
        <div id="carrito">
          <div class="text-center my-3">
            <h3 class="mb-2">Username tu carrito esta vacío</h3>
            <h2>¡Empecemos a llenarlo!</h2>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="d-flex justify-content-center">
      <input type="text" id="cuponIngresar" class="p-1" placeholder="¡Tengo un Cupón!">
      <button id="cuponValidar" class="ms-1" style="width: auto; background-color: goldenrod; font-weight: bold;">Aplicar</button>
    </div>
    <h5 id="cuponAlerta" class="text-center my-3"></h5>
    <hr>
    <div class="text-center">
      <button id="finalizarCompra" class="mt-1" style="width: auto;">FINALIZAR COMPRA</button>
      <button id="vaciarCarrito" class="mt-1" style="width: auto; background-color: indianred;"><i class="fa-solid fa-trash"></i></button>
    </div>
  </div>
`;

function cart() {
  let panel = document.getElementById("cartContainer");
  panel.innerHTML = cartHTML;
}

cart();

const carrito = [];
let cuponValido = false;
const descuento = 0.2;

const cuponIngresar = document.getElementById("cuponIngresar");
const cuponBotonValidar = document.getElementById("cuponValidar");
const cuponAlerta = document.getElementById("cuponAlerta");

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

const productos = [
  { id: "0", nombre: "J. Walker Blue Label x1", precio: 309990 },
  { id: "1", nombre: "Cinzano Rosso x6", precio: 27400 },
  { id: "2", nombre: "Sernova Estilo Italiano x12", precio: 81900 },
  { id: "3", nombre: "Chandon Extra Brut x6", precio: 38990 },
  { id: "4", nombre: "Santa Julia Dulce x6", precio: 27880 },
  { id: "5", nombre: "Coca-Cola x8", precio: 27100 },
  { id: "6", nombre: "Fernet Branca x6", precio: 57000 },
  { id: "7", nombre: "Gancia Americano x6", precio: 31990 },
  { id: "8", nombre: "Smirnoff Clásico x6", precio: 28700 },
  { id: "9", nombre: "Baron B Extr Brut x6", precio: 81990 },
  { id: "10", nombre: "Heineken Rubia x6", precio: 11990 },
  { id: "11", nombre: "Sprite x8", precio: 12990 },
  { id: "12", nombre: "Jack Daniels x3", precio: 143600 },
  { id: "13", nombre: "Martini Bianco x6", precio: 27800 },
  { id: "14", nombre: "Smirnoff Raspberry x6", precio: 28990 },
  { id: "15", nombre: "Saenz Briones 1888 x6", precio: 24400 },
  { id: "16", nombre: "Andes Origen Rubia x6", precio: 7700 },
  { id: "17", nombre: "Hielo Rolito 10kg x3", precio: 6600 },
  { id: "18", nombre: "Campari x12", precio: 73990 },
  { id: "19", nombre: "Punt E Mes Vermouth x6", precio: 25990 },
  { id: "20", nombre: "Sol Azteca Dorado x6", precio: 33400 },
  { id: "21", nombre: "El Enemigo Malbec x6", precio: 80800 },
  { id: "22", nombre: "Corona Rubia México x6", precio: 8800 },
  { id: "23", nombre: "Vasos Descartables x25", precio: 1990 },
];

function agregarProductoAlCarrito(index) {
  const productoSeleccionado = productos[index];
  const indexEnCarrito = carrito.findIndex(
    (item) => item.producto.id === productoSeleccionado.id
  );
  if (indexEnCarrito !== -1) carrito[indexEnCarrito].cantidad++;
  else carrito.push({ producto: productoSeleccionado, cantidad: 1 });
  actualizarCarrito();
  const agregarProductoAlerta = document.getElementById("alerta");
  agregarProductoAlerta.innerHTML = `<b>${productoSeleccionado.nombre}</b> se agregó al carrito.`;
  agregarProductoAlerta.style.display = "block";
  setTimeout(function () {
    agregarProductoAlerta.style.display = "none";
  }, 3000);
}

function restarCantidadDelProducto(idProducto) {
  const indexEnCarrito = carrito.findIndex(
    (item) => item.producto.id === idProducto
  );
  if (indexEnCarrito !== -1) {
    if (carrito[indexEnCarrito].cantidad > 1)
      carrito[indexEnCarrito].cantidad--;
    else carrito.splice(indexEnCarrito, 1);
    actualizarCarrito();
  }
}

function obtenerDetallesCarrito() {
  return carrito.map((item) => `${item.producto.nombre} x${item.cantidad}`);
}

function obtenerTotal() {
  let total = 0;
  carrito.forEach((item) => (total += item.producto.precio * item.cantidad));
  return total;
}

function obtenerTotalConDescuento() {
  return obtenerTotal() * (1 - descuento);
}

function actualizarCarrito() {
  const verCarrito = document.getElementById("carrito");
  const totalCarrito = document.getElementById("total");
  verCarrito.innerHTML = "";
  const detallesCarrito = obtenerDetallesCarrito();
  if (detallesCarrito.length === 0) {
    verCarrito.innerHTML = "Tu carrito está vacío.";
    totalCarrito.innerHTML = "Total: $ 0";
  } else {
    detallesCarrito.forEach((detalle) => {
      const idProducto = detalle.split(" x")[0];
      const detalleTexto = document.createElement("span");
      detalleTexto.textContent = detalle;
      const botonRestarCantidad = document.createElement("button");
      botonRestarCantidad.innerHTML = "<i class='fa-solid fa-trash'></i>";
      botonRestarCantidad.addEventListener("click", function () {
        restarCantidadDelProducto(idProducto);
      });
      verCarrito.appendChild(detalleTexto);
      verCarrito.appendChild(botonRestarCantidad);
      verCarrito.appendChild(document.createElement("br"));
    });
    totalCarrito.innerHTML = `Total: $ ${
      cuponValido ? obtenerTotalConDescuento() : obtenerTotal()
    }`;
  }
}

productos.forEach(function (producto, index) {
  const productoElement = document.getElementById(producto.id);
  if (productoElement) {
    productoElement.addEventListener("click", function () {
      agregarProductoAlCarrito(index);
    });
  }
});

const finalizarCompraBoton = document.getElementById("finalizarCompra");
finalizarCompraBoton.addEventListener("click", function () {
  const finalizarCompraGracias = document.getElementById("compraGracias");
  if (carrito.length === 0) {
    finalizarCompraGracias.innerHTML =
      "<h4>Lo sentimos.</h4><br><h6>No se puede finalizar la compra con el carrito vacío.</h6>";
  } else {
    finalizarCompraGracias.innerHTML =
      "<h4>¡Gracias por tu compra!</h4><br><h6>Te enviaremos los detalles de la compra a tu correo electrónico.</h6>";
  }
  finalizarCompraGracias.style.display = "block";
  finalizarCompraBoton.style.display = "none";

  setTimeout(function () {
    location.reload();
  }, 5000);
});
