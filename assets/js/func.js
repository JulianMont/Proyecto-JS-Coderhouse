//-------------------------------- PROCEDIMIENTO Tienda (FUNCIONA , Mejora: Especificar cantidad para no llenar objetos repetidos el array)------------------------------------------------

function mostrarTienda(){
   
    arrayProductosTienda.forEach( producto =>{

        alert("Producto: "+ producto.nombre + "\nPrecio: "+ producto.precioPlusIVA())

        let opcion = prompt("¿Desea agregarlo a su carrito?\n\n1-> Si\n2-> No")

        while(parseInt(opcion) !== 2){

            if(parseInt(opcion) === 1){

                producto.agregarAlCarrito(producto)
                alert("Producto Agregado")

                opcion = prompt("¿Quiere agregar otro?\n\n1-> Si\n2-> No")
            }
        }
    })
}

//-------------------------------- PROCEDIMIENTO INICIAR SESION (FUNCIONA)-----------------------------------------

function iniciarSesion() {
    
    let usuarioEncontrado
    let usuario
    let pass
    let intentosContra = 3
    let usuarioPosicion
    
    // usuario registrado
    alert("Usuario: Julian\nContraseña: Hola123")
    alert("Usuario: Vani\nContraseña: Hola123")
    
    usuario = prompt("Ingrese su usuario")
    
    usuarioEncontrado = usuariosRegistrado.some( usuarioFiltrado =>  usuarioFiltrado.nombreUsuario === usuario)

    while( usuarioEncontrado !== true){
    
        alert("El nombre de usuario no se encuentra registado")
    
        usuario = prompt("Ingrese su usuario")
    
        usuarioEncontrado = usuariosRegistrado.some( usuarioFiltrado =>  usuarioFiltrado.nombreUsuario === usuario)
    }

    usuarioPosicion = usuariosRegistrado.findIndex( usuarioPos => usuarioPos.nombreUsuario === usuario)
    
    pass = prompt("Ingrese su contraseña")
    
    if(usuariosRegistrado[usuarioPosicion].pass === pass){
        
        alert("Ha ingresado correctamente\n\nBienvenido "+usuariosRegistrado[usuarioPosicion].nombreUsuario)
        usuarioConectado = true
        menuConectadoTrue()
    
    }else{
        while(pass != usuariosRegistrado[usuarioPosicion].pass && intentosContra > 0){
    
            alert("La contraseña ingresada es incorrecta\n\nNumero de intentos restantes: "+intentosContra)
            intentosContra--
            pass = prompt("Ingrese su contraseña")
        }
        if(usuariosRegistrado[usuarioPosicion].pass === pass){
            alert("Ha ingresado correctamente\n\nBienvenido "+usuariosRegistrado[usuarioPosicion].nombreUsuario)
            usuarioConectado = true
            menuConectadoTrue()
        }else{
            alert("Ha superado el numero de intentos para ingresar, vuelva mas tarde")
            menuConectadoFalse()
        }
    }
    
}

//-------------------------------- PROCEDIMIENTO CERRAR SESION (FUNCIONA)-----------------------------------------

function cerrarSesion(){

    alert("Se ha cerrado su sesion")
    
    usuarioConectado = false

    menuConectadoFalse()
}


//-------------------------------- PROCEDIMIENTO MENU PRINCIPAL (FUNCIONA)-----------------------------------------

function menuConectadoFalse(){

    let opcion

    do {

        opcion = prompt("Seleccione una de las siguientes opciones\n\n1 -> Iniciar Sesion\n2 -> Crear cuenta \n3 -> Ver Tienda \n4 -> Ver Carrito \n\n0 -> Salir\n")
        
        switch(parseInt(opcion)){
            case 1 :
                iniciarSesion()
                opcion = 0
                break
            case 2 :
                crearCuenta()
                break
            case 3 :
                mostrarTienda()
                break
            case 4 :
                if(usuarioConectado == false){
                    alert("Inicie sesion para ingresar a su carrito")
                    iniciarSesion()
                }else{
                    verCarrito()
                }
                break
            case 0 :
                alert("Gracias por visitarnos , vuelva pronto 🙂")
                break
            default:
                alert("La opcion ingresada no es valida, porfavor ingrese el numero de la opcion")
                break
        }
        
    } while (parseInt(opcion) !==0);
}

//-------------------------------- PROCEDIMIENTO MENU USUARIO CONECTADO (FUNCIONA)-----------------------------------------

function menuConectadoTrue(){

    let opcion

    do {
        opcion = prompt("Seleccione una de las siguientes opciones\n\n1 -> Ver Tienda \n2 -> Ver Carrito \n3 -> Cerrar Sesion \n\n0 -> Salir\n")
        
        switch(parseInt(opcion)){
            case 1 :
                mostrarTienda()
                break
            case 2 :
                verCarrito()
                opcion = 0
                break
            case 3 :
                cerrarSesion()
                opcion = 0
                break
            case 0 :
                alert("Gracias por visitarnos , vuelva pronto 🙂")
                break
            default:
                alert("La opcion ingresada no es valida, porfavor ingrese el numero de la opcion")
                break
        }
        
    } while (parseInt(opcion) !==0);
}

//-------------------------------- PROCEDIMIENTO VER CARRITO MENU (FUNCIONA)-----------------------------------------

function verCarrito(){

    do {
        opcion = prompt("Seleccione una de las siguientes opciones\n\n1 -> Ver productos en carrito \n2 -> Sacar producto del carrito \n3 -> Confirmar compra \n\n0 -> Volver al menu\n")
        
        switch(parseInt(opcion)){
            case 1 :
                if(obtenerEstadoCarrito() === true){
                    verProductosEnCarrito()
                }else{
                    alert("Su carrito se encuentra vacio")
                }
                break
            case 2 :
                if(obtenerEstadoCarrito() === true){
                    eliminarProductoCarrito()
                }else{
                    alert("Su carrito se encuentra vacio")
                }
                break
            case 3 :
                if(obtenerEstadoCarrito() === true){
                    compraConfirmada()
                }else{
                    alert("Su carrito se encuentra vacio")
                }
                break
            case 0 :
                if(usuarioConectado === false){
                    menuConectadoFalse()
                    opcion = 0
                }else{
                    menuConectadoTrue()
                    opcion = 0
                }
                break
            default:
                alert("La opcion ingresada no es valida, porfavor ingrese el numero de la opcion")
                break
        }
        
    } while (parseInt(opcion) !==0);
}

//-------------------------------- PROCEDIMIENTO VER PRODUCTOS EN ARRAY (FUNCIONA)-----------------------------------------

function verProductosEnCarrito(){
    arrayCarrito.forEach(producto => alert(">>>>>Productos en carrito<<<<<\n\nProducto: "+ producto.nombre+"\nPrecio: $"+ producto.precioPlusIVA()))
}

//-------------------------------- PROCEDIMIENTO ELIMINAR PRODUCTOS EN ARRAY (FUNCIONA)-----------------------------------------

function eliminarProductoCarrito(){

    arrayCarrito.forEach( (producto,i) =>{

        alert("Producto: "+ producto.nombre + "\nPrecio: "+ producto.precioPlusIVA())

        let opcion = prompt("¿Desea eliminarlo de su carrito?\n\n1-> Si\n2-> No")

        while(parseInt(opcion) !== 2){

            if(parseInt(opcion) === 1){

                producto.sacarDelCarrito(i)
                alert("Producto Eliminado")

                opcion = 2
            }
        }

    })
}

//-------------------------------- PROCEDIMIENTO COMPRA  (FUNCIONA)-----------------------------------------


function compraConfirmada(){

    let total    =  arrayCarrito.reduce((t,producto) => t+ producto.precioPlusIVA(),0)

    alert(">>>>>>Su compra ha sido exitosa<<<<<<\nTotal: $"+total)

    // cleans del carrito
    arrayCarrito.splice(0,arrayCarrito.length)


    menuConectadoTrue()
}



//-------------------------------- CREAR USUARIO (FUNCIONA)-----------------------------------------

function crearCuenta(){

    let usuario = prompt("Ingrese su usuario")
    
    let usuarioEncontrado = usuariosRegistrado.some( usuarioFiltrado =>  usuarioFiltrado.nombreUsuario === usuario)
    
    while( usuarioEncontrado !== false){
    
        alert("El nombre de usuario ya se encuentra registado")
    
        usuario = prompt("Ingrese su usuario")
    
        usuarioEncontrado = usuariosRegistrado.some( usuarioFiltrado =>  usuarioFiltrado.nombreUsuario === usuario)
    }

    let pass = prompt("Ingrese su contraseña")

    let id   = usuariosRegistrado.length - 1
    
    usuariosRegistrado.push(new Usuario(id,usuario,pass))

    alert("Su cuenta se ha registrado correctamente")
}

//-------------------------------- CHECK ESTADO CARRITO , para saber si tiene productos o no(FUNCIONA)----------------------------------------


function obtenerEstadoCarrito2(){

    // check false = carrito vacio
    // check true  = carrito con productos

    let check = false

    if(arrayCarrito.length >= 0){
        check = true
    }

    return check
}

