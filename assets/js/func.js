function cargarProductoEnTienda(productosFiltrados){

    containerCards.innerHTML = ""

    productosFiltrados.forEach( producto => {

        let card = document.createElement("div")
        card.classList.add("card","col-sm-6","col-md-4","col-lg-3")
    
        card.innerHTML= 
        
            `<img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">$${producto.precio} usd</p>
                <button id="producto${producto.idProducto}" type="button" class="btn btn-primary buttonAgregar" onClick="agregarAlCarrito(${producto.idProducto})">Agregar al carrito</button>
            </div>`
        ;
        
        containerCards.appendChild(card)

    })
}

function agregarAlCarrito(idProducto){

    itemCarrito = new ItemProducto()

    let productoAgregado = arrayProductosTienda.find(( producto => producto.idProducto === idProducto ))
    
    itemCarrito.agregarProducto(productoAgregado)
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(arrayCarrito))
    
    generarProductoEnCarrito()
}

function eliminarDelCarrito(idItemProducto){
    

    itemCarrito = new ItemProducto()

    let productoEliminado = arrayCarrito.find( itemProducto =>{

        if(itemProducto.idItemProducto === idItemProducto){


            return itemProducto.producto
        } 
    })


    itemCarrito.eliminarProducto(productoEliminado)

    localStorage.setItem("productos-en-carrito", JSON.stringify(arrayCarrito))
    
    generarProductoEnCarrito()

}

function generarProductoEnCarrito(){

    actualizarCarrito()
    
    carritoProductos.innerHTML = ""
    
    // dibujo el producto

    arrayCarrito.forEach(itemProducto =>{

        
        let div = document.createElement("div")
        div.classList.add( "d-flex", "justify-content-between", "align-items-center")
    
        div.innerHTML= 

        `
            <img class="w-25" src="${itemProducto.producto.img}" alt="${itemProducto.producto.nombre}">
            <div class="carritoProducto-nombre">
                <small>Titulo</small>
                <h3>${itemProducto.producto.nombre}</h3>
            </div>
            <div class="carritoProducto-cantidad">
                <small>Cantidad</small>
                <p>${itemProducto.cantidad}</p>
            </div>
            <div class="carritoProducto-precio">
                <small>Precio</small>
                <p>$${itemProducto.producto.precio}</p>
            </div>
            <div class="carritoProducto-subTotal">
                <small>Subtotal</small>
                <p>${itemProducto.cantidad*itemProducto.producto.precio}</p>
            </div>
            <button id="producto${itemProducto.producto.idProducto}" class="buttonEliminar btn btn-danger" onClick="eliminarDelCarrito(${itemProducto.idItemProducto})"><i class="bi bi-cart-dash-fill"></i></button>`
        ;
        
        carritoProductos.append(div)

        
    })

    calcularCarrito()

}

function actualizarCarrito(){

    // actualizo arrayCarritoLS
    arrayCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"))

    if(arrayCarritoLS.length !== 0){

        arrayCarrito = arrayCarritoLS
        carritoVacio.classList.add("d-none")
 
    }else{
        carritoVacio.classList.remove("d-none")
    }
}

function calcularCarrito(){

    let total = arrayCarrito.reduce((acumulador,item) => acumulador + (item.cantidad*item.producto.precio),0)
    
    totalCarrito.innerText = `$${total}`
}

function cargarFiltrosEnTienda(){

    
    // filtro por tipo de producto
    categoriaProducto.forEach( categoria => {

        // creacion de icon/button
        let tipoCategoria = document.createElement("div")
        tipoCategoria.classList.add("col-md-6","col-lg-3")
    
        tipoCategoria.innerHTML= 
        
            `   
                <input type="checkbox" class="btn-check buttonCategoria" id="categoria${categoria.id}" autocomplete="off" onClick="filtrar()">
                <label class="btn btn-outline-primary" for="categoria${categoria.id}">
                    <img class="w-25"src="${categoria.img}" alt="${categoria.nombre}">
                    ${categoria.nombre}
                </label>
            `
        ;
        
        containerCategoria.appendChild(tipoCategoria)

    })


    // filtro por vtuber

    vtubers.forEach( vtuber => {

        // creacion de icon/button
        let vtuberX = document.createElement("div")
        vtuberX.classList.add("col-md-4","col-lg-3")
     
        vtuberX.innerHTML= 
        
            `   
                <input type="checkbox" class="btn-check buttonVtuber" id="vtuber${vtuber.id}" autocomplete="off" onClick="filtrar()">
                <label class="btn btn-outline-primary" for="vtuber${vtuber.id}">
                    <img class="w-25 d-block mx-auto"src="${vtuber.img}" alt="${vtuber.nombre}">
                    ${vtuber.nombre}
                </label>
            `
        ;
        
        containerVtuber.appendChild(vtuberX)
    
    })

}

function vaciarCarrito(){

    arrayCarrito.splice(0,arrayCarrito.length)
    localStorage.setItem("productos-en-carrito", JSON.stringify(arrayCarrito))
    generarProductoEnCarrito()
}


