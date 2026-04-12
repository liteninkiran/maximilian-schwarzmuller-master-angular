import { Component, input, output } from '@angular/core';
import { TaskObject } from '../../models/task.model';
import { CardComponent } from '../../shared/card/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrl: './task.css',
  imports: [CardComponent, CommonModule],
})
export class Task {
  task = input.required<TaskObject>();
  complete = output<string>();

  onCompleteTask() {
    this.complete.emit(this.task().id);
  }
}
