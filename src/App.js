import './App.css';
import React from 'react';
import { getChunkOfPokemon } from './api/api';
import { PokemonList } from './components/PokemonList/';

export class App extends React.Component {
  state = {
    pokemons: [],
    count: 24,
  }

  componentDidMount() {
    getChunkOfPokemon() 
      .then(pokemons => {
        this.setState({ pokemons });
      })
      console.log('pokemons loaded');
  }

  

  loadMore = () => {
    getChunkOfPokemon(this.state.count)
      .then(pokemons => {
        this.setState({
          pokemons: pokemons,
          count: this.state.count + 12,
        })
      })

      // this.setState({
      //   count: count + count,
      // })
  }

  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <PokemonList
          pokemons={this.state.pokemons}
          loadMore={this.loadMore}
        />
      </div>
    );
  }
}

export default App;
