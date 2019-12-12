var jhan = {
    name: 'Jhan',
    last_name: 'Silva',
    height: 1.72
}

var juan = {
    name: 'juan',
    last_name: 'martinez',
    height: 1.72
}

var jorge = {
    name: 'jorge',
    last_name: 'lopez',
    height: 1.80
}

var eze = {
    name: 'eze',
    last_name: 'romero',
    height: 1.25
}

var persons = [jhan, juan, jorge, eze];

for (let i = 0; i < persons.length; i++) {
    var person = persons[i];
    console.log(`${person.name} lenghts ${person.height} mts`)
}