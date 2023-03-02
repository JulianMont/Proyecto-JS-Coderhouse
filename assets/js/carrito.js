// el carrito genera el itemCarrito

class Carrito{

    constructor(idCarrito,arrayItems){

        this.idCarrito  = idCarrito
        this.arrayItems = arrayItems
        // this.cliente    = cliente
    }


    // funcion que recibe un producto y revisa si ya existe uno en el array de items, si lo hay devuelve el itemCarrito

    buscarProducto(producto){

        let itemEncontrado = this.arrayItems.find((item)=> item.idItemCarrito === producto.idProducto)

        return itemEncontrado
    
    }

    agregarProducto(producto,cantidad){

        let id   = 1
        let item = buscarProducto(producto)
        let itemAgregado


        // condicional por si no existe producto en el array
        if(item === null){
            // reviso si el array esta vacio o tiene items
            if(arrayItems.lenght > 0){
                id = this.arrayItems[arrayItems.length - 1].idItemCarrito + 1
                itemAgregado = this.arrayItems.push(new ItemCarrito(id,producto,cantidad))
            }
            
            itemAgregado = this.arrayItems.push(new ItemCarrito(id,producto,cantidad))
        }

        return itemAgregado
    }


    eliminarProducto(producto,cantidad){

        let item = buscarProducto(producto)
        let itemEliminado

        if(item === null){
            itemEliminado = console.log("Item no existe")
        }else if(cantidad === item.cantidad){
            itemEliminado = this.arrayItems.splice(item.idItemCarrito,1)
        }else if(cantidad < item.cantidad){
            itemEliminado = item.cantidad - cantidad
        }
    
        return itemEliminado
    }

    calcularTotal(){

        let total    =  this.arrayItems.reduce((acumulador,item)=> acumulador + itemCarrito)

        return total
    }


       
    // let id = 1
        
    // if(arrayProductosTienda.length === 0){
    //     arrayProductosTienda.push(new Producto(id,nombre,precio,afiliacion,vtuber,img))
    // }else{
    //     id = arrayProductosTienda[arrayProductosTienda.length - 1].id + 1
    //     arrayProductosTienda.push(new Producto(id,nombre,precio,afiliacion,vtuber,img))
    // }
        
    



}