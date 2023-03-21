import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useEvents, EventsProvider } from '../../hooks/useEvents';

const fakeEvent = { 
  id: 1,
  name: "Fake event name",
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

describe("useEvents hook", () => {
  test('Should be able to use events hook', () => {

    const { result } = renderHook(() => useEvents(), {
      wrapper: EventsProvider,
    });
    
    expect(typeof result.current.selectedEvent).toBe("object");
    expect(typeof result.current.setSelectedEvent).toBe("function");
  });
  
  test('Should be able to set an event', () => {
  
    const { result } = renderHook(() => useEvents(), {
      wrapper: EventsProvider,
    });
  
    act(() => {
      result.current.setSelectedEvent(fakeEvent);
    });
  
    expect(result.current.selectedEvent.name).toBe(fakeEvent.name);
  });
})

