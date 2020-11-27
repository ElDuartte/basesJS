var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  altura: 1.72,
  cantidadDeLibros: 111,
};

var alan = {
  nombre: "Alan",
  apellido: "Perez",
  altura: 1.86,
  cantidadDeLibros: 78,
};

var martin = {
  nombre: "Martin",
  apellido: "Gomez",
  altura: 1.85,
  cantidadDeLibros: 132,
};

var personas = [sacha, alan, martin];

const esAlta = ({ altura }) => altura > 1.8;
const esBaja = ({ altura }) => altura < 1.8;
const pasarAlturaACms = (persona) => ({
  ...persona,
  altura: persona.altura * 100,
});
// {
//   return {
//     ...persona,
//     altura: (persona.altura *= 100),
//   };
// }

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);
var personasCms = personas.map(pasarAlturaACms);

// console.log(personasAltas);
// console.log(personasBajas);
// console.table(personasCms);

// var acum = 0;

// for (var i = 0; i < personas.length; i++) {
//   acum = acum + personas[i].cantidadDeLibros;
// }

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros;
var totalDeLibros = personas.reduce(reducer, 0);

console.log(`En total todos tienen ${totalDeLibros} libros`);
