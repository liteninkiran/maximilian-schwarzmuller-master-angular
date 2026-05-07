import { Injectable, signal } from '@angular/core';
import { EXAMPLE_TASKS, Task, TaskStatus } from './task.model';

type NewTaskData = Omit<Task, 'id' | 'status'>;

type Config = {
  status: TaskStatus;
  task: Task;
  taskId?: string;
};

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
const updatedTaskStatus = ({ task, status }: Config) => ({ ...task, status });
const updateTaskStatus = ({ task, status, taskId }: Config) =>
  task.id === taskId ? updatedTaskStatus({ task, status }) : task;
const updateStatus = (oldTasks: Task[], taskId: string, status: TaskStatus) =>
  oldTasks.map((task: Task) => updateTaskStatus({ task, taskId, status }));

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>(EXAMPLE_TASKS);

  getAllTasks = this.tasks.asReadonly();

  addTask(taskData: NewTaskData) {
    this.tasks.update((oldTasks) => addTask(oldTasks, taskData));
  }

  updateTaskStatus(taskId: string, status: TaskStatus) {
    this.tasks.update((oldTasks) => updateStatus(oldTasks, taskId, status));
  }
}
