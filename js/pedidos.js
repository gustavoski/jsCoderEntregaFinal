

//definición de funciones y selección de elementos del html
const carro = new Carrito();
//const carrito = $('#carrito'); /Practica Jquery Desafio clase 12 - reemplazdo abajo---------------
//const productos = $('#lista-productos'); //Practica Jquery Desafio clase 12 - reemplazdo abajo---------------
const listaProductos = document.querySelector('#lista-carrito tbody');
//const vaciarCarritoBtn = $('#vaciar-carrito'); //Practica Jquery Desafio clase 12 - reemplazdo abajo---------------
//const procesarPedidoBtn = $('#procesar-pedido'); //Practica Jquery Desafio clase 12 - reemplazdo abajo----------------

//carga los eventos del proyecto
cargarEventos();

function cargarEventos() {
    $(document).ready(function(){}) //Practica Jquery Desafio clase 12----------------
    $('#lista-productos').on('click', (e) => {carro.comprarProducto(e)}); //Practica Jquery Desafio clase 12----------------
    $('#carrito').on('click', (e) =>{carro.eliminarProducto(e)}); //Practica Jquery Desafio clase 12----------------
    $('#vaciar-carrito').on('click', (e) =>{carro.vaciarCarrito(e)}); //Practica Jquery Desafio clase 12----------------
    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());
    $('#procesar-pedido').on('click', (e)=>{carro.procesarPedido(e)}); //Practica Jquery Desafio clase 12----------------
    
}



