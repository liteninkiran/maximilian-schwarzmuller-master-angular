import { Component, computed, input, signal } from '@angular/core';
import { Task } from './task/task';
import { UserObject } from '../models/user.model';
import { TASKS } from '../dummy-data';
import { TaskObject } from '../models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  imports: [Task],
})
export class Tasks {
  tasks = signal(TASKS);
  user = input.required<UserObject>();
  userTasks = computed(() => this.tasks().filter((task) => task.userId === this.user().id));

  onCompleteTask(id: string) {
    const filterFn = (task: TaskObject) => task.id !== id;
    const newTasks = this.tasks().filter(filterFn);
    this.tasks.set(newTasks);
  }
}
