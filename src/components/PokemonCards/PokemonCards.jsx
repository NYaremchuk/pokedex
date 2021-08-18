import React, { useState, useEffect } from 'react';
import { getPokemonInfo } from '../../api/api';
import './PokemonCards.css'

export const PokemonCards = ({ url, name }) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    getPokemonInfo(url)
      .then(pokemon => {
        setPokemon(pokemon)
        // console.log(pokemon);
      })
      console.log('load pokemon by url');
  },[]);

  const { types, sprites } = pokemon;
  if (!types) {
    return(
      <div>
        <span class="visually-hidden">Loading...</span>
      </div>
    )
  }

  const divStyle = {
    width: '14rem',
  };

  return(
    <>
      {!pokemon
      ? <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      : <div className="card" style={divStyle}>
          <img
            src={sprites.front_default}
            className="card-img-top"
            alt={`pokemon ${name}`}
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            {types.map(ability => (
              <p className="btn btn-primary">{ability.type.name}</p>
            ))}
            <p className="card-text">content</p>
          </div>
        </div>}
    </>
  )
}