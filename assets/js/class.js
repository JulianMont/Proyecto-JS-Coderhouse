
class Producto{

    constructor(idProducto,idCategoria,nombre,precio,idVtuber,img){

        this.idProducto  = idProducto
        this.idCategoria = idCategoria
        this.nombre      = nombre
        this.precio      = precio
        this.idVtuber    = idVtuber
        this.img         = img
    }
}   




// ---------------------------------------------------------------------------


class ItemProducto{

    constructor(idItemProducto,producto,cantidad){
        this.idItemProducto = idItemProducto
        this.producto       = producto
        this.cantidad       = cantidad
    }   

    agregarProducto(productoNuevo){

        let id   = arrayCarrito.length
        // reviso si existe el producto en el carrito
        let itemPos = arrayCarrito.findIndex(itemCarrito => itemCarrito.producto.idProducto === productoNuevo.idProducto)

        // aumento en 1 la cantidad si lo encuentra
        if(itemPos !== -1){
            return arrayCarrito[itemPos].cantidad++
        }

        return arrayCarrito.push(new ItemProducto(id,productoNuevo,1))

    }
    


    eliminarProducto(productoEliminado){

        let itemPos   = arrayCarrito.findIndex( itemProducto=> itemProducto.producto.idProducto === productoEliminado.producto.idProducto)
        
        if(arrayCarrito[itemPos].cantidad === 1){

            return arrayCarrito.splice(itemPos,1)

        }else{

            return arrayCarrito[itemPos].cantidad--
        }
    }
}


