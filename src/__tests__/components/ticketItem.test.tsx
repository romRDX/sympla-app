import { fireEvent, render, screen } from '@testing-library/react';
import { format } from 'date-fns';
import TicketItem from "../../components/TicketItem/TicketItem";

const fakeTicket = {
  id: 1,
  eventId: 1,
  quantity: 0,
  name: "Ingresso promocional 1",
  price: 120,
  availableDates: [new Date('January 01, 2023 03:24:00'), new Date('January 15, 2023 12:10:00')],
}

const fakeSetTicketsList = jest.fn();

describe("TicketItem component", () => {
  test('Should be able to render the TicketItem component with the correct data', () => {

    render(<TicketItem data={fakeTicket} handleSetTicketsList={fakeSetTicketsList} />);
  
    const ticketName = screen.getByText(fakeTicket.name);
    const ticketPrice = screen.getByText(`R$ ${fakeTicket.price}`);
    const ticketDates = screen.getByText(`Inscrições até ${ format(fakeTicket.availableDates[1], "dd MMM - yyyy")}`);
    const ticketPrice12x = screen.getByText(`em até 12x de R$ ${fakeTicket.price/12}`);
    const addTicketButton = screen.getByText("+");
    const subtractTicketButton = screen.getByText("-");
    const ticketCount = screen.getByText("0");
  
    expect(ticketName).toBeTruthy();
    expect(ticketPrice).toBeTruthy();
    expect(ticketDates).toBeTruthy();
    expect(ticketPrice12x).toBeTruthy();
    expect(addTicketButton).toBeTruthy();
    expect(subtractTicketButton).toBeTruthy();
    expect(ticketCount).toBeTruthy();
  });

  test('Should be able to use the set state function', () => {

    render(<TicketItem data={fakeTicket} handleSetTicketsList={fakeSetTicketsList} />);
  
    const addTicketButton = screen.getByText("+");
    const subtractTicketButton = screen.getByText("-");

    fireEvent.click(addTicketButton);
    fireEvent.click(subtractTicketButton);
    
    expect(fakeSetTicketsList).toHaveBeenCalledWith(fakeTicket, "+");
    expect(fakeSetTicketsList).toHaveBeenCalledWith(fakeTicket, "-");
  });
})

