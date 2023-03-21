import React from 'react';
import { EventsProvider } from "./useEvents";
import { TicketsProvider } from "./useTickets";

type Props = {
  children: React.ReactNode
};

const AppProvider: React.FC<Props> = ({ children }) => {

  return (
    <EventsProvider>
      <TicketsProvider>
        {children}
      </TicketsProvider>
    </EventsProvider>
  )
};

export default AppProvider;