import { effect, Injectable, signal } from '@angular/core';
import { type NewTaskData, type TaskObject } from '../models/task.model';
import { TASKS } from '../dummy-data';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private stored = localStorage.getItem('tasks');
  private tasks = signal<TaskObject[]>(this.stored ? JSON.parse(this.stored) : TASKS);

  constructor() {
    effect(() => {
      const tasksJson = JSON.stringify(this.tasks());
      localStorage.setItem('tasks', tasksJson);
    });
  }

  getUserTasks(userId: string) {
    return this.tasks().filter((task) => task.userId === userId);
  }

  addTask(inputs: NewTaskData, userId: string) {
    const newTask = this.createTaskObject(inputs, userId);
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  removeTask(id: string) {
    const filterFn = (task: TaskObject) => task.id !== id;
    const updateFn = (tasks: TaskObject[]) => tasks.filter(filterFn);
    this.tasks.update(updateFn);
  }

  private maxTask() {
    if (this.tasks().length === 0) {
      return 0;
    }
    const getId = (task: TaskObject) => Number(task.id.slice(1));
    const reducer = (max: TaskObject, current: TaskObject) =>
      getId(current) > getId(max) ? current : max;
    const lastTask = this.tasks().reduce(reducer);
    return getId(lastTask);
  }

  private createTaskObject(inputs: NewTaskData, userId: string): TaskObject {
    const { title, summary, dueDate } = inputs;
    const newIdNumber = this.maxTask() + 1;
    const id = `t${newIdNumber}`;
    return { id, userId, title, summary, dueDate };
  }
}
