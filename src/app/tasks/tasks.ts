import { Component, computed, input, signal } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { TASKS } from '../dummy-data';
import { type NewTaskData, type TaskObject } from '../models/task.model';
import { type UserObject } from '../models/user.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  imports: [Task, NewTask],
})
export class Tasks {
  tasks = signal(TASKS);
  user = input.required<UserObject>();
  showModal = signal(false);
  userTasks = computed(() => this.tasks().filter((task) => task.userId === this.user().id));

  onCompleteTask(id: string) {
    const filterFn = (task: TaskObject) => task.id !== id;
    const newTasks = this.tasks().filter(filterFn);
    this.tasks.set(newTasks);
  }

  onStartAddTask() {
    this.showModal.set(true);
  }

  onCancelAddTask() {
    this.showModal.set(false);
  }

  onAddTask(inputs: NewTaskData) {
    const { title, summary, dueDate } = inputs;
    const newId = this.maxTask() + 1;
    const newTask: TaskObject = {
      id: `t${newId}`,
      userId: this.user().id,
      title,
      summary,
      dueDate,
    };
    this.tasks.set([...this.tasks(), newTask]);
    this.showModal.set(false);
  }

  private maxTask() {
    const getId = (task: TaskObject) => Number(task.id.slice(1));
    const reducer = (max: TaskObject, current: TaskObject) =>
      getId(current) > getId(max) ? current : max;
    const lastTask = this.tasks().reduce(reducer);
    return getId(lastTask);
  }
}
