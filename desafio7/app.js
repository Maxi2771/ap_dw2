document.addEventListener("DOMContentLoaded", function() {
    // Obtener los elementos del DOM
    var precioElemento = document.getElementById("precioProducto");
    var inputNuevoPrecio = document.getElementById("nuevoPrecio");
    var botonCambiarPrecio = document.getElementById("cambiarPrecioBtn");

    // Añadir un evento al botón para cambiar el precio
    botonCambiarPrecio.addEventListener("click", function() {
        var nuevoPrecio = inputNuevoPrecio.value;
        if (nuevoPrecio) {
            precioElemento.innerText = "Precio: $" + nuevoPrecio;
        } else {
            alert("Por favor, ingrese un precio válido.");
        }
    });

    // Modificar los estilos del título
    var tituloElemento = document.querySelector("#nombreProducto");
    tituloElemento.style.color = "#6895ff";
    tituloElemento.style.fontSize = "24px";
});
