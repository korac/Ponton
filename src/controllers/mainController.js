var User = require('../../models').User;

exports.index = function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/session/login');
    return;
  }

  User.findAll().then(function(users) {
    console.log('Postoje useri!');
    res.render('index', { title: 'Ponton', friends: users });
  });

};

