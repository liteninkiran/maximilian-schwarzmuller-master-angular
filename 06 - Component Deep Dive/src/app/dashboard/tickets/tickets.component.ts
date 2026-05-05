import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket, NewTicketData } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';

const tickets: Ticket[] = [
  {
    id: '1',
    title: 'Ticket 1',
    request: 'Please complete the following tasks...',
    status: 'open',
  },
  {
    id: '2',
    title: 'Ticket 2',
    request: 'Close other ticket',
    status: 'open',
  },
  {
    id: '3',
    title: 'Ticket 3',
    request: 'Finish training course',
    status: 'open',
  },
];

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
})
export class TicketsComponent {
  tickets: Ticket[] = tickets;

  onNewTicket({ title, text: request }: NewTicketData) {
    this.tickets.push({
      id: crypto.randomUUID(),
      title,
      request,
      status: 'open',
    });

    console.log(this.tickets);
  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map((ticket) =>
      ticket.id === id ? { ...ticket, status: 'closed' } : ticket,
    );
  }
}
