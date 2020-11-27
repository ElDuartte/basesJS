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
/*
function imprimirNombreEnMayusculas(persona){
  // var nombre = persona.nombre
  var {nombre} = persona
  
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(juan)
imprimirNombreEnMayusculas(pipe)

function imprimirNombreYEdad({nombre, edad}){
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreYEdad(juan)
imprimirNombreYEdad(pipe)*/


function cumpleanos(persona){
  return{
    ...persona,
    edad: persona.edad + 1
  }
}