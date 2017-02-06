var express = require('express');
var router = express.Router();
var controller = require('../controllers/user')

router.post('/users/add', controller.add)

router.get('/users', controller.read)

module.exports = router;
