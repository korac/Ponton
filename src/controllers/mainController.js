var models = require('../../models');

exports.index = function(req, res, next) {
  console.log('UserId je: ' + req.session.userId);
  if (!req.session.userId) {
    console.log('NE VALJA SIFRA');
    res.redirect('/session/login');
  } else {
    console.log('On main page');
    req.flash('success', 'You have successfully logged in');

    models.User.findAll().then(function(users) {
      console.log('Postoje useri!');
      console.log(users);
      res.render('index', { title: 'Ponton', friends: users });
    });
  }

};

