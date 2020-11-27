class persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura * 100;
  }
  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`);
  }
  soyAlto() {
    return this.altura >= 180;
  }
}

class desarollador extends persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }
  saludar() {
    console.log(
      `Hola, me llamo ${this.nombre} ${this.apellido} y soy desarollador/a`
    );
  }
}

// var sacha = new persona("Sacha", "Lifszyc", 1.83);
// var erika = new persona("Erika", "Luna", 1.65);
// var arturo = new desarollador("Arturo", "Martinez", 1.8);
