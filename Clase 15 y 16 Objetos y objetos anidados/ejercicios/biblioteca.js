const libro={
    informacion:{
        titulo:"Cien Años de Soledad",
    autor:"Gabriel Garcia Marquez",
    genero:"Novela",
    },
   disponibilidad:{
    copias:20,
    prestados:5,
    ubicacion:"Estante B2",
    },
    registro:{
        fechaPublicacion:"30-05-1967",
        fechaIngreso:"20-11-2024",
        ultimaRevision:"15-01-2025",
    }

};

// Mostrar la informacion del autor
console.log("Autor".libro.informacion.autor);

// Calcular ejemplares disponibles
const disponibles=libro.disponibilidad.copias-libro.disponibilidad.prestados;
console.log("Ejemplares disponibles:", disponibles);

// actualizar ultimaRevision con la fecha actual
libro.registro.ultimaRevision= new Date().toISOString().split("T")[0];
console.log(libro.registro.ultimaRevision);

// cambiar genero del libro
libro.informacion.genero="Realismo Magico";
console.log(libro.informacion.genero)

const{titulo}=libro.informacion;
const {ubicacion}=libro.disponibilidad;
console.log("Titulo", titulo);
console.log("Ubicacion", ubicacion);

// Mostrar el objeto actualizado
console.log("Libro actualizado", libro);