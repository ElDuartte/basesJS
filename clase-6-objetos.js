var juan = {
  // key : valor
  nombre: 'Juan',
  apellido: 'Duarte',
  edad: 21
}

var pipe = {
  nombre: 'Pipe',
  apellido: 'Duarte',
  edad: 22
}

function imprimirNombreEnMayusculas({nombre}){
  // var nombre = persona.nombre.toUpperCase()
  // console.log(nombre)
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(juan)
imprimirNombreEnMayusculas(pipe)