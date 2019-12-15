var age = 19;

// age = age + 1;

age += 1;

var weight = 75;

// weight = weight - 2;

weight -= 2;

var sandwich = 1; 

// weight = weight + sandwich;

weight += sandwich;

var playFootball = 3;

// weight = weight - playFootball;

weight -= playFootball;

var winePrice = 200.3;

// var total = winePrice * 3; (total has know a value of 600.900000001, this is why JS is bad with decimals)

var total = Math.round(winePrice * 100 * 3)/ 100;

var totalStr = total.toFixed(3);

var total2 = parseFloat(totalStr);

var pizza = 8;

var person = 2;

var slicesQuantityPerPerson = pizza / person;