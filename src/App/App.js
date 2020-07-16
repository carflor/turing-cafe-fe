import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations'
import ReserveForm from '../ReserveForm'
import { getReservations } from '../apiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: null,
      copy: [],
      handleSubmit: this.handleSubmit,
    }
  }

  displayReservations = () => {
    if (this.state.reservations) {
      const reservationCards = this.state.reservations.map(reservation => (<Reservations {...reservation} key={Date.now()} reservations={reservation}/>))
      return reservationCards
    }
    return <h2>Loading...</h2>
  }

  handleSubmit = (e, newReservation) => {
    e.preventDefault()
    const allReservations = [...this.state.reservations, newReservation]
    this.setState({ 
      reservations: allReservations,
      name: '',
      time: null,
      date: null,
      partySize: null,
    })
  }

  componentDidMount() {
    getReservations()
      .then(response => {
        this.setState({ reservations: response})
      })
      .catch(err => console.log(err))
  }

  render() {
    const { reservations, handleSubmit } = this.state
    if (reservations) {
      return (
        <div className="App">
          <h1 className='app-title'>Turing Cafe Reservations</h1>
          <ReserveForm 
            handleSubmit={handleSubmit}
          />
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
