import { Injectable, signal } from '@angular/core';
import { EXAMPLE_TASKS, Task, TaskStatus } from './task.model';

type NewTaskData = Omit<Task, 'id' | 'status'>;
type TaskIdentity = Pick<Task, 'id' | 'status'>;

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>(EXAMPLE_TASKS);

  getAllTasks = this.tasks.asReadonly();

  addTask(data: NewTaskData) {
    type Config = { tasks: Task[]; data: NewTaskData };
    const getProps = () =>
      ({ id: crypto.randomUUID(), status: 'OPEN' }) as TaskIdentity;
    const taskFromData = (data: NewTaskData) =>
      ({ ...data, ...getProps() }) as Task;
    const addNewTask = ({ tasks, data }: Config) => [
      ...tasks,
      taskFromData(data),
    ];
    this.tasks.update((tasks) => addNewTask({ tasks, data }));
  }

  updateTaskStatus(taskId: string, status: TaskStatus) {
    const update = (task: Task) => ({ ...task, status });
    const mapTask = (task: Task) => (task.id === taskId ? update(task) : task);
    const updateTask = (tasks: Task[]) => tasks.map(mapTask);

    this.tasks.update(updateTask);
  }
}
