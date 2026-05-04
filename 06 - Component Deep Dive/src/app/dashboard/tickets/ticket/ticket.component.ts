import { Component, input, signal } from '@angular/core';
import { Ticket } from '../ticket.model';
import { ChevronIconComponent } from '../../../shared/chevron-icon/chevron-icon.component';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
  standalone: true,
  imports: [ChevronIconComponent],
})
export class TicketComponent {
  ticket = input.required<Ticket>();
  detailsVisible = signal(false);

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((old) => !old);
  }
}
