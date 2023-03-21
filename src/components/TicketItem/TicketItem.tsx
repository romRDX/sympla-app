import React from 'react';
import styles from "./TicketItem.module.scss";
import { Ticket } from "../../types";
import { format } from 'date-fns';

interface TicketItemProps {
    data: Ticket,
    handleSetTicketsList: (data: Ticket, signal: string) => void,
}

const TicketItem = ({ data, handleSetTicketsList }: TicketItemProps) => (
    <li className={styles.ticketItem}>
        <div>
            <p>{data.name}</p>
            <b>R$ {data.price}</b>
            <i>Inscrições até { format(data.availableDates[1], "dd MMM - yyyy")}</i>
            <span>em até 12x de R$ {data.price/12}</span>
        </div>
        <div>
            <button onClick={() => handleSetTicketsList(data, "+")}>+</button>
            <p> {data.quantity} </p>
            <button onClick={() => handleSetTicketsList(data, "-")}>-</button>
        </div>
    </li>
);


export default TicketItem;