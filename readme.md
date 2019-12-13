# JavaScript is not a typed Language.

You don't have to specify what type of data will be stored in a variable. JavaScript automatically detects the data type based on what information you are assign to it. 

The Typed languages (like Java, C#) need to declare the variable's type and can't be changed. 

"This is both a blessing and a curse" because this flexibility can helps us to protect us from spend hours debugging something because a type error. 

## Class 2 (tips)

Here is a way to insert JavaScript code in texts, also this is the solution for the first test, show to the user his first letter. 

````
alert(`La primera letra de tu nombre es ${nombre.charAt(0)}`)
````

Other solution

````

var name = prompt ('Give me your name');

function returnsTheLastLetter(n) {
  alert(`The last letter off your name is: ` + n.charAt(n.length-1))
}

returnsTheLastLetter(name);


````

On this class we learn how to work with the most common strings on JavaScirpts, here is a useful function that allows you to concatenate substrings values into another one. 

````
var str2 = nombre.substr(1, 2);
````

This will take the second and third letter of my name. 

## Class 3

The way that JS saves the decimals numbers isn't precise, that's why we need to use the global tool ``math``.

In this class we used ``math.round(var)`` to get the short value of the floating number.

````
var total = Math.round(winePrice * 100 * 3)/ 100;
````

We can also show more decimals using the next function of JS.

```
var totalStr = total.toFixed(3);
```

## Class 4 (Functions)

The functions are reusables code snippets (in a very short way).

In JS we can send another values (unexpected values to functions) and It will keep working :D

```
var name = 'Jhan', age = 19;

function printAge(n, a) {
  console.log(`${n} has ${a} years old`);
}

printAge(prompt("Type your name"), prompt('Type your age'));

```

## Class 5 (Functions part2.)

If a variable is not defined in a local function, it is a Global Var and is accesible from every function.

If the variable is global it is accesible to all (window (on browsers)) or NodeJS enviroments on servers. 

`` window.name `` 

Let's see this example: 


````
var name = 'Jhan';

function printNameInUpperCase() {
  name = name.toUpperCase();
  console.log(name);
}

printNameInUpperCase();

````

Here, we have the problem that the function is changing a Global Variable and it's generating a side deffect because when we invoke that function it will affect another things on our enviroment.

So, how we can improve this code? 

````

var name = 'Jhan';

function printNameInUpperCase(name) {
  name = name.toUpperCase()
  console.log(n)
}

printNameInUpperCase(name);
````

We created a local variable that just exists on the local function (n), if we access to our global var = name, the value will be intact!.

N is not defined on our enviroment, because just lives on the function, however we can write the same global name on the local function but just will live on the function

## Class 6 (Objects)

An object is a collection of properties, a property is an association between a name (or key) and a value. 

It's possible to create a function that can look for a value in a object.

````
var dario = {
  name : 'Darío',
  last_name : 'Susnisky',
  age : 27
}



function printNameInUpperCase(persona) {
  var name = persona.name.toUpperCase()
  console.log(name);
}

printNameInUpperCase(jhan);
````

````Another way to do it.

````
var jhan = {
  name : 'Jhan',
  last_name : 'Silva',
  age : 19
}

var dario = {
  name : 'Darío',
  last_name : 'Susnisky',
  age : 27
}


// This is a new way to look for some objects.
````
function printNameInUpperCase({ name }) {
  console.log(name.toUpperCase());
}

printNameInUpperCase(jhan);
printNameInUpperCase(dario);
printNameInUpperCase({ name : 'Pepito'})
printNameInUpperCase({ name: 'Gomez'})
````

## Class 7 (Dividing objects)

It's possible to Destructure Propertys and use it in another functions.

The test for this class was to do a function that can returns your name and age, this was my best solution for this example.

````
function printNameAndAge(person) {
    //Hola, me llamo ____ y tengo ___ años
    var name = person.name;
    var age = person.age;
    return(console.log('Hola, me llamo ' + name + ' y tengo ' + age + ' años.'));
}

printNameAndAge(jhan);
````

But, there was another good ways to do it.

````
function printNameAndAge2(user) {
    var {name, age} = user;
return(console.log(`Hola, me llamo ${name} y tengo ${age} años. `));
}

printNameAndAge2(jhan);

````

## Class 8 (Parameters as references or values.)

JavaScript works different with the objects, in this example the values of that object is working as a reference, that why because when we invoke that function with a  ```jhan.age```  the age value doesn't changes. 

````

function birthday(age) {

  age +=1

}
````

If we want to create a new object without change the older, we can do the following.

````

function birthday(person) {
  return {
      ...person,
      age: person.age + 1
  }
}

````
With this we can create a new object with the name olderJhan  
````
var olderJhan = birthday(jhan)
````

This will return this object: ```{name: "Jhan", last_name: "Silva", age: 20}```

### The Spread Operator (...)

Is a new implementation on ES6. It creates a duplicated object, so we can modify it without changing the original "person object".

## Class 9 (Comparisions on JS)

Two strings are strictly the same when the same sequence of characters, the same length and the same characters in the operations correspond.

Example: 

````
var x = 1, y = '1'; (True)

````

Two numbers are strictly equal when they are numerically equal. NaN is not equal to anything, including NaN. Positive and negative zeros are equal to each other.

````
var x = 100, y =100;
````

Two Boolean operators are strictly equal if both are 'TRUE' or both are 'FALSE'.

Two different objects are never the same for strict or abstract comparisons (===, ==).

An expression that compares objects is only true if the operators refer to the same object.

````

var jhan = {
    name : 'Jhan'
}

var otherPerson = jhan;


````

The Null and Undefined types are strictly equal to each other and abstractly equal to each other.

````
1 == “1” --> true
1 === “1” --> false (son iguales pero uno es un número y el otro una cadena)
-1 == true --> true
1 == true --> true (tanto el -1 como el 1 se consideran equivalentes a un verdadero cuando se tratan como booleanos)
-1 === true --> false
1 === true --> false
1.0 == 1 --> true
1.0 === 1 --> true también ¡Ojo! JavaScript no distingue subtipos entre los números por lo que ambos son numéricos y por lo tanto del mismo tipo. "
````

## Class 10 (Conditions)

In this class we check how to compare elements or objects, with boolean data and numbers. 

The test of this class was to do an algorithm that print if the person is mayor age or under age. 

Here is how I solved it. 

````

function UnderAgeOverAge(person){
    if (jhan.age >= 18) {
        console.log(`${jhan.name} is over age`);
    } else {
        console.log(`${jhan.name} is under age`);
    }
}

UnderAgeOverAge(jhan);

````

## Class 11 (Return functions)

In this class I learned that is possible to create a function that can return values and can be invoked on another function, also I learn how to use the consts.

````
var jhan = {
    name: 'jhan', 
    age: 19
}

var john = {
    name: 'Juan',
    age: 13
}

const LEGAL_AGE = 18;

function isMayor(person) {
    return person.age >= LEGAL_AGE;
}

function printIfIsLegal(person) {

    if (isMayor(person)) {
        console.log(`${person.name} is legal because he is ${person.age} years old`)
    } else {
        console.log(`${person.name} is under age because he is ${person.age} years old`)
    }
}

````

## Class 12 - Arrow FUnctions

In JavaScript there is another way to write functions, with the Arrow
Functions.

1) We can assign a function to a var, that's a uncommon programming language funcionability. 


````

// This is a anonym function, because don't have name.
const isMayor = function(person) {
    return person.age >= LEGAL_AGE;
}

````

2) We can write the same code with an arrow function. 

````
//JavaScript let to delete the return if the function just returns one value.
//Here just takes the parameter age of the object. Destructure

const isMayor = ({ age }) => age >= LEGAL_AGE;

````

Let access function, returns if a person can see content

````
function letAccess(person) {
    if(!isMayor(person)) {
        console.log('Acceso denegado');
    } else {
        console.log('Acceso aceptado');
    }
}

````


## Class 13 For Structure.

Repetitive Structures let users to do the same operation a lot of times.

Sport years test.

````

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



````

## Class 14: While structure.

Today I learned how to do a While cycle on a little example about weight reduction, using a const number that is a "goal" given by our nutritionist :rofl:

````
while (jhan.weight > GOAL) {
    if (eatsALot()) {
        increaseWeight(jhan);
    }

    if (doExercise()) {
        decreaseWeight(jhan);
    }

    dias += 1;
}

````

## Class 15: Do-while structure.

This data structure helps to iterate a process while the condition it's true. 

But has to do that action almost one time.

````
var contador = 0; 

const pusoHuevosLaTunca = () => Math.random() < 0.25;

do { 
    contador++
} while (!pusoHuevosLaTunca())

if (contador = 1) {
    console.log(`Fui a ver si puso huevos la tunca ${contador} vez`)
} else {
    console.log(`Fui a ver si puso huevos la tunca ${contador} veces`)
}
````

## Class 16: Switch structure.

This lets what code to execute depending a lot of conditions.

The basic structure is this; 

````
var symbol = prompt('What is your zodiacal symbol?');

case 'aries':
    console.log('Yo tambien soy aries');
break;
    
````

You can follow up writing a lot of cases but you can manage the exceptions with the default case;

````
default: 
    console.log('That doesn't exists');
break;
````

## Class 17 (Introduction to Arrays)

In this lesson I learned how to work with Arrays and collections on JS.

For example if we have at least 2 objects.

````
var eze = {
    name: 'eze',
    last_name: 'romero',
    height: 1.25
}

var juan = {
    name: 'Juan',
    last_name: 'Silva', 
    height: 1.80
}

````

We can create an array called persons and store the objects in that var

````
var persons = [eze, juan];
````

So we can acces to that objects with this: ``persons[0]`` (this will call Eze).

And we can access to his attributes too. ``persons[0].height``

We can also iterate an array for printing all the objects inside.

````
for (let i = 0; i < persons.length; i++) {
    var person = persons[i];
    console.log(`${person.name} lenghts ${person.height} mts`)
}
````

## Class 18 (Filter arrays)

It's possible to filter arrays attributes without do for cycles, like in this case when I filtered the tall and short people from a group of persons.

````

var eze = { 
    name: 'Eze'
    last_name: 'Romero',
    height: 150
}

var Jhan = { 
    name: 'Jhan'
    last_name: 'Silva',
    height: 150
}

var persons = [eze, Jhan];
````

Now we can declare an arrow function that returns the tall and short persons.

````
const isTall = person => height >= 1.8;

const isShort = person => height < 1.8;
````

This is the part when we filter the arrays with the Array filter function, his structure is: 

```var tallPersons = persons.filter(FUNCTION_THAT_RETURNS_THE_FILTERED_VALUE);```

These are the filters for our functions:

````

var tallPersons = persons.filter(isTall);

var shortPersons = persons.filter(isShort);

````
````
console.log(tallPersons + shortPersons);
````

## Transform an Array

In this class I learned how to use map to return new arrays from an actual element.

Map is a method defined on array.prototype, you can call it from every array and accepts a callback as first argument.

When you call an array, this runs the callback in each element inside it and returns a new array with the values that the callback return.

````
var tasks = [
    
    {
        'name'      : 'Write envato Tuts',
        'duration'  :  120
    },
    
    {
        'name'      : 'Work out',
        'duration'  :  60
    },

    {
        'name'      : 'Procastinate on Duolingo',
        'duration'  :  240
    }

];

console.log(tasks);

// If we want to create a new array with the name of every single task
// We can use the For cicle to do it. 

var task_names = [];

for (var i=0; i < tasks.length; i += 1) {
    task_names.push(tasks[i].name);
}

// We can do it with For Each that works as a for but it checks every
// iteration with the index agains the array lenght.

var task_names_4each = [];

tasks.forEach(function (task){
    task_names_4each.push(task.name);
});

// And we can do it using map.

var task_names_map = tasks.map(function (task, index, array){
    return task.name;
});

// or 

var task_names_arrow_map = tasks.map((task) => task.name);



````