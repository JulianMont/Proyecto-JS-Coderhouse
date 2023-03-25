
function cargarProductosBD(){

    fetch("../../data-productos.json")

        .then( res => res.json())
        .then( data => {

            data.forEach(producto =>{
                
                arrayProductosTienda.push(new Producto(producto.idProducto,producto.idCategoria,producto.nombre,producto.precio,producto.idVtuber,producto.img))
            })
        })
        .then(()=>{
            cargarProductoEnTienda(arrayProductosTienda)
        })
}

function cargarFiltrosBD(){

    fetch("../../data-categorias.json")

        .then( res => res.json())
        .then( data => {


            data.forEach(categoria =>{
                
                categoriaProducto.push(categoria)
            })
        })

    fetch("../../data-vtubers.json")
        .then( res => res.json())
        .then( data => {

            data.forEach(vtuber =>{
                
                vtubers.push(vtuber)
            })
        })

        .then(()=>{
            cargarFiltrosEnTienda()
        })

}








function cargarProductoEnTienda(productosFiltrados){

    console.log(productosFiltrados)

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

    Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1500,
        toast: true,
        timerProgressBar: true,
      })
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

    Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'Producto eliminado del carrito',
        showConfirmButton: false,
        timer: 1500,
        toast: true,
        timerProgressBar: true,
      })

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
    arrayCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito")) || []

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

    Swal.fire({
        title: '¿Usted esta seguro?',
        text: "Va a borrar todos los productos de su carrito",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
    }).then((result) => {

        arrayCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"))


        if (result.isConfirmed && Object.keys(arrayCarrito).length !== 0) {

        
            Swal.fire(
                'Operacion realizada',
                'Su carrito se ha vaciado',
                'success',
            )

            arrayCarrito.splice(0,arrayCarrito.length)
            
            localStorage.setItem("productos-en-carrito", JSON.stringify(arrayCarrito))

            generarProductoEnCarrito()

        }else if(result.isConfirmed && Object.keys(arrayCarrito).length === 0){


            Swal.fire({
                icon: 'warning',
                title: 'Error',
                text: 'No hay productos en el carrito',
            })

        }

    })

}

function comprarCarrito(){

    Swal.fire({
        title: 'Confirmacion de compra',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
    }).then((result) => {

        if (result.isConfirmed && Object.keys(arrayCarrito).length !== 0) {

        
            Swal.fire(
                'Operacion realizada',
                'Gracias por su compra en OwOMarket 😊',
                'success',
            )

            arrayCarrito.splice(0,arrayCarrito.length)
            
            localStorage.setItem("productos-en-carrito", JSON.stringify(arrayCarrito))

            generarProductoEnCarrito()

        }else if(result.isConfirmed && Object.keys(arrayCarrito).length === 0){


            Swal.fire({
                icon: 'warning',
                title: 'Error',
                text: 'Su carrito se encuentra vacio',
            })

        }

    })





}


function filtrar(){

    // array donde guardo la array filtrada

    let arrayFiltrado = []

    // array donde voy guardando la array filtrada y no perder el dato para luego mandar a la funcion de generar las card
    let arrayFiltradoTotal = []

    // actualizo los buttonFiltro
    buttonsVtuber    = document.querySelectorAll(".buttonVtuber:checked")
    buttonsCategoria = document.querySelectorAll(".buttonCategoria:checked")

    if(buttonsVtuber.length !== 0){

        vtuberAll.checked = false

        buttonsVtuber.forEach( filtroV =>{
    
    
            arrayFiltrado = arrayProductosTienda.filter(producto => ((`vtuber${producto.idVtuber}`) === filtroV.id))
    
            if(buttonsCategoria.lenght != 0){
    
                buttonsCategoria.forEach(filtroC =>{
    
                    arrayFiltrado = arrayFiltrado.filter(producto => ((`categoria${producto.idCategoria}`) === filtroC.id))

    
                    arrayFiltradoTotal = arrayFiltradoTotal.concat(arrayFiltrado)
    
                })
    
            }
    
            arrayFiltradoTotal = arrayFiltradoTotal.concat(arrayFiltrado)
            
        })
    }

    if(buttonsCategoria.length !== 0){

        CategoriaAll.checked = false

        buttonsCategoria.forEach( filtroC =>{
    
    
            arrayFiltrado = arrayProductosTienda.filter(producto => ((`categoria${producto.idCategoria}`) === filtroC.id))
    
    
            if(buttonsVtuber.lenght != 0){
    
                buttonsVtuber.forEach(filtro =>{
    
                    arrayFiltrado = arrayFiltrado.filter(producto => ((`vtuber${producto.idVtuber}`) === filtro.id))
    
                    arrayFiltradoTotal = arrayFiltradoTotal.concat(arrayFiltrado)
    
                })
    
            }
    
    
            arrayFiltradoTotal = arrayFiltradoTotal.concat(arrayFiltrado)
            
        })
    }
        
    arrayFiltradoTotal = [...new Set(arrayFiltradoTotal)]

    // si no hay nada en el filtratoTotal carga la array con todos los productos 

    if(arrayFiltradoTotal.length === 0){

        CategoriaAll.checked = true
        vtuberAll.checked = true

        cargarProductoEnTienda(arrayProductosTienda)
        
    }else{


        cargarProductoEnTienda(arrayFiltradoTotal)
    }


}






 