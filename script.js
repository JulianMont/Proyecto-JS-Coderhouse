//primero vean el archivo que esta arriba del index llamado data.json
//si observan ese archivo con extension .json es donde agrego la data de
//los productos, en formato json que es muy similar a un array de objetos.
//tengan en cuenta que la clave va entre comillas,por si no les funciona.
//OTRA COSA MUY IMPORTANTE ES QUE LO TIENEN QUE EJECUTAR CON EL LIVE SERVER SINO
//LA LLAMADA A UN JSON LOCAL NO LES VA A FUNCIONAR.

///declaro el array de productos-
let productos = [];

//realizo la llamada fetch, cuyo URL va a ser la ruta de mi archivo json (ruta relativa)
fetch("./data.json")
  .then((res) => res.json())
  ///La respuesta de la API se convierte en formato JSON utilizando el método json() y se almacena en la variable data.
  .then((data) => {
    //la variable data contiene la respuesta de la peticion, y lo que hago es ejecutar la funcion
    //cargarProductos y le envio como parametro dicha respuesta
    cargarProductos(data);
  });

const cargarProductos = (data) => {
  //dentro de la funcion, asigno al array de productos arriba declarado, la data que me trajo la peticion
  productos = data;
  const contenedor = document.getElementById("products-container");
  //luego recorro el array como ya sabemos hacerlo
  productos.forEach((producto, indice) => {
    let card = document.createElement("div");
    card.classList.add("product__card");
    card.innerHTML = ` <div class="card">
        <h5 class="card-title">${producto.titulo}</h5>
        <img src=${producto.imagen} class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">
            ${producto.descripcion}
          </p>
          <h5 class="card__price">Precio: <span>${producto.precio}</span></h5>
          <a href="#" class="btn" onClick="agregarAlCarrito(${indice})">Añadir al Carrito</a>
        </div>
      </div>`;
    contenedor.appendChild(card);
  });
};
