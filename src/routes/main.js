var express = require('express');
var router = express.Router();
var MainController = require('../controllers/mainController');
var UserController = require('../controllers/usersController');

router.get('/', MainController.index);
router.get('/signup', UserController.new);
router.post('/signup', UserController.create);

module.exports = router;