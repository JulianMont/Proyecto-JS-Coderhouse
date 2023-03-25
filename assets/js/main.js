
const containerCards     = document.getElementById("containerCards")
const containerCategoria = document.getElementById("containerCategoria")
const containerVtuber    = document.getElementById("containerVtuber")
const vtuberAll          = document.getElementById("vtuberAll") 
const CategoriaAll       = document.getElementById("categoriaAll")
const totalCarrito       = document.getElementById("totalCarrito")
const btnVaciarCarrito   = document.getElementById("vaciarCarrito")
const btnComprarCarrito  = document.getElementById("comprarCarrito")


let buttonsVtuber     = document.querySelectorAll(".buttonVtuber:checked")
let buttonsCategoria  = document.querySelectorAll(".buttonCategoria:checked")

let arrayCarritoLS    = JSON.parse(localStorage.getItem("productos-en-carrito"))

let arrayCarrito = []
let arrayProductosTienda = []


cargarProductosBD()

console.log(arrayProductosTienda)
// let categoriaProducto = cargarCategoriasBD()
// let vtubers = cargarVtubersBD()


cargarProductoEnTienda(arrayProductosTienda)
generarProductoEnCarrito()
// cargarFiltrosEnTienda()

btnVaciarCarrito.addEventListener("click",vaciarCarrito)

btnComprarCarrito.addEventListener("click",comprarCarrito)
