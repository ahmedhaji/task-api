
# Serverless TypeGraphQL API Boilerplate for Managing Tasks

This is a simple serverless application built using Typescript and Apollo Graphql.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Prerequisite


Install serverless globally

```
npm i serverless -g
```


### Installation


Clone the repository

```
git clone git@github.com:ahmedhaji/task-api.git
```

Install dependencies

```
cd task-api
npm install
```


### Running


Run ```npm start```

Open a browser window and access the following URL:


```
http://localhost:3000/dev/graphql
```

Try running any of the available queries using the docs or to get you started try the following:

```
{
  tasks {
    id,
    task,
    completed,
    deleted
  }
}
```