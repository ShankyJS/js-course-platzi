var jhan = {
    name: 'Jhan',
    last_name: 'Silva',
    age: 19
}

var carlos = {
    name: 'Carlos',
    last_name: 'Martínez',
    age: 19
}

function printNameOnUpperCase(person) {
    // var name = person.name
    var { name } = person;
    console.log(name.toUpperCase()); 
}

printNameOnUpperCase(jhan);


function printNameAndAge(person) {
    //Hola, me llamo ____ y tengo ___ años
    var name = person.name;
    var age = person.age;
    return(console.log('Hola, me llamo ' + name + ' y tengo ' + age + ' años.'));
}

printNameAndAge(jhan);


function printNameAndAge2(user) {
    var {name, age} = user;
return(console.log(`Hola, me llamo ${name} y tengo ${age} años. `));
}

printNameAndAge2(jhan);


function birthday(person) {
  return {
      ...person,
      age: person.age + 1
  }
}

