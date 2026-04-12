import { Component, input, output } from '@angular/core';
import { TaskObject } from '../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrl: './task.css',
  imports: [],
})
export class Task {
  task = input.required<TaskObject>();
  complete = output<string>();

  onCompleteTask() {
    this.complete.emit(this.task().id);
  }
}
