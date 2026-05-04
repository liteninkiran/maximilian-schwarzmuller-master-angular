import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
  standalone: true,
  imports: [NewTicketComponent],
})
export class TicketsComponent {
  tickets: Ticket[] = [];
}
