const estudiante={
    nombre:"Juan",
    apellido:"Herrera",
    edad:33,
    direccion:{
        pais:"El Salvador",
        calle:"Los flores",
        numCasa:3
    }
}
console.log(estudiante.direccion);
console.log(estudiante.direccion.pais)
console.log(estudiante.direccion.numCasa)

estudiante.direccion.cpostal=503;
console.log(estudiante.direccion);
estudiante.direccion.numCasa=50;
console.log(estudiante.direccion)

delete estudiante.direccion.cpostal;
console.log(estudiante.direccion.pais);