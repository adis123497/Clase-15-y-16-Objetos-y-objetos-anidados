const producto={
    detalles:{
        nombre:"Laptop ASUS Vivobook",
        precio:500,
        categoria:"Computacion"
    },
Inventario:{
    stock:100,
    proveedor:"Intelmax",
    Ubicacion:"Bodega 5"

},
Historial:{
    fechaIngreso:"02-07-2025",
    ultimaVenta:"01-08-2025",
    ventasTotales:145,
},
};
// Mostrar únicamente los detalles
console.log("Detalles",producto.detalles);

// Aumentar el stock en 50 minutos
producto.Inventario.stock+=50;
console.log(producto.Inventario.stock)

// Cambiar la categoria a la "Electronica"
producto.detalles.categoria="Electronica";
console.log(producto.Inventario.categoria)

// Extraer el nombre y precio en variables separadas
const{nombre,precio}=producto.detalles;
console.log("Nombre", nombre);
console.log("Precio", precio);

// Mostrar el obejto actualizado
console.log("Producto actualizado", producto)
