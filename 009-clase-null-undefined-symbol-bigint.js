//Null es tipo dato primitivo
const snoopy = null
console.log(snoopy)
console.log(typeof snoopy)

//Undefined
let name
console.log(name)

//Symbol
const uniqueId = Symbol('id')
const symbol1 = Symbol(1)
const symbol2 = Symbol(1)
console.log(symbol1 === symbol2)

const ID = Symbol('id')
let user = {}
user[ID] = '1234'
console.log(user)

//Bigint
const bigNumber = 8798464684351384315384380551354467864651678n
console.log(bigNumber)
