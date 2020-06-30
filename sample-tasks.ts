import { plainToClass } from 'class-transformer';

import { Task } from './resolver/types/task.input';

export const sampleTasks = [
  createTask({
    id: '1',
    task: 'Wake up',
    completed: true,
    deleted: false,
  }),
  createTask({
    id: '2',
    task: 'Brush teeth',
    completed: false,
    deleted: false,
  }),
  createTask({
    id: '3',
    task: 'Get dressed',
    completed: false,
    deleted: false,
  }),
  createTask({
    id: '4',
    task: 'Have breakfast',
    completed: false,
    deleted: false,
  }),
  createTask({
    id: '5',
    task: 'Go to work',
    completed: false,
    deleted: true,
  }),
  createTask({
    id: '6',
    task: 'Brew a coffee!',
    completed: false,
    deleted: false,
  }),
  createTask({
    id: '7',
    task: 'Happy coding!',
    completed: false,
    deleted: false,
  }),
];

function createTask(taskData: Partial<Task>): Task {
  return plainToClass(Task, taskData);
}