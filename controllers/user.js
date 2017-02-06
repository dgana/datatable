const Users = require('../models/users');

module.exports = {
  add: (req, res) => {
    let newUser = Todos({
      name: req.body.name,
      position: req.body.position,
      office: req.body.office,
      age: req.body.age,
      start_date: new Date(),
      salary: req.body.salary
    });

    // save todo
    newUser.save(function(err, user) {
      if (err) throw err;
      res.json(user);
    });
  },
  read: (req, res) => {
    // get all the users
    Users.find({}, function(err, users) {
      if (err) throw err;

      // object of all todo
      res.json(users)
    });
  }
}
