import React from 'react'
import ReactDOM from 'react-dom'
import Game from './components/game'

document.addEventListener("DOMContentLoaded", () => {
  const game = document.getElementById("main")
  ReactDOM.render(<Game />, game)
  // ReactDOM.render(<p>React</p>, game)
})