import styles from "./events.module.scss";
import {GiRoundStar}  from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbClockHour3, TbFaceMask } from 'react-icons/tb';
import Tickets from "../Tickets/Tickets";
import { format } from "date-fns";
import { useEvents } from "@/hooks/useEvents";

const Events = () => {

    const { selectedEvent } = useEvents();

    return (
        <main className={styles.events__container}>
            
            <section className={styles.events__pannel}>
                <div className={styles.events__cover}>
                    <ul>
                        <li><GiRoundStar color="#0098ff" size={30} /></li>
                        <li><GiRoundStar color="#0098ff" size={30} /></li>
                        <li><GiRoundStar color="#0098ff" size={30} /></li>
                        <li><GiRoundStar color="#0098ff" size={30} /></li>
                    </ul>
                </div>
            </section>

            <section className={styles.events__content}>
                <p>COMPARTILHE</p>

                <h1>{selectedEvent.name}</h1>

                <div>
                    <p><HiOutlineLocationMarker size={20} color="gray" /><b>Evento presencial</b> em <span>{selectedEvent.location}</span></p>
                    <p>
                        <TbClockHour3 size={20} color="gray" />
                        {format(selectedEvent.availableDates[0], "dd MMM - yyyy")} &#8226; {format(selectedEvent.availableDates[0], "kk:mm")} &gt; { format(selectedEvent.availableDates[1], "dd MMM - yyyy")} &#8226; {format(selectedEvent.availableDates[1], "kk:mm")}
                    </p>
                    <p><TbFaceMask size={20} color="gray" />Lembre-se das <span>medidas de prevenção </span> ao COVID-19.</p>
                </div>        
            </section>

            <section className={styles.events__description}>
                <div>
                    <span>Descrição</span>
                    <p>
                        {selectedEvent.description}
                    </p>
                </div>

                <Tickets />

            </section>
        </main>
    );
}

export default Events;