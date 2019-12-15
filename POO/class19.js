var jhan = {
    name: 'Jhan',
    last_name: 'Silva',
    height: 1.72
}

var juan = {
    name: 'juan',
    last_name: 'martinez',
    height: 1.80
}

var jorge = {
    name: 'jorge',
    last_name: 'lopez',
    height: 1.79
}

var eze = {
    name: 'eze',
    last_name: 'romero',
    height: 1.25
}

var persons = [jhan, juan, jorge, eze];

const passHeightCms = person => ({
    ...person,
    height: person.height * 100
})

var personsCms = persons.map(passHeightCms);


const passHeightMM = person => ({
    ...person, 
    height: person.height * 1000
})

var personsMM = persons.map(passHeightMM);

console.log(personsCms)
console.log(personsMM);



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