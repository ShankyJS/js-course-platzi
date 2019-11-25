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