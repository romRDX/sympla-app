import { render, screen } from '@testing-library/react';
import { format } from 'date-fns';
import Events from "../../components/Events/Events";

const fakeEvent = { 
  id: 1,
  name: "Encontro anual Sympla",
  location: "Escarpas do Lago, Capitólio - MG",
  availableDates: [new Date('January 01, 2023 03:24:00'), new Date('February 01, 2023 16:24:00')],
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et massa quis lacus ullamcorper mollis. Maecenas eros mauris, pretium vitae nibh hendrerit, vulputate scelerisque quam. Praesent ornare ligula erat, id tempus velit cursus at. Sed a nulla ut leo imperdiet molestie a non ligula. Nulla ornare vitae tortor eu hendrerit. In sit amet semper erat, vel elementum enim. Donec nec felis pulvinar, bibendum purus ut, finibus lectus. Nullam eleifend ut neque et mollis. Vestibulum eget metus a lacus fermentum venenatis. Nam arcu sem, convallis non pharetra eget, tincidunt ac urna. Praesent ornare ligula erat, id tempus velit cursus at. Sed a nulla ut leo imperdiet molestie a non ligula.",
  tickets: [
    {
      id: 1,
      eventId: 1,
      quantity: 2,
      name: "Ingresso promocional 1",
      price: 120,
      availableDates: [new Date('January 01, 2023 03:24:00'), new Date('January 15, 2023 12:10:00')],
    },
    {
      id: 2,
      eventId: 2,
      quantity: 3,
      name: "Ingresso promocional 2",
      price: 240,
      availableDates: [new Date('January 16, 2023 03:24:00'), new Date('February 01, 2023 16:24:00')],
    }
  ]
};

jest.mock('../../hooks/useTickets', () => {
return {
  useTickets: () => ({
    ticketsList: fakeEvent.tickets
  })
}
});

jest.mock('../../hooks/useEvents', () => {
return {
  useEvents: () => ({
    selectedEvent: fakeEvent
  })
}
});

const mockedRouter = jest.fn();

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockedRouter
  })
}))

describe("Events component", () => {
  test('Should be able to see events page data', () => {

    render(<Events />);
    
    const shareMessage = screen.getByText("COMPARTILHE");
    // const covidMessage = screen.getByText("Lembre-se das medidas de prevenção ao COVID-19.", { exact: false }); não consegui dar match, está separado por span
    const descriptionTitle = screen.getByText("Descrição");
    const descriptionText = screen.getByText(fakeEvent.description);

    const eventName = screen.getByText(fakeEvent.name);
    const eventLocation = screen.getByText(fakeEvent.location);
    const eventDates = screen.getByText(`${format(fakeEvent.availableDates[0], "dd MMM - y ")}•${format(fakeEvent.availableDates[0], " kk:mm ")}>${format(fakeEvent.availableDates[1], " dd MMM - y ")}•${format(fakeEvent.availableDates[1], " kk:mm")}`);
  
    expect(shareMessage).toBeTruthy();
    expect(descriptionTitle).toBeTruthy();
    expect(descriptionText).toBeTruthy();

    expect(eventName).toBeTruthy();
    expect(eventLocation).toBeTruthy();
    expect(eventDates).toBeTruthy();
  });
})

