//Constructor, class

function Person(name, lastname, height) {
    this.name = name;
    this.lastname = lastname;
    this.height = height;
}

// The word new followed by the prototype creates an objec and executes the
// constructor.

var jhan = new Person('Jhan', 'Silva', 1.70);
var eze = new Person('Ezequiel', 'Romero', 1.80);


// Functions of the prototype.

Person.prototype.wave = function () {
    console.log(`Hi, my name is ${this.name} ${this.lastname}`)
}

jhan.wave();

Person.prototype.istall = function () {
    if (this.height >= 1.80) {
        console.log(`Soy alto perros`);
    } else {
        console.log(`Soy enano perros`);
    }
}

