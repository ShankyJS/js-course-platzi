var jhan = { 
    name: 'Jhan',
    last_name: 'Silva',
    age: 19,
    engineer: true,
    chef: false,
    singer: false,
    dj: false,
    guitarist: true,
    drone: true
}

function printCareers(person) {
    console.log(`${person.name} is: `);

    if (person.engineer === true) {
        console.log(`Engineer`);    
    }
    
    if (person.chef === true) {
        console.log(`Chef`);    
    }
    
    if (person.singer === true) {
        console.log(`Singer`);    
    }

    if (person.dj === true) {
        console.log(`Dj`);    
    }

    if (person.guitarist === true) {
        console.log(`Guitarist`);    
    }

    if (person.drone === true) {
        console.log(`Drone`);    
    }

}

printCareers(jhan)

var jhan = { 
    name: 'Jhan',
    age: 19
}

function UnderAgeOverAge(person){
    if (jhan.age >= 18) {
        console.log(`${jhan.name} is over age`);
    } else {
        console.log(`${jhan.name} is under age`);
    }
}

UnderAgeOverAge(jhan);