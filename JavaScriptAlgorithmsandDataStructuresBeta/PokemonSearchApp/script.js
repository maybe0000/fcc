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
let pokemonDetails = {};

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

const fetchPokemonData = (pokemon) => {

    return fetch(pokemon.url)
        .then((res) => res.json())
        .then((details) => {
                pokemonDetails = details;
                updateDisplay(pokemon, pokemonDetails);
        })
        .catch((err) => {
            pokemonContainer.innerHTML = '<p style="padding: 10px;">There was an error loading the Pokémon data.</p>';
        });

};

const clearScreen = () => {
    searchInput.value = '';
    imageContainer.innerHTML = '';
    weight.textContent = '';
    height.textContent = '';
    hp.textContent ='';
    attack.textContent ='';
    defense.textContent ='';
    specialAttack.textContent ='';
    specialDefense.textContent = '';
    speed.textContent ='';
    types.innerHTML = '';
}    

const updateDisplay = (pokemon, pokemonDetails) => {
    pokemonImg.innerHTML = '';
    pokemonName.textContent = pokemon.name.toUpperCase();
    pokemonId.textContent = '#'+pokemon.id;
    weight.textContent = 'Weight: ' + pokemonDetails.weight;
    height.textContent = 'Height: ' + pokemonDetails.height;
    hp.textContent = pokemonDetails.stats.find(i => i.stat.name === 'hp').base_stat;
    attack.textContent = pokemonDetails.stats.find(i => i.stat.name === 'attack').base_stat;
    defense.textContent = pokemonDetails.stats.find(i => i.stat.name === 'defense').base_stat;
    specialAttack.textContent = pokemonDetails.stats.find(i => i.stat.name === 'special-attack').base_stat;
    specialDefense.textContent = pokemonDetails.stats.find(i => i.stat.name === 'special-defense').base_stat;
    speed.textContent = pokemonDetails.stats.find(i => i.stat.name === 'speed').base_stat;
    const img = document.createElement('img');
    img.src = pokemonDetails.sprites["front_default"];
    img.alt = `${pokemon.name.toLowerCase()}-img`; 
    img.classList.add('createdImg');
    img.id = 'sprite';
    pokemonImg.appendChild(img);
    types.innerHTML = '';
    pokemonDetails.types.forEach((el,i) => {
        types.innerHTML += `<p class='pokemon-type ${el.type.name.toLowerCase()}'>${el.type.name.toUpperCase()}</p>`;
    });
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
                if(pokemon) {
                    fetchPokemonData(pokemon);
                } else {
                    alert("Pokémon not found");
                    clearScreen();
                }
                break; 
            case 'name':
                // test
                pokemon = pokemonData.find(i => i.name.toUpperCase() === userInput.toUpperCase());
                if(pokemon) {
                    fetchPokemonData(pokemon);
                } else {
                    alert("Pokémon not found");
                    clearScreen();
                }
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