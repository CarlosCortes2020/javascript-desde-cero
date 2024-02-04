//Social Media Profile

//1. User information
const userName = 'codingAdventurer'
const fullName = 'Jhon Doe'
const age = 25
const isStudent = true

//2. Address (Objeto con diferentes propiedades)
const address = {
    street: '123 Main Street',
    city: 'Techville',
    state: 'Codingland',
    zipCode: 1234123
}

//3. Hobbies
const hobbies = ['Coding', 'Reading','Gaming']

//4. Personal description (texto con template literals)
const personalizedBio = `Hi , aquitoy, yo soy ${fullName}.
tengo ${age} años de edad.
Vivo en ${address.city}.
Me gusta ${hobbies.join(', ')}.
Sigueme para mayores detalles de codigo mal hecho!`

//5. Print the user profile and bio
console.log(personalizedBio)

