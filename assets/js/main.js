
//--------------------------------------------------------------------------------------------------
//-------------------------------- VARIABLES GLOBALES-----------------------------------------

const iva            = 0.21
let usuarioConectado = false

let usuariosRegistrado = [], arrayCarrito = [], arrayProductosTienda = []


//-------------------------------- DATOS BD-----------------------------------------

usuariosRegistrado.push(new Usuario(1,"Julian","Hola123"))
usuariosRegistrado.push(new Usuario(2,"Vani"  ,"Hola123"))


arrayProductosTienda.push(new Producto(1,"Libro"    ,150))
arrayProductosTienda.push(new Producto(2,"Lapicera" ,80))
arrayProductosTienda.push(new Producto(3,"Lapiz"    ,59.99))
arrayProductosTienda.push(new Producto(4,"Goma"     ,19.99))

// arrayCarrito.push(new Producto(2,"Lapicera" ,80))
// arrayCarrito.push(new Producto(3,"Lapiz"    ,59.99))
// arrayCarrito.push(new Producto(4,"Goma"     ,19.99))


//-------------------------------------------MAIN----------------------------------------------


console.log(obtenerEstadoCarrito())
console.log(obtenerEstadoCarrito2())






