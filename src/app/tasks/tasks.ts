import { Component, computed, input, signal } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { TASKS } from '../dummy-data';
import { type NewTaskData, type TaskObject } from '../models/task.model';
import { type UserObject } from '../models/user.model';
import { TasksService } from '../services/tasks.service';

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

  constructor(private tasksService: TasksService) {}

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }

  onStartAddTask() {
    this.showModal.set(true);
  }

  onCancelAddTask() {
    this.showModal.set(false);
  }

  onAddTask(inputs: NewTaskData) {
    this.tasksService.addTask(inputs, this.user().id);
    this.showModal.set(false);
  }
}
