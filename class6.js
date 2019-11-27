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

function printNameInUpperCase({ name }) {
  console.log(name.toUpperCase());
}

printNameInUpperCase(jhan);
printNameInUpperCase(dario);
printNameInUpperCase({ name : 'Pepito'})
printNameInUpperCase({ name: 'Gomez'})