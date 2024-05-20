function crearProducto() {
    let nombre = prompt("Ingrese el nombre del producto:");
    let precio = parseInt(prompt("Ingrese el precio del producto:"), 10);
    let cantidadDisponible = parseInt(prompt("Ingrese la cantidad disponible del producto:"), 10);

    return {
        nombre: nombre,
        precio: precio,
        cantidadDisponible: cantidadDisponible
    };
}

function cambiarproducto(producto) {
    let nuevoNombre = prompt("Ingrese el nuevo nombre del producto:");
    producto.nombre = nuevoNombre;
}

function categoria(producto) {
    let categoria = prompt("Ingrese la categoría del producto:");
    producto.categoría = categoria;
}

function eliminar(producto) {
    delete producto.cantidadDisponible;
}

let producto = crearProducto();
cambiarproducto(producto);
categoria(producto);
eliminar(producto);
console.log(producto);
