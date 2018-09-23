const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema");
const resolvers = require("./resolvers");

mongoose
  .connect(
    "mongodb://Ed:abc123@ds113003.mlab.com:13003/todoql",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
  })
);
app.listen(4000, () => console.log("Now browse to localhost:4000/graphql"));

// query getTodos {
//   todos {
//     id
//     title
//     completed
//     steps {
//       title
//       completed
//     }
//   }
// }

// mutation createTodo($input: TodoInput!) {
//   createTodo(input: $input) {
//     id
//     title
//     completed
//     steps {
//       title
//       completed
//     }
//   }
// }

// mutation updateTodo($input: TodoInput!) {
//   updateTodo(id: "5ba7a95aa35c454ab9a0a5d7", input: $input) {
//     id
//     title
//     completed
//   }
// }

// mutation deleteTodo {
//   deleteTodo(id: "5ba7a95aa35c454ab9a0a5d7") {
//     id
//   }
// }
