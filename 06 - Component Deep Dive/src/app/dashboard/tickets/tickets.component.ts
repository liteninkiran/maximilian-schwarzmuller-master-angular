import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket, NewTicketData } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
})
export class TicketsComponent {
  tickets: Ticket[] = [];

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
