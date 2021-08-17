class Carrito {
  //añadir el producto al carrito
  comprarProducto(e) {
    e.preventDefault();

    if (e.target.classList.contains("agregar-carrito")) {
      const producto = e.target.parentElement.parentElement;
      this.leerDatosProducto(producto);
    }
  }

  //leer los datos de los productos en los cards
  leerDatosProducto(producto) {
    const infoProducto = {
      imagen: producto.querySelector("img").src,
      titulo: producto.querySelector("p").textContent,
      precio: producto.querySelector("h5 span").textContent,
      id: producto.querySelector("a").getAttribute("data-id"),
      cantidad: 1,
    };
    //condicional para informar al usuario que ese producto ya se encuentra en el carrito antes de agregarlo
    let productosLS;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function (productoLS) {
      if (productoLS.id === infoProducto.id) {
        productosLS = productoLS.id;
      }
    });
    if (productosLS === infoProducto.id) {
      Swal.fire({
        icon: "info",
        title: "Oops...",
        text: "El producto ya está agregado",
        timer: 1000,
        showConfirmButton: false,
      });
    } else {
      this.insertarCarrito(infoProducto);
      setTimeout(this.mostrarTooltip, 100);
      setTimeout(this.esconderTooltip, 1500);
    }
  }

  //insertar los productos al carrito y en el local storage
  insertarCarrito(producto) {
    let row = `<tr>
    <td> <img src="${producto.imagen}" width=75> </td>
    <td> ${producto.titulo} </td>
    <td class="fs-6"> ${producto.precio}</td>          
    <td>
    <a href="#" class="borrar-producto bi bi-cart-x text-danger" data-id="${producto.id}"></a>
    </td>
    </tr>`;

    $("#listado-pedidos").append(row);

    this.guardarProductosLogalStorage(producto);
  }

  //eliminar los productos en forma individual del carrito y del local storage
  eliminarProducto(e) {
    e.preventDefault();
    let producto, productoID;

    if (e.target.classList.contains("borrar-producto")) {
      e.target.parentElement.parentElement.remove();
      producto = e.target.parentElement.parentElement;
      productoID = producto.querySelector("a").getAttribute("data-id");
    }
    this.eliminarProductoLocalStorage(productoID);
  }

  //vaciar carrito por completo y el local storage
  vaciarCarrito(e) {
    e.preventDefault();
    while (listaProductos.firstChild) {
      listaProductos.removeChild(listaProductos.firstChild);
    }
    this.vaciarLocalStorage();
    return false;
  }

  //guarda los productos en el localstorage
  guardarProductosLogalStorage(producto) {
    let productos;
    productos = this.obtenerProductosLocalStorage();
    productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productos));
  }

  //obtiene los productos del localstorage
  obtenerProductosLocalStorage() {
    let productoLS;

    if (localStorage.getItem("productos") == null) {
      productoLS = [];
    } else {
      productoLS = JSON.parse(localStorage.getItem("productos"));
    }
    return productoLS;
  }

  //elimina los productos del localstorage
  eliminarProductoLocalStorage(productoID) {
    let productosLS;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function (productoLS, index) {
      if (productoLS.id === productoID) {
        productosLS.splice(index, 1);
      }
    });
    localStorage.setItem("productos", JSON.stringify(productosLS));
  }

  //vuelve a cargar los datos en el carrito guardados en el local storage al recargar la página
  leerLocalStorage() {
    let productosLS;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function (producto) {
      let row = `<tr>
    <td> <img src="${producto.imagen}" width=75> </td>
    <td> ${producto.titulo} </td>
    <td class="fs-6"> ${producto.precio}</td>          
    <td>
    <a href="#" class="borrar-producto bi bi-cart-x text-danger" data-id="${producto.id}"></a>
    </td>
    </tr>`;

      $("#listado-pedidos").append(row);
    });
  }

  //cargar productos en pedidos.html desde el local storage
  leerLocalStoragePedido() {
    let productosLS;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function (producto) {
      const row = document.createElement("tr");

      row.innerHTML = `
    <td> <img src="${producto.imagen}" width=75> </td>
      <td> ${producto.titulo} </td>
      <td class="fs-6">$ <span>${producto.precio}</span></td>          
      <td>
     <a href="#" class="borrar-producto bi bi-cart-x text-danger ico-grande" data-id="${producto.id}"></a>
      </td>
    
    `;
      listaCompra.appendChild(row);
    });
  }

  //vaciar carrito en el localStorage
  vaciarLocalStorage() {
    localStorage.clear();
  }

  //avisa al usuario si apreta el boton para procesar pedidos y el carrito esta vacío
  procesarPedido(e) {
    e.preventDefault();

    if (this.obtenerProductosLocalStorage().length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El carrito está vacio, agrega algún producto",
        timer: 2000,
        showConfirmButton: false,
      });
    } else {
      location.href = "pedido.html";
    }
  }

  //confirmar los productos cargados
  mostrarTooltip() {
    $("#confirmacion").slideDown("slow");
  }
  esconderTooltip() {
    $("#confirmacion").slideUp("slow");
  }
}
