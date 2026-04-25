import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
  standalone: true,
  imports: [FormsModule],
})
export class UserInputComponent {
  onSubmit() {
    console.log('SUBMITTED!');
  }
}
