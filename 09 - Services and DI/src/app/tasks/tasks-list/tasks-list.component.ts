import { Component, computed, inject, signal } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';
import { Task, TaskStatus } from '../task.model';

const filterFn = (task: Task, status: TaskStatus) => task.status === status;
const filterOpenStatus = (task: Task) => filterFn(task, 'OPEN');
const filterDoneStatus = (task: Task) => filterFn(task, 'DONE');
const filterProgStatus = (task: Task) => filterFn(task, 'IN_PROGRESS');

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  standalone: true,
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  private tasksService = inject(TasksService);
  private selectedFilter = signal<string>('all');
  tasks = computed(() => {
    const tasks = this.tasksService.getAllTasks();
    switch (this.selectedFilter()) {
      case 'open':
        return tasks.filter(filterOpenStatus);
      case 'in-progress':
        return tasks.filter(filterProgStatus);
      case 'done':
        return tasks.filter(filterDoneStatus);
      default:
        return tasks;
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
