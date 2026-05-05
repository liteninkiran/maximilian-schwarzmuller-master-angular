import { Component, input, output, signal } from '@angular/core';
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
  closeTicket = output<void>();
  detailsVisible = signal(true);

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((old) => !old);
  }

  onMarkAsCompleted() {
    this.closeTicket.emit();
  }
}
