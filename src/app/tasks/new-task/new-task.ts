import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../../models/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
  imports: [FormsModule],
})
export class NewTask {
  cancel = output<void>();
  add = output<NewTaskData>();
  title = signal('');
  summary = signal('');
  dueDate = signal('');

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.title(),
      summary: this.summary(),
      date: this.dueDate(),
    });
  }
}
