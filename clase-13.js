var pepe = {
  nombre: "Pepe",
  apellido: "rodriguez",
  edad: 17,
  peso: 75,
};

console.log(`Al inicio del año ${pepe.nombre} pesa ${pepe.peso}Kg`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_AÑO = 365;

const aumentarDePeso = (persona) => (persona.peso += INCREMENTO_PESO);
const adelgazar = (persona) => (persona.peso -= INCREMENTO_PESO);

for (var i = 1; i <= DIAS_DEL_AÑO; i++) {
  var random = Math.random();
  if (random < 0.25) {
    aumentarDePeso(pepe);
  } else if (random < 0.5) {
    adelgazar(pepe);
  }
}

console.log(`Al final del año ${pepe.nombre} pesa ${pepe.peso.toFixed(1)}Kg`);
