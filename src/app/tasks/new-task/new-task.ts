// Angular
import { Component, inject, input, output, signal } from '@angular/core';

// Services
import { TasksService } from '../../services/tasks.service';

// Types
import { type UserObject } from '../../models/user.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
  standalone: false,
})
export class NewTask {
  user = input.required<UserObject>();
  close = output<void>();
  title = signal<string | null>(null);
  summary = signal<string | null>(null);
  dueDate = signal<string | null>(null);

  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    const title = this.title();
    const summary = this.summary();
    const dueDate = this.dueDate();

    if (title && summary && dueDate) {
      this.tasksService.addTask({ title, summary, dueDate }, this.user().id);
      this.close.emit();
    }
  }
}
