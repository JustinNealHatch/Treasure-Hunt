import React, { Component } from 'react';
import './App.css';
import Square from './square'


class Board extends Component {
  constructor(props){
    super(props)
    this.state = {spaces: [0,0,0,0,0,0,0,0,0],
    output: '?',
    turns: 9,
  }
  const windex = Math.floor((Math.random() * 9) +1)
  console.log('windex:'+windex);
  }
  handleChange(e){
       let { turns } = this.state
       let currentTurns = this.state.turns--
       // if(currentTurns === 0){
       //
       // }
       let numb = e.target.id
       let {output} = this.state
       this.setState({output: output})
       console.log("numb:" +numb);
       console.log(turns: 'currentTurns');
  }

  // checkWinner(e){
  //   let windex = Math.floor((Math.random() * 9) +1);
  //   return windex === e.target.id ? alert("Hello") : ""
  // }
  render() {


    return (
      <div className="board">
        <div className="grid-item" id='1' onClick={this.handleChange.bind(this)}>{this.state.output}</div>
        <div className="grid-item" id='2' onClick={this.handleChange.bind(this)}>{this.state.output}</div>
        <div className="grid-item" id='3' onClick={this.handleChange.bind(this)}>{this.state.output}</div>
        <div className="grid-item" id='4' onClick={this.handleChange.bind(this)}>{this.state.output}</div>
        <div className="grid-item" id='5' onClick={this.handleChange.bind(this)}>{this.state.output}</div>
        <div className="grid-item" id='6' onClick={this.handleChange.bind(this)}>{this.state.output}</div>
        <div className="grid-item" id='7' onClick={this.handleChange.bind(this)}>{this.state.output}</div>
        <div className="grid-item" id='8' onClick={this.handleChange.bind(this)}>{this.state.output}</div>
        <div className="grid-item" id='9' onClick={this.handleChange.bind(this)}>{this.state.output}</div>


      </div>
    );
  }
}

export default Board;
