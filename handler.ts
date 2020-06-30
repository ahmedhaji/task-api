import 'source-map-support/register';
import 'reflect-metadata';
import { TaskResolver } from './resolver/task.resolver';
import { buildSchemaSync } from 'type-graphql';
import { useContainer } from 'class-validator';
import { sampleTasks } from './sample-tasks';
import Container from 'typedi';

const { ApolloServer } = require('apollo-server-lambda');

Container.set({ id: "SAMPLE_TASKS", factory: () => sampleTasks.slice() });
useContainer(Container);

const server = new ApolloServer({
  schema: buildSchemaSync({
    resolvers: [TaskResolver],
    container: Container,
  }),
  introspection: true,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
  playground: {
    endpoint: '/dev/graphql'
  }
});

exports.graphqlHandler = server.createHandler();
