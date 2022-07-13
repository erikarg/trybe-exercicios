import React from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const showPokemons = pokemons.map((each) => (
      <Pokemon 
      name={ each.name }
      type={ each.type }
      weight={ each.averageWeight.value } 
      unit={ each.averageWeight.measurementUnit }
      image={ each.image }
      key={ each.id }
      />
    ));
    return (
      <div className='pokedex'>
      <img src={require('../pokedex.png')} alt='Pokedex logo' className='logo' />
      { showPokemons }
      </div>
    )
  }
}

export default Pokedex