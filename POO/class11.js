var jhan = {
    name: 'jhan', 
    age: 19
}

var john = {
    name: 'Juan',
    age: 13
}

const LEGAL_AGE = 18;

function isMayor(person) {
    return person.age >= LEGAL_AGE;
}

function printIfIsLegal(person) {

    if (isMayor(person)) {
        console.log(`${person.name} is legal because he is ${person.age} years old`)
    } else {
        console.log(`${person.name} is under age because he is ${person.age} years old`)
    }
}



