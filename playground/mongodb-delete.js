// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to Mongodb server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Test Todo1'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete (Andrew's favorite)
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // challenge - deleteMany
  // db.collection('Users').deleteMany({name: 'Anakin'}).then((result) => {
  //   console.log(result);
  // });

  // challenge - findOneAndDelete
  db.collection('Users').findOneAndDelete({_id: new ObjectID("58306e1a12aa546c2c01c14f")}).then((result) => {
    console.log(JSON.stringify(result));
  });

  // db.close();
});
