import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReserveForm from './ReserveForm'
const handleSubmit = jest.fn()

describe('LogInForm', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReserveForm handleSubmit={handleSubmit}/> , div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('should display a log in form in homepage', () => {
    const { getByText } = render(<ReserveForm handleSubmit={handleSubmit}/>)

    const nameInput = getByText('Name:')
    const dateLabel = getByText('Date:')
    const partySizeLabel = getByText('Party Size:')
    const submitBtn = screen.getByRole('button', { name: /Make Reservation/})
    expect(nameInput).toBeInTheDocument()
    expect(dateLabel).toBeInTheDocument()
    expect(partySizeLabel).toBeInTheDocument()
    expect(submitBtn).toBeInTheDocument()
  })
})