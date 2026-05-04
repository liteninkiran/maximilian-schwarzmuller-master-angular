import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  ViewChild,
  viewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { NewTicketData } from '../ticket.model';

type FormElement = ElementRef<HTMLFormElement>;

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
})
export class NewTicketComponent implements OnInit {
  private form = viewChild.required<FormElement>('form');
  public newTicket = output<NewTicketData>();

  onSubmit(title: string, text: string) {
    this.newTicket.emit({ title, text });
    this.form().nativeElement.reset();
  }

  ngOnInit() {}
}
