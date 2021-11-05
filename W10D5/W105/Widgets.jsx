import React from 'react'
import ReactDOM from 'react-dom'
import Clock from './scripts/clock'
import Tabs from './scripts/tabs'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root")
  const tabs = document.getElementById("tabs")
  const greeting = <h1>Hello</h1>
  const arr = [{title: "one", content: "I am first"}, {title: "two", content: "second"}, {title: "three", content: "third" }]

  ReactDOM.render(<Clock />, root);
  ReactDOM.render(<Tabs tabs={arr} />, tabs);
})