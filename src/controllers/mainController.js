var User = require('../../models').User;

exports.index = function(req, res, next) {

  console.log(req.user.id + '-----------------s-s-s-');
  User.findOne({ where: {id: req.user.id} }).then(function(user) {
    console.log(user);
    User.findAll().then(function(users) {
      res.render('index', { title: 'Ponton', user: user, friends: users });
    });
  });

};

