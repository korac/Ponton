var express = require('express');
var router = express.Router();
var SessionController = require('../controllers/sessionsController');
var passport = require('passport');

router.get('/login', SessionController.new);
router.post('/login', SessionController.create);

module.exports = router;