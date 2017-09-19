var User = require('../../models').User;

// Return a form for creating a new user (User signup)
exports.new = function(req, res, next) {
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
        res.redirect(301, '/login');
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


// TODO BIG! - review the authentication logic for login and signup (check TODO-2)
// TODO - refactor the authentication logic - approach it more in Node/Express style
// TODO - take some time in refactoring and make it well and sturctured
