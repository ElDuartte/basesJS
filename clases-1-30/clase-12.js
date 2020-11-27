var juan = {
  nombre: "Juan",
  apellido: "Duarte",
  edad: 21,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: false,
};

var pepe = {
  nombre: "Pepe",
  apellido: "rodriguez",
  edad: 17,
};

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`);
  if (persona.ingeniero) {
    console.log("Ingeniero");
  } else {
    console.log("No es ingeniero");
  }
  if (persona.cocinero) {
    console.log("Cocinero");
  }
  if (persona.cantante) {
    console.log("Cantante");
  }
  if (persona.dj) {
    console.log("Dj");
  }
  if (persona.dj) {
    console.log("Guitarrista");
  }
  if (persona.drone) {
    console.log("Piloto de Drone");
  }
}

const MAYORIA_DE_EDAD = 18;

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;
const esMenorDeEdad = ({ edad }) => edad < MAYORIA_DE_EDAD;

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad.`);
  } else {
    console.log(`${persona.nombre} es menor de edad.`);
  }
}

function permitirAcceso(persona) {
  if (!esMayorDeEdad(persona)) {
    console.log("ACCESO DENEGADO");
  } else {
    console.log("ACCESO AUTORIZADO");
  }
}

imprimirProfesiones(juan);
imprimirSiEsMayorDeEdad(juan);
permitirAcceso(juan);
imprimirProfesiones(pepe);
imprimirSiEsMayorDeEdad(pepe);
permitirAcceso(pepe);
