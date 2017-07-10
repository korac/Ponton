var User = require('../../models').User;

// Return a form for creating a new user (User signup)
exports.new = function(req, res, next) {
  res.render('signup', { title: 'Signup | Ponton' });
};

// Create a new user
exports.create = function(req, res, next) {
  User.create({ name: req.body['user[name]'], email: req.body['user[email]'], password: req.body['user[password]']})
      .then(function () {
        // Add a flash
        console.log('New User created');
      });
};

// Return a form for updating a current user
exports.edit = function(req, res, next) {};

// Update a current user
exports.update = function(req, res, next) {};