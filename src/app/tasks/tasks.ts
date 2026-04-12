// Angular
import { Component, computed, inject, input, signal } from '@angular/core';

// Services
import { TasksService } from '../services/tasks.service';

// Types
import { type UserObject } from '../models/user.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  standalone: false,
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
