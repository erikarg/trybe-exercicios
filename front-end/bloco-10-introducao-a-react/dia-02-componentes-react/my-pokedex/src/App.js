import './App.css';
import React from 'react';
import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='father'>
        <Pokedex />
        <Pokemon />
      </div>
    );
  }
}

export default App;
