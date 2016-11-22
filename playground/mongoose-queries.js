const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '58349cdf8882342420f961d4';

// returns array
Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

//returns object - first matching
Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

// returns object - auto handling of id
Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo By Id', todo);
}).catch((e) => console.log(e));
