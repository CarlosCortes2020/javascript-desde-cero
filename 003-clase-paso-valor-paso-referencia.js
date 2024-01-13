//Paso por valor
let x = 1
let y = "Hola"
let z = null 

let a = x
let b = y
let c = z

console.log(x, y, z, a, b, c)

//Paso por referencia
let frutas = ["manzana"]
frutas.push("pera")
console.log(frutas)

let pelotas = ["🏀"]
let copiaDePelotas = pelotas
pelotas.push("🏐")
console.log(pelotas, copiaDePelotas)
