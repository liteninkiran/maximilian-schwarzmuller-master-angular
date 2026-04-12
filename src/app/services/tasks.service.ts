import { Injectable, signal } from '@angular/core';
import { type NewTaskData, type TaskObject } from '../models/task.model';
import { TASKS } from '../dummy-data';

@Injectable({ providedIn: 'root' })
export class TasksService {
  tasks = signal(TASKS);

  getUserTasks(userId: string) {
    return this.tasks().filter((task) => task.userId === userId);
  }

  addTask(inputs: NewTaskData, userId: string) {
    const newTask = this.createTaskObject(inputs, userId);
    this.tasks.set([...this.tasks(), newTask]);
  }

  removeTask(id: string) {
    const filterFn = (task: TaskObject) => task.id !== id;
    const newTasks = this.tasks().filter(filterFn);
    this.tasks.set(newTasks);
  }

  private maxTask() {
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
