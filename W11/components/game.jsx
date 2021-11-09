import React from 'react'
import * as Minesweeper from '../minesweeper'
import Board from './board'


export default class Game extends React.Component {
  constructor(props) {
    super(props)
    const board = new Minesweeper.Board(9, 10)
    this.state = { board: board }
    this.updategame = this.updateGame.bind(this)
  

  }

  updateGame(tile, flagged){
    if (flagged) {
      tile.toggleFlag()
    } else if (tile.adjacentBombCount() === 0){
      tile.explore()
    } else {
      tile.explored = true
    } 
   
    this.setState({ board: this.state.board })
  }

  render(){
    return <div>
            <Board board={this.state.board} updategame={this.updategame} />
            
           
          </div>
  }
}