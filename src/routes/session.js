var express = require('express');
var router = express.Router();
var Session = require('../controllers/sessionsController');

router.get('/login', Session.new);
router.post('/login', Session.create);

module.exports = router;