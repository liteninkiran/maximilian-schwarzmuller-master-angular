import { Component, OnInit, output, signal } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { NewTicketData } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
})
export class NewTicketComponent implements OnInit {
  public newTicket = output<NewTicketData>();
  public text = signal('');
  public title = signal('');

  onSubmit() {
    const data: NewTicketData = {
      title: this.title(),
      text: this.text(),
    };
    this.newTicket.emit(data);
    this.resetForm();
  }

  ngOnInit() {}

  private resetForm() {
    this.text.set('');
    this.title.set('');
  }
}
