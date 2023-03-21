import React, { createContext, useState, useContext } from 'react';
import { Event } from "../types";

interface ContentContextData {
  selectedEvent: Event;
  setSelectedEvent: React.Dispatch<React.SetStateAction<Event>>;
}

type Props = {
  children: React.ReactNode
};

const EventsContext = createContext<ContentContextData>({} as ContentContextData);

export const EventsProvider: React.FC<Props> = ({ children }) => {
  const [selectedEvent, setSelectedEvent] = useState<Event>({ 
    id: 1,
    name: "Encontro anual Sympla",
    location: "Escarpas do Lago, Capitólio - MG",
    availableDates: [new Date('January 01, 2023 03:24:00'), new Date('February 01, 2023 16:24:00')],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et massa quis lacus ullamcorper mollis. Maecenas eros mauris, pretium vitae nibh hendrerit, vulputate scelerisque quam. Praesent ornare ligula erat, id tempus velit cursus at. Sed a nulla ut leo imperdiet molestie a non ligula. Nulla ornare vitae tortor eu hendrerit. In sit amet semper erat, vel elementum enim. Donec nec felis pulvinar, bibendum purus ut, finibus lectus. Nullam eleifend ut neque et mollis. Vestibulum eget metus a lacus fermentum venenatis. Nam arcu sem, convallis non pharetra eget, tincidunt ac urna. Praesent ornare ligula erat, id tempus velit cursus at. Sed a nulla ut leo imperdiet molestie a non ligula.",
    tickets: [
      {
        id: 1,
        eventId: 1,
        quantity: 0,
        name: "Ingresso promocional 1",
        price: 120,
        availableDates: [new Date('January 01, 2023 03:24:00'), new Date('January 15, 2023 12:10:00')],
      },
      {
        id: 2,
        eventId: 2,
        quantity: 0,
        name: "Ingresso promocional 2",
        price: 240,
        availableDates: [new Date('January 16, 2023 03:24:00'), new Date('February 01, 2023 16:24:00')],
      }
    ]
  });

  return (
    <EventsContext.Provider value={{ selectedEvent, setSelectedEvent }}>
      { children }
    </EventsContext.Provider>
  );
};

export function useEvents(): ContentContextData {
  return useContext(EventsContext);
}