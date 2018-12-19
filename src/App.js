import React, { Component } from 'react';
import './App.css';
import Board from './board.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Guessing Game</h1>
        <Board/>
      </div>
    );
  }
}

export default App;
