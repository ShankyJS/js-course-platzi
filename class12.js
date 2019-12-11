var jhan = {
    name: 'jhan', 
    age: 20
}

var john = {
    name: 'Juan',
    age: 13
}

const LEGAL_AGE = 18;


//JavaScript let to delete the return if the function just returns one value.
//Here just takes the parameter age of the object. Destructure
const isMayor = ({ age }) => age >= LEGAL_AGE;

// This is a anonym function, because don't have name.

// const isMayor = function (person) {
//     return person.age >= LEGAL_AGE;
// }


function printIfIsLegal(person) {

    if (isMayor(person)) {
        console.log(`${person.name} is legal because he is ${person.age} years old`)
    } else {
        console.log(`${person.name} is under age because he is ${person.age} years old`)
    }
}

function letAccess(person) {
    if(!isMayor(person)) {
        console.log('Acceso denegado');
    } else {
        console.log('Acceso aceptado');
    }
}

// Test

const isMinorAge = ({ age }) => !isMayor(age);
