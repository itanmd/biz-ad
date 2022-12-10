var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

var express = require('express');
var router = express.Router();
const users = require('../controllers/users');

router.post('/signUp', users.signup);
router.post('/login', users.login);

module.exports = router;