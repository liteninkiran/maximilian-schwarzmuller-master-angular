// Angular
import { Component, inject, input, output } from '@angular/core';

// Services
import { TasksService } from '../../services/tasks.service';

// Types
import { type TaskObject } from '../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrl: './task.css',
  standalone: false,
})
export class Task {
  task = input.required<TaskObject>();
  complete = output<string>();

  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task().id);
  }
}
