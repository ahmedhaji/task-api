import { MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { Task } from '../';

@InputType()
export class NewTaskInput implements Partial<Task> {
  @Field()
  @MaxLength(30)
  task: string;

  @Field()
  completed?: boolean;

  @Field()
  deleted?: boolean;
}

@InputType()
export class TaskInput extends NewTaskInput {
  @Field()
  id: string;
}
