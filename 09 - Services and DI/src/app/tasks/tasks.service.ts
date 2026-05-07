import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

type NewTaskData = Omit<Task, 'id' | 'status'>;

const taskFromData = (taskData: NewTaskData) =>
  ({
    ...taskData,
    id: crypto.randomUUID(),
    status: 'OPEN',
  }) as Task;
const addTask = (oldTasks: Task[], taskData: NewTaskData) => [
  ...oldTasks,
  taskFromData(taskData),
];

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks = signal<Task[]>([]);

  addTask(taskData: NewTaskData) {
    this.tasks.update((oldTasks) => addTask(oldTasks, taskData));
  }
}
