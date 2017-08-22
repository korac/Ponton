var User = require('../../models').User;

// Return a form for creating a new user (User signup)
exports.new = function(req, res, next) {
  if(req.isAuthenticated()) {
    res.redirect('/');
    return;
  }

  res.render('signup', { title: 'Signup | Ponton' });
};

// Create a new user
exports.create = function(req, res, next) {
  req.check('user[email]', 'Invalid email address').isEmail();
  req.check('user[password]', 'Invalid password').equals(req.body['user[password_confirmation]']);

  var errors = req.validationErrors();
  if (errors) {
    errors.forEach(function (error) {
      req.flash('error', error.msg);
    });
    res.redirect(301, '/signup');
    return;
  }

  User.create({ name: req.body['user[name]'], email: req.body['user[email]'], password: req.body['user[password]']})
      .then(function () {
        req.flash('success', 'You have successfully signed up. Log in to start with Ponton');
        res.redirect(301, '/session/login');
      })
      .catch(function (error) {
        var errorMessage = error.name === 'SequelizeUniqueConstraintError' ? 'Given email is already in use' : error.name;
        req.flash('error', errorMessage);
        res.redirect(301, '/signup');
      });
};

// Return a form for updating a current user
exports.edit = function(req, res, next) {};

// Update a current user
exports.update = function(req, res, next) {};

// TODO - next
// Implement Signup layout [✓]
// Connect it to the UserController (create new User record in the db) [✓]
// Off topic: login form - submit it via default form behavior, not from script ($.ajax) []
// Hash the password before saving the record [✓]
// If everything is alright, redirect to /login path [✓]

// TODO - next 2
// Implement Login authentication []
// Take req.body params, check if a given email exists (if it does, proceed) []
// Check the password - hash it and compare it to corresponding one (implement the method) []
// If everything is alright, set up a user session (CHECK FOR SESSIONS IN NODE/EXPRESS) []
// Redirect to root path []