const productos = [
  { id: 2, nombre: "Pantalones Deportivos", precio: 40 },
  { id: 1, nombre: "Camiseta Deportiva", precio: 20 },
  { id: 3, nombre: "Zapatos Deportivos", precio: 60 },
  { id: 4, nombre: "Gorra", precio: 10 },
  { id: 5, nombre: "Calcetines", precio: 5 },
];
const nombresProductos = [];
productos.forEach((producto) => {
  nombresProductos.push(producto.nombre);
});

const productosIndice0 = productos.map((producto, index) => {
  return { id: index, name: producto.nombre, price: producto.precio };
});
/* productos.forEach((producto) => {
  const li = document.createElement("li");
  li.innerHTML = `<span>${producto.nombre}</span>`;
  document.body.appendChild(li);
}); */
function buscarProductoPrecioInferior(productos, precioLimite) {
  return productos.find((producto) => producto.precio < precioLimite);
}

const productoBarato = productos.find((producto, index) => {
  return producto.precio < 10;
});

const precioLimiteBusqueda = 10;
const productoEncontrado = buscarProductoPrecioInferior(
  productos,
  precioLimiteBusqueda
);

/* if (productoEncontrado) {
  console.log(
    `Producto encontrado: ${productoEncontrado.nombre} al precio ${productoEncontrado.precio}.`
  );
} else {
  console.log(
    `No se encontro un producto por debajo de ${precioLimiteBusqueda}.`
  );
} */

function filtrarProductos(products, precioMinimo, precioLimite, palabraClave) {
  return products.filter((producto) => {
    return (
      producto.precio > precioMinimo &&
      producto.precio < precioLimite &&
      producto.nombre.toLowerCase().includes(palabraClave.toLowerCase())
    );
  });
}

const productosPrecioIntermedio = filtrarProductos(
  productos,
  10,
  40,
  "Deportiv"
);

if (productosPrecioIntermedio.length > 0) {
  productosPrecioIntermedio.forEach((product, index) =>
    console.log(
      `Producto N° ${index} encontrado: ${product.nombre} al precio ${product.precio}`
    )
  );
} else {
  console.log("No se encontraron productos");
}

/* const numeros = [1, 10, 11,  2, 3];

console.log(numeros.sort()); // [ 1, 10, 11, 2, 3 ]
console.log(numeros.sort((a, b) => a - b)); // [ 1, 2, 3, 10, 11 ] */
console.log(productos.sort((a, b) => a.nombre.localeCompare(b.nombre)));
console.log(productos.sort(compararStrings));

function compararStrings(a, b) {
  return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
}

const productosPreciosBajos = productos.some((producto) => producto.precio < 5);
console.log(
  `  ${productosPreciosBajos ? "Si" : "No"}  hay productos con precios bajos`
);

const sumaPreciosProductos = productos.reduce((suma, producto) => {
  return suma + producto.precio;
}, 0); // 135
console.log(sumaPreciosProductos);
