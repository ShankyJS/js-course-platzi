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
//Se ejecutara cuando la promesa se resuelva.
    .then((character)=> {
        console.log(`The character 1 is: ${character.name}`);
    })
    .catch(onError);
