import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations'
import { getReservations } from '../apiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: null,
    }
  }

  displayReservations = () => {
    if (this.state.reservations) {
      const reservationCards = this.state.reservations.map(reservation => (<Reservations {...reservation} key={Date.now()} reservations={reservation}/>))
      return reservationCards
    }
    return <h2>Loading...</h2>
  }

  componentDidMount() {
    getReservations()
      .then(response => {
        this.setState({ reservations: response})
      })
      .catch(err => console.log(err))
  }

  render() {
    const { reservations } = this.state
    if (reservations) {
      return (
        <div className="App">
          <h1 className='app-title'>Turing Cafe Reservations</h1>
          <div className='resy-form'>
          </div>
          <div className='resy-container'>
            { this.displayReservations() }
          </div>
        </div>
      )
    }
    return <h1>Loading...</h1>
  }
}

export default App;
