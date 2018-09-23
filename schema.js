const { buildSchema } = require("graphql");

module.exports = buildSchema(`

  type Step {
    title: String
    completed: Boolean
  }

  type Todo {
    id: ID,
    title: String,
    completed: Boolean
    steps: [Step]
  }

  type Query {
    todo(id: ID): Todo
    todos: [Todo]
  }

  input StepInput {
    title: String
    completed: Boolean = false
  }

  input TodoInput {
    title: String
    completed: Boolean = false
    steps: [StepInput]
  }

  type Mutation {
    createTodo(input: TodoInput!): Todo
    updateTodo(id: ID!, input: TodoInput!): Todo
    deleteTodo(id: ID!): Todo
  }
`);
