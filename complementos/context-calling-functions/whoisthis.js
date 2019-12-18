/*
El contexto (o alcance) de una función es por lo general, window. Así que en ciertos casos, cuando intentamos referirnos a this en alguna parte del código, es posible que tengamos un comportamiento inesperado, porque el contexto quizás no sea el que esperamos.

Existen al menos tres maneras de cambiar el contexto de una función.

Usando el método .bind, enviamos la referencia a la función sin ejecutarla, pasando el contexto como parámetro.
Usando el método .call, ejecutamos inmediatamente la función con el contexto indicado
Usando el método .apply, es similar a .call pero los parámetros adicionales se pasan como un arreglo de valores
*/


const shanky = {
    name: 'Jhan', 
    last_name: 'Silva'
}

const sasha = {
    name: 'Sasha', 
    last_name: 'Lifszyc'
}

// Por defecto pondra hola

function waves(wave = 'Hola') {
    console.log(`${wave}, my name is ${this.name}`);
}

// setTimeout(waves.bind(shanky, 'Hola che'), 1000)

// const waveShanky = waves.bind(shanky, 'Hola cachimba');
// const waveSasha = waves.bind(sasha, 'Te sampo el huevo');

//Bind can change the this of a function.

// waves.call(shanky, 'Hola che');

// waves.apply(shanky, ['Hello manig'])