
//llama al objeto de los artículos
const URLJSON = "json/articulos.json"

//carga las tarjetas en index con los elementos del JSON
$.getJSON(URLJSON, function (req, state){
    if(state==="success"){
        let articulos = req;
        for (const articulo of articulos){
            if(articulo.categoria === "patin"){
                $("#patines").append(`
                    <div class="col-lg-3 col-md-6 col-sm-12 mb-5">
            <div class="card shadow" style="width: 15rem">
              <img src="${articulo.imagen}" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text nombre">${articulo.titulo}</p>
                <h5 class="card-title precio fw-bolder card-text nombre">
                  $ <span>${articulo.precio}</span>
                </h5>
                <a href="#" class="btn btn-danger agregar-carrito" data-id="${articulo.id}"
                  >Agregar al carrito</a
                >
              </div>
            </div>
          </div>
          `)
            }
        
        else if(articulo.categoria === "palo"){
                $("#palos").append(`
                <div class="col-lg-3 col-md-6 col-sm-12 mb-5">
        <div class="card shadow" style="width: 15rem">
          <img src="${articulo.imagen}" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text nombre">${articulo.titulo}</p>
            <h5 class="card-title precio fw-bolder card-text nombre">
              $ <span>${articulo.precio}</span>
            </h5>
            <a href="#" class="btn btn-danger agregar-carrito" data-id="${articulo.id}"
              >Agregar al carrito</a
            >
          </div>
        </div>
      </div>
      `)
        }

        else if(articulo.categoria === "guante"){
            $("#guantes").append(`
            <div class="col-lg-3 col-md-6 col-sm-12 mb-5">
    <div class="card shadow" style="width: 15rem">
      <img src="${articulo.imagen}" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text nombre">${articulo.titulo}</p>
        <h5 class="card-title precio fw-bolder card-text nombre">
          $ <span>${articulo.precio}</span>
        </h5>
        <a href="#" class="btn btn-danger agregar-carrito" data-id="${articulo.id}"
          >Agregar al carrito</a
        >
      </div>
    </div>
  </div>
  `)
    }
       }
    }
})