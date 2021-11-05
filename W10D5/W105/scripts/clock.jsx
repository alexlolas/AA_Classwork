import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
    this.tick = this.tick.bind(this)
  }

  tick() {
    this.setState({date: new Date()})
  } 

  componentDidMount() {
    setInterval(() => {
      this.tick()
    }, 1000)
  }

  render() {
    const date = this.state.date
    return (<div>
              <h1>
             
                {date.toTimeString()}

              </h1>
              <h1>
                {date.getUTCMonth() + 1}-
                {date.getUTCDate()}-
                {date.getUTCFullYear()}
              
              </h1>
          </div>)
  }
}


export default Clock
