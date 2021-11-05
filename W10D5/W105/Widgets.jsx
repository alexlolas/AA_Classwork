import React from 'react'
import ReactDOM from 'react-dom'
import Clock from './scripts/clock'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root")
  const greeting = <h1>Hello</h1>

  ReactDOM.render(<Clock />, root)
})