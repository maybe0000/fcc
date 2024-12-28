const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const pokemonContainer = document.getElementById('pokemon-container');
const imageContainer = document.getElementById('image-container');
const pokemonImg = document.getElementById('pokemon-img');
const statsContainer = document.getElementById('stats-container');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');

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
}    

const updateDisplay = (pokemon) => {
    pokemonImg.innerHTML = '';
    pokemonName.textContent = pokemon.name.toUpperCase();
    pokemonId.textContent = '#'+pokemon.id;
    const img = document.createElement('img');
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png`;
    img.alt = `${pokemon.name.toLowerCase()}-img`; 
    img.classList.add('createdImg');
    pokemonImg.appendChild(img);
};

const displayPokemon = () => {
    if (pokemonData) {
        let userInput = searchInput.value;
        let userInputCheck = checkInput(userInput);
        let pokemon = '';
        switch (userInputCheck) {
            case 'invalid':
                alert("Pokémon not found");
                clearScreen();
                break;
            case 'id':
                pokemon = pokemonData.find(i => i.id === parseInt(userInput));
                updateDisplay(pokemon);
                break;
            case 'name':
                pokemon = pokemonData.find(i => i.name.toUpperCase() === userInput.toUpperCase());
                updateDisplay(pokemon);
                break;         
        }
    }
};

searchButton.addEventListener('click', displayPokemon);
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        displayPokemon();
    }
});