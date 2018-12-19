import React, { Component } from 'react';
import './App.css';
import Square from './square'


class Board extends Component {
  constructor(props){
    super(props)
    this.state = {
      spaces: ['❓','❓','❓','❓','❓','❓','❓','❓','❓'],
      count: 9,
      id: '',
      winner: 1,
      bomb: 1,
  }
}
  // randomNumb(){
  //   let {bomb, winner} = this.state
  //   do{
  //     winner = Math.floor((Math.random() * 9));
  //     bomb = Math.floor((Math.random() * 9));
  //   } while(bomb === winner);
  //   this.setState({bomb:bomb, winner:winner})
  // }

  handleChange(e){
    let { spaces, count, id, bomb, winner} = this.state
    id = e.target.id
    // spaces[id]==="Win" || spaces[id]="Bomb" ? this.reset() : winner == id ? spaces[id]="Win" : bomb == id ? spaces[id]="Bomb" : spaces[id]="Tree"
    if(spaces[id]=="🎁" || spaces[id]=="💣" || count==0){
      return this.reset()
    } else {
      if(winner == id){
        spaces[id]="🎁"
      } else if (bomb == id){
        spaces[id]='💣'
      } else {
        spaces[id]="🌲"
      }
    }
    // countdown with 5 turns
    count = count > 0 ? count - 1 : 0
    this.setState({ count: count, spaces:spaces, id:id})
        console.log("bomb:" +bomb)
        console.log("winner:" +winner)
       console.log("id:" +id);
       console.log("spaces:"+spaces);
  }



reset() {
  this.setState({
    spaces: ['❓','❓','❓','❓','❓','❓','❓','❓','❓'],
    count: 9,
    id: '',
    winner: Math.floor((Math.random() * 9)),
    bomb: Math.floor((Math.random() * 9)),
  })
}

  render() {
      let squares = this.state.spaces.map((val, index) => {
        return(<div className="grid-item" id={index} onClick={this.handleChange.bind(this)}>val</div>)
      })
    return (
      <div className="board">
        <div>
          <h1>Current Turns: {this.state.count}</h1>
        </div>
        <div>
          <div className="grid-item" id='0' onClick={this.handleChange.bind(this)}>{this.state.spaces[0]}</div>
          <div className="grid-item" id='1' onClick={this.handleChange.bind(this)}>{this.state.spaces[1]}</div>
          <div className="grid-item" id='2' onClick={this.handleChange.bind(this)}>{this.state.spaces[2]}</div>
          <div className="grid-item" id='3' onClick={this.handleChange.bind(this)}>{this.state.spaces[3]}</div>
          <div className="grid-item" id='4' onClick={this.handleChange.bind(this)}>{this.state.spaces[4]}</div>
          <div className="grid-item" id='5' onClick={this.handleChange.bind(this)}>{this.state.spaces[5]}</div>
          <div className="grid-item" id='6' onClick={this.handleChange.bind(this)}>{this.state.spaces[6]}</div>
          <div className="grid-item" id='7' onClick={this.handleChange.bind(this)}>{this.state.spaces[7]}</div>
          <div className="grid-item" id='8' onClick={this.handleChange.bind(this)}>{this.state.spaces[8]}</div>
        </div>
        <div className="ResetButton">
        <button className='reset' onClick={(e) => this.reset(e)}>Reset</button>
        </div>
      </div>
    );
  }

  componentDidMount(){
    // this.randomNumb()
    //Don't have to put the function randomNumb() here, can just put the logic
      let {bomb, winner} = this.state
      do{
        winner = Math.floor((Math.random() * 9));
        bomb = Math.floor((Math.random() * 9));
      } while(bomb === winner);
      this.setState({bomb:bomb, winner:winner})
  }
}


export default Board;
//
