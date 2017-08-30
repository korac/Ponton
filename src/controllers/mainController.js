var User = require('../../models').User;

exports.index = function(req, res, next) {

  User.findAll().then(function(users) {
    console.log('Postoje useri!');
    res.render('index', { title: 'Ponton', friends: users });
  });

};

