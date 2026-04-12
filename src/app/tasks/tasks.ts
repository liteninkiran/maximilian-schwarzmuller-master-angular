import { Component, computed, input } from '@angular/core';
import { Task } from './task/task';
import { UserObject } from '../models/user.model';
import { TASKS } from '../dummy-data';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  imports: [Task],
})
export class Tasks {
  tasks = TASKS;
  user = input.required<UserObject>();
  userTasks = computed(() => this.tasks.filter((task) => task.userId === this.user().id));
}
