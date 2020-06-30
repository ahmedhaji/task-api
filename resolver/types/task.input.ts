import { ID, ObjectType, Field } from 'type-graphql';

@ObjectType()
export class Task {
  @Field(type => ID)
  id: string;

  @Field()
  task: string;

  @Field()
  completed: boolean;

  @Field()
  deleted?: boolean;
}
