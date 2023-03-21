import React, { useCallback, useMemo, useState } from 'react';
import styles from "./Tickets.module.scss";
import TicketItem from "../TicketItem/TicketItem";
import { useEvents } from "@/hooks/useEvents";
import { useTickets } from '@/hooks/useTickets';
import { useRouter } from 'next/router';
import { Ticket } from '../../types';

const Tickets = () => {

    const router = useRouter();

    const { selectedEvent } = useEvents();
    const { setTicketsList } = useTickets();

    const [ticketsData, setTicketsData] = useState<Ticket[]>(selectedEvent.tickets);

    const handleSetTicketsList = useCallback((data: Ticket, signal: string) => {

        const existingTicket = ticketsData.find((ticket) => ticket.id === data.id);

        if(existingTicket){
            const newTicketsList = ticketsData.map((ticket) => {
                if(ticket.id === data.id){

                    const notEqualToZero = () => {
                        if(ticket.quantity === 0){
                            return 0;
                        } else {
                            return ticket.quantity -1;
                        }
                    }
                    
                    return {
                        ...ticket,
                        quantity: signal == "+" ? ticket.quantity+1 : notEqualToZero(),
                    }
                } else {
                    return ticket;
                }
            });

            setTicketsData(newTicketsList);
        } else {
            const newTicket = {
                id: data.id,
                eventId: data.eventId,
                name: data.name,
                price: data.price,
                availableDates: data.availableDates,
                quantity: 1,
            }

            setTicketsData([...ticketsData, newTicket])
        }
    }, [ticketsData]);

    const handleGoToCart = () => {
        setTicketsList(ticketsData);
        router.push("/cart");
    }

    const totalPrice = useMemo(() => {
        return ticketsData.reduce((acc, item) => acc + item.price*item.quantity, 0);
    }, [ticketsData]);

    return (
        <div className={styles.tickets}>
            <div className={styles.tickets__title}>
                <b>Ingressos</b>
                <p>{`R$ ${totalPrice}`} </p>
            </div>
            <ul>
                {
                    ticketsData.map((event: Ticket) =>
                        <TicketItem
                            key={event.id}
                            data={{ ...event, eventId: selectedEvent.id }}
                            handleSetTicketsList={handleSetTicketsList}
                        />
                    )
                }
            </ul>
            <div className={styles.tickets__promotionCode}>
                <button>APLICAR CÓDIGO PROMOCIONAL</button>
            </div>
            <div className={styles.tickets__buyButton}>
                <button onClick={handleGoToCart}>COMPRAR INGRESSOS</button>
            </div>
        </div>
    );
}

export default Tickets;