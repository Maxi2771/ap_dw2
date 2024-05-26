document.addEventListener("DOMContentLoaded", function() {
    var precioElemento = document.getElementById("precioProducto");
    var inputNuevoPrecio = document.getElementById("nuevoPrecio");
    var botonCambiarPrecio = document.getElementById("cambiarPrecioBtn");

    botonCambiarPrecio.addEventListener("click", function() {
        var nuevoPrecio = inputNuevoPrecio.value;
        if (nuevoPrecio) {
            precioElemento.innerText = "Precio: $" + nuevoPrecio;
        } else {
            alert("Por favor, ingrese un precio válido.");
        }
    });

    var tituloElemento = document.querySelector("#nombreProducto");
    tituloElemento.style.color = "#6895ff";
    tituloElemento.style.fontSize = "24px";
});
