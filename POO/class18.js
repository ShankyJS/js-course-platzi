var jhan = {
    name: 'Jhan',
    last_name: 'Silva',
    height: 1.72
}

var juan = {
    name: 'juan',
    last_name: 'martinez',
    height: 1.80
}

var jorge = {
    name: 'jorge',
    last_name: 'lopez',
    height: 1.79
}

var eze = {
    name: 'eze',
    last_name: 'romero',
    height: 1.25
}

var persons = [jhan, juan, jorge, eze];

const isTall = ({ height }) => height >= 1.8;

var tallPersons = persons.filter(isTall);

const isShort = person => person.height < 1.8;

var shortPersons = persons.filter(isShort);

console.log(shortPersons);

// const isTall = (person) => {
//     return person.height >= 1.8;
// }
// var tallPersons = persons.filter(function (person) {
//     return person.height >= 1.8;
// })

// var tallPersons = persons.filter(condition)



console.log(tallPersons)