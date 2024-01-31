//String primitivos

const stringPrimitivo = 'Soy un string primitivo'
console.log(typeof stringPrimitivo)

const stringPrimitivoToo = String("Soy un string primitivo Too")
console.log(typeof stringPrimitivoToo)

//String objeto

const stringObjeto = new String("Soy un string objeto")
console.log(typeof stringObjeto)


//Acceder a caracteres

const saludo = 'Hola; que transita putito?'

console.log(saludo[2])
console.log(saludo.charAt(2))
console.log(saludo.indexOf('t'))
console.log(saludo.indexOf('putito'))
console.log(saludo.indexOf('puto'))
console.log(saludo.lastIndexOf('t'))
console.log(saludo.slice(19, 25))
console.log(saludo.length)
console.log(saludo.toLocaleLowerCase())
console.log(saludo.toLocaleUpperCase())

const saludoDividido = saludo.split(' ')
console.log(saludoDividido)
console.log(saludoDividido[1])

const saludoConEspacios = ' la vaca flaca '
const saludoSinEspacios = saludoConEspacios.trim()
console.log(saludoSinEspacios)

const saludoOriginal = 'Hola Mundo'
const nuevoSaludo = saludoOriginal.replace('Mundo', 'Emoji')
console.log(nuevoSaludo)
