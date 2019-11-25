# JavaScript is not a typed Language.

You don't have to specify what type of data will be stored in a variable. JavaScript automatically detects the data type based on what information you are assign to it. 

The Typed languages (like Java, C#) need to declare the variable's type and can't be changed. 

"This is both a blessing and a curse" because this flexibility can helps us to protect us from spend hours debugging something because a type error. 

## Class 2 (tips)

Here is a way to insert JavaScript code in texts, also this is the solution for the first test, show to the user his first letter. 

````
alert(`La primera letra de tu nombre es ${nombre.charAt(0)}`)
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