
class Producto{

    constructor(idProducto,nombre,precio,afiliacion,vtuber,){

        this.idProducto = idProducto
        this.nombre     = nombre
        this.precio     = precio
        this.afiliacion = afiliacion
        this.vtuber     = vtuber
        // this.img        = img
    }

    // metodo para meter productos en la arrayProductosTienda

    agregarProductoTienda(nombre,precio,afiliacion,vtuber,){

        let id = 1
        let productoAgregado
        
        if(arrayProductosTienda.length === 0){
            productoAgregado = arrayProductosTienda.push(new Producto(id,nombre,precio,afiliacion,vtuber,img))
        }else{
            id = arrayProductosTienda[arrayProductosTienda.length - 1].id + 1
            productoAgregado = arrayProductosTienda.push(new Producto(id,nombre,precio,afiliacion,vtuber,img))
        }

        return productoAgregado
    }
}   



























// class Producto{

//     constructor(id,nombre,precio){

//         this.id     = id
//         this.nombre = nombre
//         this.precio = precio
//     }

//     precioPlusIVA(){
//         return (this.precio + this.precio * iva)
//     }

//     agregarAlCarrito(Producto){

//         arrayCarrito.push(Producto)
//     }

//     sacarDelCarrito(i){

//         arrayCarrito.splice(i,1)
//     }


// }

// class Usuario{

//     constructor(id,nombreUsuario,pass){

//         this.id            = id
//         this.nombreUsuario = nombreUsuario
//         this.pass          = pass
//     }
// }
