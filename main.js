const container = document.getElementById('container');

// Fetch Poke Api
function fetchPokemons() {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&&offset=0`)
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

    
    console.log(pokeArr.id);

    pokeArr.slice(0,10).forEach(poke => {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';
        cardContainer.innerHTML = 
            `<div class="card">
                <img src="https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png" alt="" class="card-img">
             </div> 
             <div class="card-details">
                <p class="pokemon-id">N°${poke.id}</p>
                <h4 class="pokemon-name">${pokeName}</h4>
                <div class="pokemon-types">
                    ${poke.types.map(type => {
                        switch(type.type.name) {
                            case 'grass': 
                                return '<span class="poke-type grass">' + type.type.name + '</span>' 
                            case 'poison':
                                return '<span class="poke-type poison">' + type.type.name + '</span>'
                            case 'fire':
                                return '<span class="poke-type fire">' + type.type.name + '</span>'
                            case 'flying':
                                return '<span class="poke-type flying">' + type.type.name + '</span>'
                            case 'water':
                                return '<span class="poke-type water">' + type.type.name + '</span>'
                            case 'bug':
                                return '<span class="poke-type bug">' + type.type.name + '</span>'
                            case 'normal':
                                return '<span class="poke-type normal">' + type.type.name + '</span>'
                            case 'electric':
                                return '<span class="poke-type electric">' + type.type.name + '</span>'
                            case 'ground':
                                return '<span class="poke-type ground">' + type.type.name + '</span>'
                            case 'fairy':
                                return '<span class="poke-type fairy">' + type.type.name + '</span>'
                            case 'fighting':
                                return '<span class="poke-type fighting">' + type.type.name + '</span>'
                            case 'psychic':
                                return '<span class="poke-type psychic">' + type.type.name + '</span>'
                            case 'rock':
                                return '<span class="poke-type rock">' + type.type.name + '</span>'
                            case 'steel':
                                return '<span class="poke-type steel">' + type.type.name + '</span>'
                            case 'ice':
                                return '<span class="poke-type ice">' + type.type.name + '</span>'
                            case 'dragon':
                                return '<span class="poke-type dragon">' + type.type.name + '</span>'
                        }   
                    }).join("")}
                </div> 
             </div>`
           
        container.appendChild(cardContainer); 

    });
};

fetchPokemons();












