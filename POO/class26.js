class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(fn) {
        var nombre = this.nombre;
        var apellido = this.apellido;
        console.log(`Hola, me llamo ${nombre} ${apellido}`);
        if (fn) {
            fn(nombre, apellido, null);
        }
    }

    soyAlto() {
        return this.altura > 1.8;
    }
}

//Herencia a clase Developer (extension)
class Developer extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }

    saludar (fn) {
        
        var { nombre, apellido } = this;
        // var nombre = this.nombre;
        // var apellido = this.apellido;
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy NodeJS Dev`)
        if (fn) {
            fn(nombre, apellido, true);
        }
    }
}

var Jhan = new Persona('Jhan', 'Silva', 1.80);
var Erick = new Persona('Erick', 'Rojas', 1.80);
var John = new Developer('John', 'Maverick', 1.80);

function responderSaludo (nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`);
    if (esDev) {
        console.log(`Ah mira, no sabia que eras desarrollador`);
    }
}

Jhan.saludar(responderSaludo);
Erick.saludar(responderSaludo);
John.saludar(responderSaludo);