

//definición de funciones y selección de elementos del html
const carro = new Carrito();
const listaProductos = document.querySelector('#lista-carrito tbody');


//carga los eventos del proyecto
cargarEventos();

function cargarEventos() {
    $(document).ready(function(){}) 
    $('#lista-productos').on('click', (e) => {carro.comprarProducto(e)}); 
    $('#carrito').on('click', (e) =>{carro.eliminarProducto(e)}); 
    $('#vaciar-carrito').on('click', (e) =>{carro.vaciarCarrito(e)}); 
    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());
    $('#procesar-pedido').on('click', (e)=>{carro.procesarPedido(e)});
    
}



