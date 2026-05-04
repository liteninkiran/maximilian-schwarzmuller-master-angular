import { Component, ElementRef, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

type FormElement = ElementRef<HTMLFormElement>;

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
})
export class NewTicketComponent {
  private form = viewChild.required<FormElement>('form');

  onSubmit(title: string, request: string) {
    console.log(title, request);
    this.form().nativeElement.reset();
  }
}
