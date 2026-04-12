import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../../models/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
  imports: [FormsModule],
})
export class NewTask {
  cancel = output<void>();
  add = output<NewTaskData>();
  title = signal<string | null>(null);
  summary = signal<string | null>(null);
  dueDate = signal<string | null>(null);

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    const title = this.title();
    const summary = this.summary();
    const dueDate = this.dueDate();

    if (title && summary && dueDate) {
      this.add.emit({ title, summary, dueDate });
    }
  }
}
