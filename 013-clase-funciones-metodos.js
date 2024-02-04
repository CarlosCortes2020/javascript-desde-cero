//Capacidades funciones y  metodos

//1. Pasar funciones como argumentos => callback

function a () {}
function b (a) {}
b(a)


//Retornar funciones

function a () {
    function b () {}
    return b
}


//Asignar funciones a variables => Espresion de funcion

const a = function () {}


//Tener propiedades y metodos

function a () {}
const obj = {}
a.call(obj)


//Anidar funciones

function a () {
    function b () {

    }
 }


 //Es posible almacenar funciones en objetos?

 const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage () {
        console.log('Fire')
    }
 }