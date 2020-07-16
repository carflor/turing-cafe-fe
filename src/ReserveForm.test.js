import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReserveForm from './ReserveForm'
const handleSubmit = jest.fn()

describe('ReserveForm', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReserveForm handleSubmit={handleSubmit}/> , div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('should display form in homepage', () => {
    const { getByText } = render(<ReserveForm handleSubmit={handleSubmit}/>)

    const nameInput = getByText('Name:')
    const dateLabel = getByText('Date:')
    const partySizeLabel = getByText('Party Size:')
    const submitBtn = screen.getByRole('button', { name: 'Make Reservation'})
    expect(nameInput).toBeInTheDocument()
    expect(dateLabel).toBeInTheDocument()
    expect(partySizeLabel).toBeInTheDocument()
    expect(submitBtn).toBeInTheDocument()
  })

  it.skip('should update data on input', () => {
    const { getByText, getByPlaceholderText, getByRole } = render(<ReserveForm handleSubmit={handleSubmit}/>)
    const nameInput = getByPlaceholderText('name here')
    const dateInput = screen.getByRole('textbox')
    const partySizeInput = screen.getByRole('textbox')
    const submitBtn = getByText('Make Reservation')

    fireEvent.change(nameInput, {target: {value: "Lisa"}})
    fireEvent.change(dateInput, {target: {value: "2020-09-17"}})
    fireEvent.change(partySizeInput, {target: {value: "7"}})
    fireEvent.click(submitBtn)

    // issue with getByText , does not work with screen?
    const newNameInput = getByText("Lisa")
    const newDateInput = getByText("09/17")
    const newPartySize = getByText("7")
    expect(newNameInput).toBeInTheDocument()
    expect(newDateInput).toBeInTheDocument()
    expect(newPartySize).toBeInTheDocument()

  })
})