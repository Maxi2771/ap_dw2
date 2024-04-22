let nombre = prompt("Ingresar el nombre de un producto");
        let precio = parseFloat(prompt("Ingresar el precio de " +  nombre));
        let cant = parseFloat(prompt("Ingresar la cantidad que llevara de " + nombre));
        let suma = cant * precio;
        alert("Se ha llevado " + cant + " " + nombre + " que cuesta " + precio + " y tiene un costo total de " + suma)