


// Fetch Poke Api
function fetchPokemons() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
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
            console.log(pokeData);
        });
}



fetchPokemons();

fetchPokemonData();
