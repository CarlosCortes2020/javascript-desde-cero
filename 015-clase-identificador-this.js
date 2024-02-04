//Enlace implicito

const house = {
    dogName: 'Fido',
    dogGreeting: function () {
        console.log(`Hi, I am ${this.dogName}`)
    }
}


house.dogGreeting()


//Enlace explicito
function dogGreeting () {
    console.log(`Hi, este es el ${this.dogName}`)
}

const catHouse = {
    dogName: 'Michi',
}

dogGreeting.call(catHouse)