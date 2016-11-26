const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Mongoose delete methods
// remove() - doesn't return doc
// Todo.remove({})

// findOneAndRemove() - returns doc
// Todo.findOneAndRemove()
Todo.findOneAndRemove({_id: '5835f499a42f672af83d1025'}).then((deletedTodo) => {
  console.log('Todo deleted: ', deletedTodo);
});

// findByIdAndRemove() - returns doc
// Todo.findByIdAndRemove()
// Todo.findByIdAndRemove('5835f499a42f672af83d1026').then((deletedTodo) => {
//   console.log(deletedTodo);
// });
