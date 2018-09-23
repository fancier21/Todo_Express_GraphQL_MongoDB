const todoModel = require("./models/Todo");

module.exports = {
  todo: ({ id }) => todoModel.findById(id),
  todos: () => todoModel.find(),
  createTodo: ({ input }) => todoModel.create(input),
  updateTodo: ({ id, input }) =>
    todoModel.findByIdAndUpdate(id, input, { new: true }),
  deleteTodo: ({ id }) => todoModel.findByIdAndRemove({ _id: id })
};
