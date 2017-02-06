const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
var usersSchema = new Schema({
  name: String,
  position: String,
  office: String,
  age: Number,
  start_date: Date,
  salary: String
});

// the schema is useless so far
// we need to create a model using it
const Users = mongoose.model('Users', usersSchema);

// make this available to our users in our Node applications
module.exports = Users;
