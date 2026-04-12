import { Component, input } from '@angular/core';
import { Task } from './task/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  imports: [Task],
})
export class Tasks {
  name = input.required<string>();
}
