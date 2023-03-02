class ItemCarrito{

    constructor(idItemCarrito,producto,cantidad){
        this.idItemCarrito = idItemCarrito
        this.producto      = producto
        this.cantidad      = cantidad
    }

    // crear metodo para obtener precioxcantidad

    calcularSubTotal(){

        let subTotal = producto.precio*cantidad

        return subTotal
    }
}