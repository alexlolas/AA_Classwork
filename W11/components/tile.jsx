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
    if (this.tile.bombed) {
      return ""
    } else if (this.tile.explored) {
      return ""
    } else if (this.tile.flagged) {
      return "⚑"
    } else if (this.tile.adjacentBombCount() > 0 ){
      return this.tile.adjacentBombCount()
    } else {
      return ""
    }
  }

  onClick(e){
    if (this.tile.bombed) {
      e.target.className = 'tile bombed'
      e.target.textContent = "☢️"
    }  else if (e.altKey && !this.tile.explored){
      e.target.className = 'tile flagged'
      e.target.textContent = "⚑"
    } 
    this.props.updateGame(this.props.tile, this.tile.flagged)
  }


  render(){
    return <div className={this.getClassName()} onClick={this.onclick}>
        {this.getCharacter()}
    </div>
  }
}
