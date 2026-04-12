// Angular
import { Component, computed, inject, input, signal } from '@angular/core';

// Components
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';

// Services
import { TasksService } from '../services/tasks.service';

// Types
import { type UserObject } from '../models/user.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  imports: [Task, NewTask],
})
export class Tasks {
  user = input.required<UserObject>();
  showModal = signal(false);
  userTasks = computed(() => this.tasksService.getUserTasks(this.user().id));

  private tasksService = inject(TasksService);

  onStartAddTask() {
    this.showModal.set(true);
  }

  onCloseModal() {
    this.showModal.set(false);
  }
}
