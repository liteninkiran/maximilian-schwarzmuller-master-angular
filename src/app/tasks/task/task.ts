import { Component, input } from '@angular/core';
import { TaskObject } from '../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrl: './task.css',
  imports: [],
})
export class Task {
  task = input.required<TaskObject>();
}
