const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id'
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const opts = { crossDomain: true };

const onPeopleResponse = function (character) {
    console.log(`Hello, I'm ${character.name}`);
}

$.get(lukeUrl, opts, onPeopleResponse);

function doHomework(subject) {
    alert(`Starting my ${subject} homework.`);
}

function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
}

function alertFinished(){
    alert('Finished my homework');
}


doHomework('math', alertFinished);


