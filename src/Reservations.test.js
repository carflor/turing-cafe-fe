import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Reservations from './Reservations'

describe('Reservation Card', () => {

  it('should display reservations in home page', () => {
    const { getByText, getByRole } = render(<Reservations/>)
    const header = getByRole('heading')
    const time = getByText('Time:')
    const partySize = getByText('Party Size:')
    const reservationName = getByText('Name:')
    const confirmationNum = getByText('Confirmation:')
    expect(header).toBeInTheDocument()
    expect(time).toBeInTheDocument()
    expect(partySize).toBeInTheDocument()
    expect(reservationName).toBeInTheDocument()
    expect(confirmationNum).toBeInTheDocument()
  })
})