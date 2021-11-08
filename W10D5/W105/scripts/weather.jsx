import React from 'react'
import { fetchWeather } from "./weatherutils.js"

class Weather extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      weather: null
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition( fetchWeather().then(res => {
      if (res instanceof Object) {
        
      }
    }))
  }
}

export default Weather