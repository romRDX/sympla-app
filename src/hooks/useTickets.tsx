import React, { createContext, useState, useContext } from 'react';
import { Ticket } from "../types";

interface ContentContextData {
  ticketsList: Ticket[];
  setTicketsList: React.Dispatch<React.SetStateAction<Ticket[]>>;
}

type Props = {
  children: React.ReactNode
};

const TicketsContext = createContext<ContentContextData>({} as ContentContextData);

export const TicketsProvider: React.FC<Props> = ({ children }) => {
  const [ticketsList, setTicketsList] = useState<Ticket[]>([]);

  return (
    <TicketsContext.Provider value={{ ticketsList, setTicketsList }}>
      { children }
    </TicketsContext.Provider>
  );
};

export function useTickets(): ContentContextData {
  return useContext(TicketsContext);
}