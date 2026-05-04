import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  onSubmit(title: string, request: string) {
    console.log(title, request);
    this.form?.nativeElement.reset();
  }
}
