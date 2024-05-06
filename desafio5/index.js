let cantidad = prompt("Ingresar cantidad de productos (la cantidad que habra en el array)");
let productos = [];
let stock = [];

for( i = 0; i<cantidad; i++){
    let nombre_producto = prompt("Ingresar el nombre del producto")
    productos.push(nombre_producto)
    let cant_stock = parseInt(prompt("Ingresar el stock de " + productos[i]))
    stock.push(cant_stock);
    console.log(productos[i] + " : " + stock[i])
}

let buscar_producto = parseInt(prompt("Ingrese cuantos productos quiere llevarse"));
for(i = 0; i<buscar_producto; i++){
    let producto_buscar = prompt("¿Qué producto está buscando?")
    if(productos.includes(producto_buscar)){
        let index = productos.indexOf(producto_buscar);
        let cantidad_llevar = parseInt(prompt("¿Cuántos se quiere llevar?"))
        if (cantidad_llevar <= stock[index]) {
            stock[index] -= cantidad_llevar;
            console.log("Se ha llevado " + cantidad_llevar + " unidad/es de " + producto_buscar);
        } else {
            console.log("No hay suficiente stock de " + producto_buscar);
        }
    }
    else{
        console.log("Este producto no existe");
    }
}

console.log("Stock actualizado:");
for(i = 0; i < productos.length; i++){
    console.log(productos[i] + ": " + stock[i]);
}
