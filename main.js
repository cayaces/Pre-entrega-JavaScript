const precioCuchilleria = 20;
let cuchilleria = 0;
let variedades = "";
let precioTotal = 0;

function totalProductos() {
    cuchilleria = parseInt(prompt("Ingrese Cantidad Cuchilleria"));

    precioTotal = cuchilleria * precioCuchilleria;

    variedades = prompt("Ingrese tipo de Mango (Mango Platina o Mango Forjado");

    while(variedades !== "mango platina" && variedades !== "mango forjado") {
        variedades = prompt("Ingrese tipo de Mango (Mango Platina o Forjado");
    }

    if(variedades === "mango platina") {
        precioTotal = precioTotal * 1.0;
    }

    alert("El valor de su compra es $" + precioTotal);

}

totalProductos();