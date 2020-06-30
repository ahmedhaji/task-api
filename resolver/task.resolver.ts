import { Query, Resolver, Args, Mutation, Arg } from 'type-graphql';
import { TaskService } from '../service/task.service';
import { TasksArgs } from '.';
import { TaskInput, NewTaskInput } from './input-types/task.input-type';
import { Task } from './types/task.input';

@Resolver(of => Task)
export class TaskResolver {
  constructor(private taskService: TaskService) {}

  @Query(returns => [Task])
  async tasks(@Args() { skip, take }: TasksArgs) {
    return this.taskService.findAll({ skip, take });
  }

  @Mutation(returns => Task)
  async addTask(@Arg('taskData') taskData: NewTaskInput) {
    console.log('asdasdadad')
    return this.taskService.add(taskData);
  }
  
  @Mutation(returns => Task)
  async updateTask(@Arg('taskData') taskData: TaskInput) {
    return this.taskService.update(taskData);
  }

  @Query(returns => Task, { nullable: true })
  async task(@Arg('taskId') taskId: string) {
    return this.taskService.getOne(taskId);
  }
}
