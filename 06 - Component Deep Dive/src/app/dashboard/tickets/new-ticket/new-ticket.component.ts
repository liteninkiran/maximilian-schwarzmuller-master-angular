import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
})
export class NewTicketComponent {
  onSubmit(title: HTMLInputElement) {
    console.log(title.value);
  }
}
