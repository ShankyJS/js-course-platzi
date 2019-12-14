//Constructor, class

function Person(name, lastname, height) {
    this.name = name;
    this.lastname = lastname;
    this.height = height;
}

// Functions of the prototype.

Person.prototype.wave = function () {
    console.log(`Hi, my name is ${this.name} ${this.lastname}`)
}

// If a function just do a return, you can remove the curly brackets.

Person.prototype.isTall = function () {
    return this.height >= 1.80;
}
    

// The word new followed by the prototype creates an objec and executes the
// constructor.

var jhan = new Person('Jhan', 'Silva', 1.70);
var eze = new Person('Ezequiel', 'Romero', 1.80);
var juanga = new Person('Juan', 'Gabriel', 1.50);

