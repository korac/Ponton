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
    console.log('-----------');
    res.redirect('/');
    console.log('-----------');
  }).catch(function () {
    console.log('WHAT THE FUCK');
    // req.flash('error', 'Invalid email or password');
    // // TODO - study Promise objects in more depth
    // console.log('NIJE DOBRO');
    res.redirect('/session/login');
  });

};

// Destroy a current session (user logout)
exports.destroy = function (req, res, next) {
};