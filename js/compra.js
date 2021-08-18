//definición de funciones
const compra = new Carrito();

//carga los eventos del proyecto
cargarEventos();

function cargarEventos() {
  document.addEventListener(
    "DOMContentLoaded",
    compra.leerLocalStoragePedido()
  );
  $("#carrito").on("click", (e) => {
    compra.eliminarProducto(e);
  });
  compra.calcularTotal();

  $("#procesar-pedido").on("click", procesarPedido);
}

//boton de procesar pedido - verifica si el usuario ingreso todos los datos
function procesarPedido(e) {
  e.preventDefault();

  if (compra.obtenerProductosLocalStorage().length === 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El carrito está vacio, no se puede procesar el pedido",
      timer: 2000,
      showConfirmButton: false,
    }).then(function () {
      window.location = "index.html";
    });
  } else if ($("#cliente").val() === "" || $("#correo").val() === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes completar todos tus datos antes de realizar un pedido",
      timer: 2500,
      showConfirmButton: false,
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Pedido realizado!!",
      text: "Muchas gracias =)",
      timer: 2500,
      showConfirmButton: false,
    });

    setTimeout(() => {
      compra.vaciarLocalStorage();
      window.location = "index.html";
    }, 2600);
  }
}
