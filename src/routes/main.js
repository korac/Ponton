var express = require('express');
var router = express.Router();
var Main = require('../controllers/mainController');

/* GET home page. */
router.get('/', Main.index);

module.exports = router;
