var jhan = {
    name: 'Jhan',
    last_name: 'Silva',
    age: 19,
    weight: 75
}

console.log(`In the begin of the year ${jhan.name} weights ${jhan.weight} kg`);

const VARIABLE_WEIGHT = 0.200;
const YEAR_DAYS = 365;

// Arrow function for increaseWeight 
//Magic number, what is this??
const increaseWeight = person => person.weight += VARIABLE_WEIGHT;

const decreaseWeight = person => person.weight -= VARIABLE_WEIGHT;




// For model
//for (Initial, condition, increment) {
// Here we are going to place the code that we want to iterate.
//}



for (var i = 1; i <= YEAR_DAYS; i++) {

    // random number between 0 and 1 (0.0102031301301)
    var random = Math.random();

    if (random < 0.25) {

        increaseWeight(jhan)

    } else if (random < 0.50) {

        decreaseWeight(jhan)
    }
}



console.log(`In the end of the year ${jhan.name} weights ${jhan.weight.toFixed(2)} kg`);






// function increaseWeight (person) {
//     return person.weight += 200;
// }