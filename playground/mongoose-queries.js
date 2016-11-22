const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// Challenge
const {User} = require('./../server/models/user');

var userId = '5832fb84e6446e2c16a88170';

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User By Id', user);
}).catch((e) => console.log(e));

// var id = '58349cdf8882342420f961d4';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
//
// // returns array
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// //returns object - first matching
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// // returns object - auto handling of id
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));
