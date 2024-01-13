// Creación de string
const primeraOpcion = 'Comillas simples'
const segundaOpcion = "Comillas dobles"
const terceraOpcion = `Comillas simples`

//Concatenación: Opcion +
const direccion = 'Calle falsa 123'
const ciudad = 'Springfield'
const direccionCompleta = 'Mi dirección completa es ' + direccion + ' ' + ciudad
console.log(direccionCompleta)

//Concatenacion: Template literals
const nombre = `Carlos`
const pais = `Mexico`
const presentacion = `Hola, soy ${nombre} de ${pais}`
console.log(presentacion)

//Concatenacion: join()
const primeraParte = 'Me encanta'
const segundaParte = 'la gente de'
const terceraParte = 'Mexico'
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(' '))

//Concatenacion: concat()
const hobbie1 = 'Resident Evil'
const hobbie2 = 'Aprender JS'
const hobbie3 = 'Tocar guitarra'
const hobbies = 'Mis hobbies son: '.concat(hobbie1,', ',hobbie2, ', ',hobbie3)
console.log(hobbies)

//Caracteres de escape
//const whatDoIDo = 'I'm Software Engineer'

//Escape alternativo
const escapeAlternativo = "I'm software engineer"

//Barra invertida
const escapeBarraInvertida = 'I\'m Software Engineer'

//Template literals
const escapeComillaInvertida = `I'm Software Engineer`

//Escritura de strings largos
const poema = 'Las rosas son rojas, \n' + 
              'Las violetas son azules, \n' +
              'Caracter inesperado, \n' +
              'En la linea 86' 
console.log(poema)

const poema2 = 'Las rosas son rojas,\n\Las violetas son azules,\n\Caracter inesperado,\n\En la linea 86' 
console.log(poema2)

const poema3 = `Las rosas son rojas,
Las violetas son azules,
Caracter inesperado,
En la linea 86`
console.log(poema3)