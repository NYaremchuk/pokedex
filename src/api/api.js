const BASE_URL = ' https://pokeapi.co/';
const pokemon = 'api/v2/pokemon/';
const limit = '?limit='

export function getChunkOfPokemon(count = 12) {
  return fetch(`${BASE_URL}${pokemon}${limit}${count}`)
    .then(response => response.json())
    .then(serverResponse => serverResponse.results || serverResponse)
}

export function getPokemonInfo(pokemonUrl) {
  return fetch(pokemonUrl)
    .then(response => response.json())
}
