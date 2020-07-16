import React, { Component } from 'react';

class ReserveForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      time: null,
      date: null,
      partySize: null,
    }
  }

  createReservation = (e) => {
    e.preventDefault()
    const dateReformat = this.state.date.split('-')
    const removeYear = dateReformat.shift()
    const fixedDate = dateReformat.join('/')

    const newReservation = {
      date: fixedDate.toString(),
      id: Date.now(),
      name: this.state.name,
      number: this.state.partySize,
      time: this.state.time
    }
    this.props.handleSubmit(e, newReservation)
  }

  render() {
    return (
      <div className='resy-form'>
        <label className='form-label' htmlFor='name'>Name:</label>
        <input 
          type='text' 
          placeholder='name here'
          onChange={(e) => this.setState({ name: e.target.value }) }
          className='submit-name'>
        </input>
        <label className='form-label' htmlFor='date'>Date:</label>
        <input 
          type='date' 
          onChange={(e) => this.setState({ date: e.target.value })}
          className='submit-date'>  
        </input>
        <label className='form-label' htmlFor='time'>Time Desired:</label>
        <input 
          type='time' 
          onChange={(e) => this.setState({ time: e.target.value })}
          className='submit-time'>
        </input>
        <label className='form-label' htmlFor='party-size'>Party Size:</label>
        <input 
          type='number'
          onChange={(e) => this.setState({ partySize: e.target.value })}
          min='1' 
          max='25' 
          className='submit-number'>
        </input>
        <button 
          className='submit-btn' 
          // onClick={(e) => this.props.handleSubmit(e)}
          onClick={(e) => this.createReservation(e)}
          type='submit'>
          Make Reservation
        </button>
      </div>
    )
  }
}

export default ReserveForm;