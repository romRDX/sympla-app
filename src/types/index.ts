export interface Ticket {
    id: number;
    eventId: number;
    name: string;
    price: number;
    availableDates: Date[];
    quantity: number;
}

export interface Event {
    id: number;
    name: string;
    location: string;
    availableDates: Date[];
    description: string;
    tickets: Ticket[],
}