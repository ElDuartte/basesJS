const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(url, opts, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`);
}

obtenerPersonaje(1)
  .then((personaje) => {
    console.log(`El personaje 1 es ${personaje.name}`);
    return obtenerPersonaje(2);
  })
  .then((personaje) => {
    console.log(`El personaje 2 es ${personaje.name}`);
    return obtenerPersonaje(3);
  })
  .then((personaje) => {
    console.log(`El personaje 3 es ${personaje.name}`);
    return obtenerPersonaje(4);
  })
  .then((personaje) => {
    console.log(`El personaje 4 es ${personaje.name}`);
    return obtenerPersonaje(5);
  })
  .then((personaje) => {
    console.log(`El personaje 5 es ${personaje.name}`);
    return obtenerPersonaje(6);
  })
  .then((personaje) => {
    console.log(`El personaje 6 es ${personaje.name}`);
    return obtenerPersonaje(7);
  })
  .then((personaje) => {
    console.log(`El personaje 7 es ${personaje.name}`);
    return obtenerPersonaje(17); // personaje 17 no esta produce error
  })
  .then((personaje) => {
    //personaje 17 produce error se puede probar el offline sin usar las google dev tools
    console.log(`El personaje 17 es ${personaje.name}`);
  })
  .catch(onError);

// obtenerPersonaje(1, function (persona) {
//   console.log(`Hola, yo soy ${persona.name}`);

//   obtenerPersonaje(2, function (persona) {
//     console.log(`Hola, yo soy ${persona.name}`);

//     obtenerPersonaje(3, function (persona) {
//       console.log(`Hola, yo soy ${persona.name}`);

//       obtenerPersonaje(4, function (persona) {
//         console.log(`Hola, yo soy ${persona.name}`);

//         obtenerPersonaje(5, function (persona) {
//           console.log(`Hola, yo soy ${persona.name}`);

//           obtenerPersonaje(6, function (persona) {
//             console.log(`Hola, yo soy ${persona.name}`);

//             obtenerPersonaje(17, function (persona) {
//               //no hay personaje 17
//               console.log(`Hola, yo soy ${persona.name}`);
//             });
//           });
//         });
//       });
//     });
//   });
// });
