const container = document.getElementById('container');

// Fetch Poke Api
function fetchPokemons() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=8')
        .then(res => res.json())
        .then(function(allpokemon) {
            allpokemon.results.forEach(pokemon => {
                fetchPokemonData(pokemon);
                //console.log(pokemon);
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
            showPokeImg(pokeData);
        });
}

// Show Pokemon in the DOM
function showPokeDom(pokeData) {
    
    let pokeArr = new Array(pokeData);

    pokeArr.forEach(poke => {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';
        cardContainer.innerHTML = 
            `<div class="card">
                <img src="https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png" alt="" class="card-img">
             </div> 
             <div class="card-details">
                <p class="pokemon-id">N°${poke.id}</p>
                <h4 class="pokemon-name">${poke.name}</h4> 
             </div>`
           
        container.appendChild(cardContainer); 
    });
};
        
    
fetchPokemons();




