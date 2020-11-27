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
  .then(function (personaje) {
    console.log(`El personaje 1 es ${personaje.name}`);
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
