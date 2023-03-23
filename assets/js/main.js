
const containerCards     = document.getElementById("containerCards")
const containerCategoria = document.getElementById("containerCategoria")
const containerVtuber    = document.getElementById("containerVtuber")
const vtuberAll          = document.getElementById("vtuberAll") 
const CategoriaAll       = document.getElementById("categoriaAll")
const totalCarrito       = document.getElementById("totalCarrito")
const btnVaciarCarrito   = document.getElementById("vaciarCarrito")

let buttonsVtuber     = document.querySelectorAll(".buttonVtuber:checked")
let buttonsCategoria  = document.querySelectorAll(".buttonCategoria:checked")

let arrayCarritoLS    = JSON.parse(localStorage.getItem("productos-en-carrito"))


cargarProductoEnTienda(arrayProductosTienda)
generarProductoEnCarrito()
cargarFiltrosEnTienda()

btnVaciarCarrito.addEventListener("click",vaciarCarrito)


function filtrar(){

    // array donde guardo la array filtrada

    let arrayFiltrado = []

    // array donde voy guardando la array filtrada y no perder el dato para luego mandar a la funcion de generar las card
    let arrayFiltradoTotal = []

    // actualizo los buttonFiltro
    buttonsVtuber    = document.querySelectorAll(".buttonVtuber:checked")
    buttonsCategoria = document.querySelectorAll(".buttonCategoria:checked")

    // uno los botones en un array

    let buttonsFiltro = [...buttonsVtuber, ...buttonsCategoria]

    buttonsFiltro.forEach( filtro =>{


        arrayFiltrado = arrayProductosTienda.filter(producto => ((`vtuber${producto.idVtuber}`) === filtro.id) || ((`categoria${producto.idCategoria}`) === filtro.id))

        // guardo el dato del filtro X 

        arrayFiltradoTotal = arrayFiltrado.concat(arrayFiltrado)
        


    })

    console.log(arrayFiltrado)
    console.log(arrayFiltradoTotal)

    // si no hay nada en el filtratoTotal carga la array con todos los productos 

    if(arrayFiltradoTotal.length === 0){
        
        cargarProductoEnTienda(arrayProductosTienda)
    }else{

        cargarProductoEnTienda(arrayFiltradoTotal)
    }


}





















// ===================================


    // buttonsVtuber.forEach( vtuber =>{
        

    //     arrayFiltrado = arrayProductosTienda.filter(producto => ((`vtuber${producto.idVtuber}`) === vtuber.id))

    //     buttonsCategoria.forEach( categoria =>{

    //         arrayFiltrado = arrayProductosTienda.filter(producto => ((`vtuber${producto.idVtuber}`) === vtuber.id) && ((`categoria${producto.idCategoria}`) === categoria.id))

    //     })

    //     arrayFiltradoTotal = arrayFiltradoTotal.concat(arrayFiltrado)
        
    // })
   

    // buttonsCategoria.forEach( (categoria) =>{


    //     arrayFiltrado = arrayProductosTienda.filter(producto => (`categoria${producto.idCategoria}`) === categoria.id)


    //     buttonsVtuber.forEach( vtuber =>{

    //         arrayFiltrado = arrayProductosTienda.filter(producto => ((`vtuber${producto.idVtuber}`) === vtuber.id) && ((`categoria${producto.idCategoria}`) === categoria.id))

    //     }) 

    //     arrayFiltradoTotal = arrayFiltradoTotal.concat(arrayFiltrado)
           
    // })


// ===================================


// RECORDATORIOS


// filtracion por buscador
// agregar iconCarrito un numerito q aumente segun la cantidad de items
// agregar inicio y registro de sesion
// mandar usuario creado al storage





