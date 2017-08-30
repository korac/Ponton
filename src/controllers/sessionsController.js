var User = require('../../models').User;

// Return a form for creating a new user session (User login)
exports.new = function (req, res, next) {
  res.render('login', {title: 'Login | Ponton'});
};

// Create a new user session (user is logged in)
exports.create = function (req, res, next) {
  var user = User.authenticateUser(req.body['user[email]'], req.body['user[password]']);
  user.then(function (response) {
    req.session.userId = response.dataValues.id;
  }).catch(function () {
    console.log('WHAT THE FUCK');
    // TODO - study Promise objects in more depth
    // res.redirect('/session/login');
  });

};

// Destroy a current session (user logout)
exports.destroy = function (req, res, next) {
  req.logOut();
  req.session.destroy();
  res.redirect('/login');
};