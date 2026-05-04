import { Component, input } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
  standalone: true,
  imports: [],
})
export class TicketComponent {
  ticket = input.required<Ticket>();
}
