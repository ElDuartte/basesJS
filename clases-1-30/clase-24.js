function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function () {};
  fn.prototype = prototipoPadre.prototype;
  prototipoHijo.prototype = new fn();
  prototipoHijo.prototype.constructor = prototipoHijo;
}

function persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura * 100;
}

persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`);
};
persona.prototype.soyAlto = function () {
  return this.altura >= 180;
};

function desarrollador(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

heredaDe(desarrollador, persona);

desarrollador.prototype.saludar = function () {
  console.log(
    `Hola, me llamo ${this.nombre} ${this.apellido} y soy desarollador/a`
  );
};

// var sacha = new persona("Sacha", "Lifszyc", 1.83);
// var erika = new persona("Erika", "Luna", 1.65);
// var arturo = new persona("Arturo", "Martinez", 1.8);
