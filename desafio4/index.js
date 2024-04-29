function sumarProductos(precioUnitario, cantidadDeseada){
    let totalG = precioUnitario * cantidadDeseada;
    return totalG
}

let precio = parseInt(prompt("Ingrese el precio del producto"));
let cantidad = parseInt(prompt("Ingrese la cantidad que llevara del producto"));
let totalcompra = sumarProductos(precio, cantidad);
console.log("El precio total es de :" + totalcompra);
