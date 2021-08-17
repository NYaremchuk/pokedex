import React, { useState, useEffect } from 'react';
import { getPokemonInfo } from '../../api/api';

export const PokemonList = ({ pokemons, loadMore }) => {
  const [pokemon, setPokemon] = useState({});
  const [pokemon2, setPokemon2] = useState({});

  // useEffect(() => {
  //   pokemons.map((pokemon) => (
  //       getPokemonInfo(pokemon.url)
  //       .then(pokemon => {
  //         setPokemon(pokemon)
  //         console.log(pokemon)
  //       })
  //   ))
  // }, [pokemon2])

  return(
    <>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.url}>
            <p>{pokemon.name}</p>
            <p>{pokemon.url}</p>
          </li>
        ))}
        <li>
          <p>{pokemon.name}</p>
        </li>
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