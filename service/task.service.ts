import { Service, Inject } from 'typedi';
import { Task } from '../resolver/';
import { TaskInput, NewTaskInput } from '../resolver/input-types/task.input-type';
import { plainToClass } from 'class-transformer';

interface IFindAllOptions {
  take: number;
  skip: number;
}

@Service()
export class TaskService {
  private autoIncrementValue: number;

  constructor(
    @Inject('SAMPLE_TASKS') private readonly items: Task[]
  ) {
    this.autoIncrementValue = this.items.length;
  }

  findAll({ skip, take }: IFindAllOptions) {
    return this.items.slice(skip, skip + take);
  }

  getOne(id: string) {
    return this.items.find(item => item.id === id);
  }

  add(taskData: NewTaskInput) {
    const newTask = this.createTask(taskData)
    this.items.push(newTask);
    return newTask;
  }

  update(taskData: TaskInput) {
    const existingTask = this.items.find(item => item.id === taskData.id);
    existingTask.task = taskData.task;
    existingTask.completed = taskData.completed;
    existingTask.deleted = taskData.deleted;
    return existingTask;
  }

  private createTask(taskData: Partial<Task>): Task {
    const task = plainToClass(Task, taskData);
    task.id = this.getId();
    return task;
  }

  private getId(): string {
    return (++this.autoIncrementValue).toString();
  }
}