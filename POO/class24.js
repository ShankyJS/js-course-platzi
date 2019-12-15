function inheritOf(PrototypeSon, PrototypeDad){
    var fn = function () {}
    fn.prototype = PrototypeDad.prototype;
    PrototypeSon.prototype = new fn;
    PrototypeSon.prototype.constructor = PrototypeSon;
}


function Person(name, lastname, height){
    this.name = name;
    this.lastname = lastname;
    this.height = height;
}

var Jhan = new Person('Jhan', 'Silva', 1.75)



Person.prototype.wave = function () {
    console.log(`Helo, my name is ${this.name} ${this.lastname}`);
}

Person.prototype.isTall = function () {
    return this.height > 1.8;
}

function Developer(name, lastname) {
    this.name = name;
    this.lastname = lastname;
}

inheritOf(Developer, Person);

Developer.prototype.wave = function () {
    console.log(`Hello, my name is ${this.name} ${this.lastname} and I'm a NodeJS developer`)
}
