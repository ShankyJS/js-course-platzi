var jhan = {
    name: 'Jhan',
    last_name: 'Silva',
    age: 19,
    weight: 75
}
// Operators consts

const VARIABLE_WEIGHT = 0.3; 
const GOAL = jhan.weight - 3;

// Arrow functions that returns person.weight + variable weight

const increaseWeight = person => person.weight += VARIABLE_WEIGHT;
const decreaseWeight = person => person.weight -= VARIABLE_WEIGHT;

// Arrow functions that justs returns a Math.random() number
const eatsALot = () => Math.random() < 0.3
const doExercise = () => Math.random() < 0.4

var dias = 0;


while (jhan.weight > GOAL) {
    if (eatsALot()) {
        increaseWeight(jhan);
    }

    if (doExercise()) {
        decreaseWeight(jhan);
    }

    dias += 1;
}


console.log(`Pasaron ${dias} dias hasta que ${jhan.name} adelgazo 3kg`);
