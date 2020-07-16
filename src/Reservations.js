import React, { Component } from 'react';

class Reservations extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { id, name, date, time, number } = this.props;
    return (
      <section className='reservation-card' >
        <h1 className='reservation-date'>Date: {date}</h1>
        <p className='reservation-time'>Time: {time}</p>
        <p className='reservation-party-size'>Party Size: {number}</p>
        <p className='reservation-name'>Name: {name}</p>
        <p className='confirmation-number'>Confirmation: {id}</p>
      </section>
    )
  }
}

export default Reservations;