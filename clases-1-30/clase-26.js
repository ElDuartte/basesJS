class persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura * 100;
  }
  saludar(fn) {
    var { nombre, apellido } = this;
    console.log(`Hola, me llamo ${nombre} ${apellido}.`);
    if (fn) {
      fn(nombre, apellido, false);
    }
  }
  soyAlto() {
    return this.altura >= 180;
  }
}

class desarollador extends persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }
  saludar(fn) {
    var { nombre, apellido } = this;
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarollador/a`);
    if (fn) {
      fn(nombre, apellido, true);
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Ah mirá, no sabía que eras desarollador/a`);
  }
}

var sacha = new persona("Sacha", "Lifszyc", 1.83);
var erika = new persona("Erika", "Luna", 1.65);
var arturo = new desarollador("Arturo", "Martinez", 1.8);

sacha.saludar();
erika.saludar(responderSaludo);
arturo.saludar(responderSaludo);
