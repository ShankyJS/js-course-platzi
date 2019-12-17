const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true };

function getCharacter(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $.get(url, opts, function (data) {
        resolve(data)
        })
        .fail(() => reject(id));
    })
}

const onError = (id) => {
    console.log(`Sucedio un erorr al obtener ${id}`)
};  

getCharacter(1)
    .then(character => {
        console.log(`The character 1 is: ${character.name}`);
        return getCharacter(2);
    })
    .then(character2 => {
        console.log(`The character 2 is: ${character2.name}`);
        return getCharacter(3);
    })
    .then(character3 => {
        console.log(`The character 3 is: ${character3.name}`);
        return getCharacter(4);
    })
    .then(character4 => {
        console.log(`The character 4 is: ${character4.name}`);
        return getCharacter(5);
    })
    .then(character5 => {
        console.log(`The character 5 is: ${character5.name}`);
        return getCharacter(6);
    })
    .then(character6 => {
        console.log(`The character 6 is ${character6.name}`);
        return getCharacter(7);
    })
    .then(character7 => {
        console.log(`The character 7 is ${character7.name}`);
        return getCharacter(7);
    })
    .catch(onError);
