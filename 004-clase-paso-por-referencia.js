//Tipo de dato complejo - Paso por referencia

let pelotas = {
    football: "⚽"
}
let balones = pelotas
console.log(pelotas)

balones.football = "🏉"
console.log(pelotas)