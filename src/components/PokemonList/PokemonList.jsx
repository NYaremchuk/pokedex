import React from 'react';
import { PokemonCards } from '../PokemonCards/PokemonCards';

export const PokemonList = ({ pokemons, loadMore }) => {

  return(
    <>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.url}>
            <PokemonCards url={pokemon.url} name={pokemon.name} />
          </li>
        ))}
      </ul>
      <button
        type='button'
        name='loadMore'
        onClick={loadMore}
      >
        Load More
      </button>
    </>
  )
}