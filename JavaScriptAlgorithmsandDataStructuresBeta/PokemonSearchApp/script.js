const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const pokemonContainer = document.getElementById('pokemon-container');
const imageContainer = document.getElementById('image-container');
const statsContainer = document.getElementById('stats-container');

let pokemonData = [];

fetch('https://pokeapi-proxy.freecodecamp.rocks/api/pokemon')
    .then((res) => res.json())
    .then((data) => {
        pokemonData = data.results;
    })
    .catch((err) => {
        pokemonContainer.innerHTML = '<p style="padding: 10px;">There was an error loading the page.</p>';
    });

const checkInput = (input) => {
    if (input) {
        const regexString = /^[A-Za-z]+$/g;
        const regexDigits = /^\d+$/g;
        return regexString.test(input) ? 'name' : regexDigits.test(input) ? 'id' : 'invalid';
    }
    else {
        clearScreen();
    }
};

const clearScreen = () => {
    searchInput.value = '';
    imageContainer.innerHTML = '';
};
const displayPokemon = () => {
    if (pokemonData) {
        let userInput = checkInput(searchInput.value);
        switch (userInput) {
            case 'invalid':
                alert("Pokémon not found");
                clearScreen();
                break;
            case 'id':
                imageContainer.innerHTML = 'ID ' + userInput;
                break;
            case 'name':
                imageContainer.innerHTML = 'NAME:' + userInput;
                break;         
        }
    }
};

searchButton.addEventListener('click', displayPokemon);
searchButton.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        displayPokemon();
    }
})