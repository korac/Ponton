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

// TODO - next
// Implement Signup layout
// Connect it to the UserController (create new User record in the db)
// Hash the password before saving the record
// If everything is alright, redirect to /login path

// TODO - next 2
// Implement Login authentication
// Take req.body params, check if a given email exists (if it does, proceed)
// Check the password - hash it and compare it to corresponding one (implement the method)
// If everything is alright, set up a user session (CHECK FOR SESSIONS IN NODE/EXPRESS)
// Redirect to root path