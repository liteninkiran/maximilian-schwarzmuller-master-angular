// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { Tasks } from './tasks';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [Tasks, Task, NewTask],
  exports: [Tasks],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}
