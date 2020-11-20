// variable global se puede usar en cualquier funcion
var nombre = 'Juan'

// nombre es una variable en alcance local cambia de 
// valor dentro de la funcion pero la global sigue intacta
function imprimirNombreEnMayusculas(nombre){
  nombre = nombre.toUpperCase()
  console.log(nombre)
}

imprimirNombreEnMayusculas(nombre);