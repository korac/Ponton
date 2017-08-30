var express = require('express');
var router = express.Router();
var MainController = require('./controllers/mainController');
var UserController = require('./controllers/usersController');
var SessionController = require('./controllers/sessionsController');

var auth = require('./services/auth');
var passport = require('passport');
var passportService = require('./services/passport');

var loginOptions = { successRedirect: '/', failureRedirect: '/login', failureFlash: true };
var requireLogin = passport.authenticate('local', loginOptions);

router.get('/', auth.IsAuthenticated, MainController.index);
router.get('/signup', auth.IsNotAuthenticated, UserController.new);
router.post('/signup', UserController.create);

router.get('/login', auth.IsNotAuthenticated, SessionController.new);
router.post('/login', requireLogin);
router.get('/logout', SessionController.destroy);

// router.get('/users', function(req, res, next) {
//   res.send('respond with a resource');
// });


module.exports = router;
