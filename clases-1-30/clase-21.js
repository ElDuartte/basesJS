function persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura * 100;
}

persona.prototype.saludar = function () {
  // console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`);
  if (this.altura >= 180) {
    console.log(
      `Hola, me llamo ${this.nombre} ${this.apellido} tengo ${this.altura} cm de altura. Soy alt@ :)`
    );
  } else {
    console.log(
      `Hola, me llamo ${this.nombre} ${this.apellido} tengo ${this.altura} cm de altura. Soy baj@ :(`
    );
  }
};

var sacha = new persona("Sacha", "Lifszyc", 1.83);
var erika = new persona("Erika", "Luna", 1.65);
var arturo = new persona("Arturo", "Martinez", 1.8);
