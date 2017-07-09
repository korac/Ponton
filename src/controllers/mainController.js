var models = require('../../models');

exports.index = function(req, res, next) {
  models.User.findAll().then(function(users) {
    res.render('index', { title: 'Ponton', friends: users });
  });
};

