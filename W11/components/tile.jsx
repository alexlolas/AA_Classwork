import React from 'react'

export default class Tile extends React.Component {
  constructor(props) {
    super(props)  
    this.explored = 'unexplored'
    this.tile = props.tile
    this.onclick = this.onClick.bind(this)
    console.log(props)
  }

  getClassName() {
    if (this.tile.bombed) {
      return "tile bombed"
    } else if (this.tile.explored) {
      return "tile explored"
    } else if (this.tile.flagged) {
      return "tile flagged"
    } else {
      return "tile unexplored"
    }
  }

  getCharacter() {
  
   if (this.tile.flagged) {
      return "⚑"
   }
    else if (this.tile.bombed && this.tile.explored) {
      return "☢️"
    }
     else if (this.tile.adjacentBombCount() > 0 && this.tile.explored ){
      return this.tile.adjacentBombCount()
    } 
  }

  onClick(e){
      if (e.altKey && !this.tile.explored) {
      this.tile.flagged = !this.tile.flagged
      if (this.tile.flagged) {
      e.target.className = 'tile flagged'
      e.target.textContent = "⚑"
      } else {
        e.target.className = 'tile unexplored'
        e.target.textContent = ""
      }
    }  else if (this.tile.bombed) {
      e.target.className = 'tile bombed'
      e.target.textContent = "☢️"
    }  else if (!this.tile.explored) {
     e.target.className = 'tile explored'
    } 
    this.props.updateGame(this.props.tile, this.tile.flagged)
  }


  render(){
    return <div className={this.getClassName()} onClick={this.onclick}>
        {this.getCharacter()}
    </div>
  }
}
