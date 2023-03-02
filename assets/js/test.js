
// arrays necesarios para el programa

let arrayProductosTienda = [],arrayUsuarios = [], arrayPackSlider = [], arrayItemsCarrito = []


// valores de prueba

let producto1 = new Producto(1,"Media",20,"Hololive","Kronii")
let producto2 = new Producto(2,"Lapiz",5,"Hololive","Kronii")
let producto3 = new Producto(3,"Hoja",3,"Hololive","Kronii")
let producto4 = new Producto(4,"Agua",200,"Hololive","Kronii")

arrayItemsCarrito.push(new ItemCarrito(1,producto1,1))
arrayItemsCarrito.push(new ItemCarrito(2,producto2,1))
arrayItemsCarrito.push(new ItemCarrito(3,producto3,1))


let carrito = new Carrito(1,arrayItemsCarrito)

console.log(arrayItemsCarrito)


console.log(carrito.buscarProducto(producto2))

item = new ItemCarrito(4,producto4,2)


console.log(item.calcularSubTotal)