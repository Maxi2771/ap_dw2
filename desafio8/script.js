const productos = [
    { nombre: "Xiaomi 14 Ultra", imagen: "https://http2.mlstatic.com/D_NQ_NP_718905-MLA75019481184_032024-O.webp" },
    { nombre: "Samsung Galaxy S24 Ultra", imagen: "https://http2.mlstatic.com/D_NQ_NP_608855-MLA76782154461_062024-O.webp" },
    { nombre: "Iphone 15 Pro Max", imagen: "https://http2.mlstatic.com/D_NQ_NP_912227-MLA71782903150_092023-O.webp" },
    { nombre: "Google Pixel 8 Pro", imagen: "https://http2.mlstatic.com/D_NQ_NP_984389-MLA74807971605_022024-O.webp" },
    { nombre: "Motorola Edge 30", imagen: "https://http2.mlstatic.com/D_NQ_NP_809342-MLU74337833125_022024-O.webp" },
    { nombre: "Red Magic 9 Pro", imagen: "https://http2.mlstatic.com/D_NQ_NP_753615-MLA76540447380_052024-O.webp"}
];

for (const producto of productos) {
    const div = document.createElement('div');
    div.className = 'producto';
    const h2 = document.createElement('h2');
    h2.innerHTML = producto.nombre;
    const img = document.createElement('img');
    img.src = producto.imagen;
    img.alt = producto.nombre;
    div.appendChild(h2);
    div.appendChild(img);
    document.body.appendChild(div);
}
