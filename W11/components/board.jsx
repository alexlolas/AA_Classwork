import React from 'react'
import Tile from './tile'

 class Board extends React.Component {
  constructor(props) {
    super(props)
    this.board = props.board
    this.updategame = props.updategame

    
  }


  render() {
   return <div>
            {this.board.grid.map( (row, i) => {
              return <div className="row" key={`row-${i}`}> 
                {row.map((tile, j) => {
                  return <Tile tile={tile} key={j}  updateGame={this.updategame}/>
                }) }
              </div>
            })}
        
           
          </div>
  }
}

export default Board