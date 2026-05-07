export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export interface Task {
  id: `${string}-${string}-${string}-${string}-${string}`;
  title: string;
  description: string;
  status: TaskStatus;
}

export const EXAMPLE_TASKS: Task[] = [
  {
    id: crypto.randomUUID(),
    title: 'Task 1',
    description: 'Task 1 - description',
    status: 'DONE',
  },
  {
    id: crypto.randomUUID(),
    title: 'Task 2',
    description: 'Task 2 - description',
    status: 'IN_PROGRESS',
  },
  {
    id: crypto.randomUUID(),
    title: 'Task 3',
    description: 'Task 3 - description',
    status: 'OPEN',
  },
];
