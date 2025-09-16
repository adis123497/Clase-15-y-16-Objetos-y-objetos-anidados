// const nombre="Ladis";
// const edad=17;
// const altura=1.67;

const persona={
nombre:"Ladis",
edad:29,
alrura:1.67
};

console.log(persona);
console.log(persona,nombre);
console.log(persona['edad'])

persona.Cojos="Negros";
console.log(persona);

delete persona.altura;
console.log(persona);

persona.edad=100;
console.log(persona);

const nom=persona.nombre
console.log(nom);

// const {edad}=persona;
// const {nombre}=persona;
// console.log(edad);
// console.log(nombre);

const{nombre,edad}=persona;
console.log(nombre)
