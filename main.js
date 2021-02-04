const container = document.getElementById('container');

// Fetch Poke Api
function fetchPokemons() {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
        .then(res => res.json())
        .then(function(allpokemon) {
            allpokemon.results.forEach(pokemon => {
                fetchPokemonData(pokemon);
            });
        });
}

// Fetch Poke Data
function fetchPokemonData(pokemon) {
    let url = pokemon.url 

    fetch(url)
        .then(res => res.json())

        .then(function(pokeData) {
            showPokeDom(pokeData);
        });
}

// Show Pokemon in the DOM
function showPokeDom(pokeData) {
    
    let pokeArr = new Array(pokeData);
    let pokeName = pokeData.name[0].toUpperCase() + pokeData.name.slice(1);

    pokeArr.forEach(poke => {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';
        cardContainer.innerHTML = 
            `<div class="card">
                <img src="https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png" alt="" class="card-img">
             </div> 
             <div class="card-details">
                <p class="pokemon-id">N°${poke.id}</p>
                <h4 class="pokemon-name">${pokeName}</h4> 
             </div>`
           
        container.appendChild(cardContainer); 
    });

};

fetchPokemons();












