const compra = new Carrito();


cargarEventos();

function cargarEventos() {
  document.addEventListener(
    "DOMContentLoaded",
    compra.leerLocalStoragePedido()
  );
  $('#carrito').on('click', (e) =>{compra.eliminarProducto(e)}); 
    compra.calcularTotal();

}
