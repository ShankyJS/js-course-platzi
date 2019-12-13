var jhan = {
    name: 'Jhan',
    last_name: 'Silva',
    height: 1.72,
    books_quantity: 90
}

var juan = {
    name: 'juan',
    last_name: 'martinez',
    height: 1.80,
    books_quantity: 90
}

var jorge = {
    name: 'jorge',
    last_name: 'lopez',
    height: 1.79,
    books_quantity: 90
}

var eze = {
    name: 'eze',
    last_name: 'romero',
    height: 1.25,
    books_quantity: 90
}

var persons = [jhan, juan, jorge, eze];


//We are going to sum all the books quantity.

// var acum = 0;

// for (var i=0; i < persons.length; i++) {
//     acum = acum + persons[i].books_quantity;
// }

// We need 2 things, a function and the initial value of the acumulator

const reducer = (acum, { books_quantity }) =>  acum + person.books_quantity;


var totalBooks = persons.reduce(reducer, 0)

console.log(`All have ${totalBooks} books`);