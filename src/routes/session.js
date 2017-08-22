var express = require('express');
var router = express.Router();
var SessionController = require('../controllers/sessionsController');
var passport = require('passport');
var passportService = require('../services/passport');

var loginOptions = { successRedirect: '/', failureRedirect: '/session/login', failureFlash: true };
var requireLogin = passport.authenticate('local', loginOptions);

router.get('/login', SessionController.new);
router.post('/login', requireLogin);

router.get('/logout', SessionController.destroy);

module.exports = router;