var User = require('../../models').User;

// Return a form for creating a new user session (User login)
exports.new = function (req, res, next) {
  res.render('login', {title: 'Login | Ponton'});
};

// Create a new user session (user is logged in)
exports.create = function (req, res, next) {
  User.authenticateUser(req.body['user[email]'], req.body['user[password]']);
};

// Destroy a current session (user logout)
exports.destroy = function (req, res, next) {
};