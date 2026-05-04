import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket, NewTicketData } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';

const tickets: Ticket[] = [
  {
    id: '1',
    title: 'Ticket 1',
    request: 'xxx',
    status: 'open',
  },
  {
    id: '2',
    title: 'Ticket 2',
    request: 'xxx',
    status: 'open',
  },
  {
    id: '3',
    title: 'Ticket 3',
    request: 'xxx',
    status: 'closed',
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
}
