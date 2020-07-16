import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { getReservations } from '../apiCalls';
jest.mock('../apiCalls.js')


getReservations.mockResolvedValue([
  {date: "12/29", id: 1, name: "Christie", number: 12, time: "7:00"},
  {date: "12/31", id: 3, name: "Christie", number: 1, time: "6:00"},
  {date: "12/12", id: 4, name: "Christie", number: 2, time: "8:00"}
])


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('should display homepage', async () => {


  const { getByText, getByRole, getByPlaceholderText } = render(<App />)
  const header = getByText('Loading...')
  expect(header).toBeInTheDocument()


  const nameInput = await waitFor(() => getByPlaceholderText('name here'))
  expect(nameInput).toBeInTheDocument()

  const reservationCard = await waitFor(() => getByText("Date: 12/29"))
  expect(reservationCard).toBeInTheDocument()

})
