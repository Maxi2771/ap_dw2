let nombre = prompt("Ingresar el nombre de un producto");
        let precio = parseFloat(prompt("Ingresar el precio de " +  nombre));
        let cant = parseFloat(prompt("Ingresar la cantidad que llevara de " + nombre));
        let suma = cant * precio;

        if(cant >= 5){
            descuento = suma * 0.1;
            aplicar_desc = suma - descuento;
            alert("Se ha llevado " + cant + " " + nombre + " que cuesta " + precio + " y por la cantidad que se ha llevado del producto tendra un descuento del 10%, entonces queda en " + aplicar_desc);
        }
        else {
            alert("Se ha llevado " + cant + " " + nombre + " que cuesta " + precio + " y tiene un costo total de " + suma);
        }
        