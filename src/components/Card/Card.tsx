import React, { useState } from 'react';
import styles from "./Card.module.scss";
import { Ticket, Event } from "../../types";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbClockHour3 } from 'react-icons/tb';
import { format } from 'date-fns';
import { useTickets } from '@/hooks/useTickets';
import { useEvents } from '@/hooks/useEvents';

const Card = () => {

    const { ticketsList } = useTickets();
    const { selectedEvent } = useEvents();

    const [cardIsFliped, setCardIsFliped] = useState(false);

    return (
        <div className={styles.card__eventCard}>
            <div className={ cardIsFliped ? styles['card__eventCard__frontContent--fliped'] : styles.card__eventCard__frontContent} data-testid="card-front">
                <div className={styles.card__eventCard__panel} />
                <div className={styles.card__eventCard__eventData}>
                    <b>{selectedEvent.name}</b>
                    <p><HiOutlineLocationMarker size={20} color="gray" /><b>Evento presencial</b> em <span>{selectedEvent.location}</span></p>
                    <p>
                        <TbClockHour3 size={20} color="gray" />
                        {format(selectedEvent.availableDates[0], "dd MMM - y ")}
                        &#8226;
                        {format(selectedEvent.availableDates[0], " kk:mm ")}
                        &gt;
                        {format(selectedEvent.availableDates[1], " dd MMM - y ")}
                        &#8226;
                        {format(selectedEvent.availableDates[1], " kk:mm")}
                    </p>
                </div> 
                <button onClick={() => setCardIsFliped(prev => !prev)}>
                    VER INGRESSOS
                </button>
            </div>
            
            <div className={ cardIsFliped ? styles['card__eventCard__backContent--fliped'] : styles.card__eventCard__backContent} data-testid="card-back">
                <div>
                    <ul>
                        {
                            ticketsList.map((ticket) => (
                                <li key={ticket.id}>
                                    <p>{ticket.name} x{ticket.quantity}</p>
                                    <b>Preço: R$ {ticket.price*ticket.quantity}</b>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <b>Total: R$ { ticketsList.reduce((acc, item) => acc + item.price*item.quantity, 0)}</b>
                <button onClick={() => setCardIsFliped(prev => !prev)}>
                    VER EVENTO
                </button>
            </div>
        </div>
    );
}

export default Card;