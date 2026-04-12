import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
  imports: [FormsModule],
})
export class NewTask {
  cancel = output<void>();
  title = signal('');
  summary = signal('');
  dueDate = signal('');

  onCancel() {
    this.cancel.emit();
  }
}
