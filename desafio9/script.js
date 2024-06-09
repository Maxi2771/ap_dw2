const button = document.createElement('button');
button.id = 'btnCarrito';
button.innerHTML = 'Agregar al carrito';

function agregar() {
    const message = document.createElement('h3');
    message.innerHTML = 'Agregado';

    const container = document.getElementById('container');
    container.appendChild(message);

    button.innerHTML = 'Agregado';
}

button.addEventListener('click', agregar);

const container = document.getElementById('container');
container.appendChild(button);