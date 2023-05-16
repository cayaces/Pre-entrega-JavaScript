const precioCuchilleria = 20;
let tablaDeCortar = 40;
let cuchilleria = 0;
let variedades = "";
let precioTotal = 0;

function totalProductos() {
    cuchilleria = parseInt(prompt("Ingrese Cantidad Cuchilleria"));

    precioTotal = cuchilleria * precioCuchilleria;

    variedades = prompt("Ingrese tipo de Mango (Mango Platina o Mango Forjado");

    while (variedades !== "mango platina" && variedades !== "mango forjado") {
        variedades = prompt("Ingrese tipo de Mango (Mango Platina o Forjado");
    }

    if (variedades === "mango platina") {
        precioTotal = precioTotal * 1.0;
    }

    alert("El valor de su compra es $" + precioTotal);

}

totalProductos();


class Producto {
    constructor(descripcion) {
        this.descripcion = descripcion;
        this.completada = false;
    }
}


const articulos = [];

function anadirArticulo() {
    let descripcion = prompt("Ingrese Producto: ");
    const articulo = new Producto(descripcion);
    articulos.push(articulo);
    console.log("articulos");
    alert("Su Producto se añadio al carrito");
}

function buscarProducto() {
    let productoClave = prompt("Ingrese el producto que busca: ");
    let productoEncontrado = articulos.filter(articulos => Producto.descripcion.includes(productoClave));
    alert('Se han encontrado ${productoEncontrado.length} productos que busco: "${productoClave}".');
    console.log(productoEncontrado);
}

function descripcionProducto() {
    const descripciones = articulos.map(articulos => articulos.descripcion);
    alert("Las descripciones son: ");
    console.log(descripciones);
}

function verProductos() {
    let listadoProductos = "";
    articulos.forEach((Producto) => {
        listadoProductos += '${producto.descripcion} - Estado: ${producto.completada}';
    });
    alert('La lista de productos es: ${listadoProductos} ');
}

let opcion;
do {
 opcion = prompt("Seleccione una opcion:\n 1.Anadir Articulo\n 2.Buscar producto\n 3.Obtener descrpciones\n 4. Ver producto\n 5.Salir");

    switch (opcion) {
        case "1":
            anadirArticulo();
            break;
        case "2":
            buscarProducto();
            break;
        case "3":
            descripcionProducto();
            break;
        case "4":
            verProductos();
            break;
        case "5":
            alert("Gracias por comprar con nosotros!");
        default:
            alert("Intente nuevamente. ");
    }

} while (opcion !== "5");

