var pepe = {
  nombre: "Pepe",
  apellido: "rodriguez",
  edad: 17,
  peso: 75,
};

console.log(`Al inicio del año ${pepe.nombre} pesa ${pepe.peso}Kg`);

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_AÑO = 365;

const aumentarDePeso = (persona) => (persona.peso += INCREMENTO_PESO);
const adelgazar = (persona) => (persona.peso -= INCREMENTO_PESO);
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = pepe.peso - 3;
var dias = 0;

while (pepe.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(pepe);
  }
  if (realizaDeporte()) {
    adelgazar(pepe);
  }
  dias += 1;
}

console.log(`Pasaron ${dias} días hasta que ${pepe.nombre} adelgazó 3Kg`);
