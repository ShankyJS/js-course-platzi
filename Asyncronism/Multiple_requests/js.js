const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true };


function getCharacter(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    
    $
        .get(url, opts, callback)
        .fail(() => {
        console.log(`An error was encountered, We can't get your character id.`);
    });
}


//Callback Hell
getCharacter(1, function (character) {
    console.log(`Hello, I'm ${character.name}`);

    getCharacter(2, function (character) {
        console.log(`Hello, I'm ${character.name}`);

        getCharacter(3, function (character) {
            console.log(`Hello, I'm ${character.name}`);

            getCharacter(4, function (character) {
                console.log(`Hello, I'm ${character.name}`);

                getCharacter(5, function(character) {
                    console.log(`Hello, I'm ${character.name}`);

                    getCharacter(6, function(character) {
                        console.log(`Hello, I'm ${character.name}`);

                        getCharacter(7, function(character) {
                            console.log(`Hello, I'm ${character.name}`);
                        });
                        
                    });
                });
            });
        });
    });
});


// getCharacter(3);

// var id = prompt `Hello, please type an ID`;
 
// for (let i = 1; i < 3; i++ ) { 
//     getCharacter(i);
// }
