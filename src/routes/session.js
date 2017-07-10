var express = require('express');
var router = express.Router();
var SessionController = require('../controllers/sessionsController');

router.get('/login', SessionController.new);
router.post('/login', SessionController.create);

// router.get('/signin', SessionController)

module.exports = router;