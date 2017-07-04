var express = require('express');
var router = express.Router();
var models = require('../../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var kox = models.User.create({name: 'Kristijan Korac', username: 'kox@mox.hr'})
  kox.then(function() {
    console.log('===========');
  });
  res.send('respond with a resource');
});

module.exports = router;
